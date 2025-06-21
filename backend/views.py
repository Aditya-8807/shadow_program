from rest_framework import status, generics
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from django.db import transaction
from .models import Registration, RegistrationSettings
from .serializers import (
    RegistrationSerializer,
    RegistrationListSerializer,
    RegistrationCreateSerializer,
    RegistrationSettingsSerializer,
    DepartmentChoicesSerializer,
    YearChoicesSerializer
)


@api_view(['GET'])
def api_health_check(request):
    """Health check endpoint"""
    return Response({
        'message': 'Django backend is running!',
        'status': 'success',
        'version': '1.0.0'
    })


@api_view(['GET'])
def get_form_data(request):
    """Get form dropdown options and settings"""
    
    # Department choices
    departments = [
        {'value': choice[0], 'label': choice[1]}
        for choice in Registration.DEPARTMENT_CHOICES
    ]
    
    # Year choices
    years = [
        {'value': choice[0], 'label': choice[1]}
        for choice in Registration.YEAR_CHOICES
    ]
    
    # Registration settings
    try:
        settings_obj = RegistrationSettings.objects.first()
        registration_open = settings_obj.registration_open if settings_obj else True
        registration_fee = str(settings_obj.registration_fee) if settings_obj else "50.00"
        payment_instructions = settings_obj.payment_instructions if settings_obj else "Scan the QR code and pay ₹50"
    except:
        registration_open = True
        registration_fee = "50.00"
        payment_instructions = "Scan the QR code and pay ₹50"
    
    return Response({
        'departments': departments,
        'years': years,
        'settings': {
            'registration_open': registration_open,
            'registration_fee': registration_fee,
            'payment_instructions': payment_instructions
        }
    })


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def create_registration(request):
    """Create a new registration"""
    
    try:
        with transaction.atomic():
            serializer = RegistrationCreateSerializer(data=request.data)
            
            if serializer.is_valid():
                # Save the registration
                registration = serializer.save()
                
                # Send confirmation email
                try:
                    send_confirmation_email(registration)
                except Exception as email_error:
                    # Log email error but don't fail the registration
                    print(f"Email sending failed: {email_error}")
                
                # Return success response
                response_serializer = RegistrationSerializer(registration)
                return Response({
                    'message': 'Registration submitted successfully! You will receive a confirmation email shortly.',
                    'registration': response_serializer.data,
                    'success': True
                }, status=status.HTTP_201_CREATED)
            
            else:
                return Response({
                    'message': 'Please correct the errors below.',
                    'errors': serializer.errors,
                    'success': False
                }, status=status.HTTP_400_BAD_REQUEST)
    
    except Exception as e:
        return Response({
            'message': 'There was an error submitting your registration. Please try again.',
            'error': str(e),
            'success': False
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def list_registrations(request):
    """List all registrations (admin view)"""
    
    registrations = Registration.objects.all()
    
    # Apply filters if provided
    status_filter = request.GET.get('status')
    if status_filter:
        registrations = registrations.filter(status=status_filter)
    
    department_filter = request.GET.get('department')
    if department_filter:
        registrations = registrations.filter(department=department_filter)
    
    # Pagination
    page_size = int(request.GET.get('page_size', 20))
    page = int(request.GET.get('page', 1))
    
    start = (page - 1) * page_size
    end = start + page_size
    
    total_count = registrations.count()
    registrations_page = registrations[start:end]
    
    serializer = RegistrationListSerializer(registrations_page, many=True)
    
    return Response({
        'registrations': serializer.data,
        'pagination': {
            'page': page,
            'page_size': page_size,
            'total_count': total_count,
            'total_pages': (total_count + page_size - 1) // page_size
        }
    })


@api_view(['GET'])
def get_registration(request, registration_id):
    """Get a specific registration"""
    
    try:
        registration = Registration.objects.get(id=registration_id)
        serializer = RegistrationSerializer(registration)
        return Response({
            'registration': serializer.data,
            'success': True
        })
    except Registration.DoesNotExist:
        return Response({
            'message': 'Registration not found.',
            'success': False
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['PATCH'])
def update_registration_status(request, registration_id):
    """Update registration status (admin only)"""
    
    try:
        registration = Registration.objects.get(id=registration_id)
        
        new_status = request.data.get('status')
        payment_verified = request.data.get('payment_verified')
        
        if new_status and new_status in dict(Registration.STATUS_CHOICES):
            registration.status = new_status
        
        if payment_verified is not None:
            registration.payment_verified = payment_verified
        
        registration.save()
        
        serializer = RegistrationSerializer(registration)
        return Response({
            'message': 'Registration updated successfully.',
            'registration': serializer.data,
            'success': True
        })
    
    except Registration.DoesNotExist:
        return Response({
            'message': 'Registration not found.',
            'success': False
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def registration_statistics(request):
    """Get registration statistics"""
    
    total_registrations = Registration.objects.count()
    pending_registrations = Registration.objects.filter(status='pending').count()
    approved_registrations = Registration.objects.filter(status='approved').count()
    payment_verified_count = Registration.objects.filter(payment_verified=True).count()
    
    # Department wise statistics
    department_stats = {}
    for dept_code, dept_name in Registration.DEPARTMENT_CHOICES:
        count = Registration.objects.filter(department=dept_code).count()
        if count > 0:
            department_stats[dept_name] = count
    
    # Year wise statistics
    year_stats = {}
    for year_code, year_name in Registration.YEAR_CHOICES:
        count = Registration.objects.filter(year_of_study=year_code).count()
        if count > 0:
            year_stats[year_name] = count
    
    return Response({
        'total_registrations': total_registrations,
        'pending_registrations': pending_registrations,
        'approved_registrations': approved_registrations,
        'payment_verified_count': payment_verified_count,
        'department_statistics': department_stats,
        'year_statistics': year_stats
    })


def send_confirmation_email(registration):
    """Send confirmation email to the registered user"""
    
    subject = f'Shadow Program Registration Confirmation - {registration.roll_number}'
    
    message = f"""
Dear {registration.first_name} {registration.last_name},

Thank you for registering for the Shadow Program at SARC - IIT Bombay!

Your registration details:
- Name: {registration.full_name}
- Roll Number: {registration.roll_number}
- LDAP ID: {registration.ldap_id}
- Department: {registration.get_department_display_name()}
- Year: {registration.get_year_display_name()}
- Contact: {registration.contact}
- Email: {registration.email}

Your registration is currently being reviewed. You will receive further updates on your registered email address.

Important Notes:
- Please ensure your payment screenshot is clear and shows the transaction details
- Your registration fee of ₹50 will be refunded after successful completion of the program
- Keep this email for your records

If you have any questions, please contact SARC - IIT Bombay.

Best regards,
SARC Team
IIT Bombay
    """
    
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [registration.email],
            fail_silently=False,
        )
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise e
    
   