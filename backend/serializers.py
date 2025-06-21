from rest_framework import serializers
from .models import Registration, RegistrationSettings
import re

class RegistrationSerializer(serializers.ModelSerializer):
    """Serializer for Registration model"""
    
    # Add computed fields
    full_name = serializers.ReadOnlyField()
    department_display = serializers.CharField(source='get_department_display_name', read_only=True)
    year_display = serializers.CharField(source='get_year_display_name', read_only=True)
    
    class Meta:
        model = Registration
        fields = [
            'id',
            'first_name',
            'last_name',
            'full_name',
            'roll_number',
            'contact',
            'email',
            'ldap_id',
            'department',
            'department_display',
            'year_of_study',
            'year_display',
            'payment_screenshot',
            'payment_verified',
            'status',
            'confirmation_accepted',
            'program_attended',
            'refund_processed',
            'refund_date',
            'created_at',
            'updated_at'
        ]
        read_only_fields = [
            'id',
            'full_name',
            'department_display',
            'year_display',
            'payment_verified',
            'status',
            'program_attended',
            'refund_processed',
            'refund_date',
            'created_at',
            'updated_at'
        ]
    
    def validate_contact(self, value):
        """Validate contact number format"""
        if not re.match(r'^\d{10}$', value):
            raise serializers.ValidationError("Contact number must be exactly 10 digits.")
        return value
    
    def validate_email(self, value):
        """Validate email format"""
        if not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', value):
            raise serializers.ValidationError("Please enter a valid email address.")
        return value
    
    def validate_roll_number(self, value):
        """Validate roll number uniqueness"""
        if self.instance:
            # If updating, exclude current instance
            if Registration.objects.filter(roll_number=value).exclude(id=self.instance.id).exists():
                raise serializers.ValidationError("A registration with this roll number already exists.")
        else:
            # If creating new
            if Registration.objects.filter(roll_number=value).exists():
                raise serializers.ValidationError("A registration with this roll number already exists.")
        return value
    
    def validate_ldap_id(self, value):
        """Validate LDAP ID uniqueness"""
        if self.instance:
            # If updating, exclude current instance
            if Registration.objects.filter(ldap_id=value).exclude(id=self.instance.id).exists():
                raise serializers.ValidationError("A registration with this LDAP ID already exists.")
        else:
            # If creating new
            if Registration.objects.filter(ldap_id=value).exists():
                raise serializers.ValidationError("A registration with this LDAP ID already exists.")
        return value
    
    def validate_payment_screenshot(self, value):
        """Validate uploaded file"""
        if value:
            # Check file size (max 5MB)
            if value.size > 5 * 1024 * 1024:
                raise serializers.ValidationError("File size cannot exceed 5MB.")
            
            # Check file format
            allowed_formats = ['jpg', 'jpeg', 'png', 'gif']
            ext = value.name.split('.')[-1].lower()
            if ext not in allowed_formats:
                raise serializers.ValidationError("Only JPG, PNG, and GIF files are allowed.")
        
        return value


class RegistrationListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for listing registrations"""
    
    full_name = serializers.ReadOnlyField()
    department_display = serializers.CharField(source='get_department_display_name', read_only=True)
    year_display = serializers.CharField(source='get_year_display_name', read_only=True)
    
    class Meta:
        model = Registration
        fields = [
            'id',
            'full_name',
            'roll_number',
            'email',
            'department_display',
            'year_display',
            'status',
            'payment_verified',
            'created_at'
        ]


class RegistrationCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating new registrations"""
    
    class Meta:
        model = Registration
        fields = [
            'first_name',
            'last_name',
            'roll_number',
            'contact',
            'email',
            'ldap_id',
            'department',
            'year_of_study',
            'payment_screenshot',
            'confirmation_accepted'
        ]
    
    def validate(self, data):
        """Validate the entire form data"""
        
        # Check if registration is open
        try:
            settings = RegistrationSettings.objects.first()
            if settings and not settings.registration_open:
                raise serializers.ValidationError("Registration is currently closed.")
        except RegistrationSettings.DoesNotExist:
            pass
        
        # Ensure confirmation is accepted
        if not data.get('confirmation_accepted', False):
            raise serializers.ValidationError({
                'confirmation_accepted': 'You must accept the confirmation to register.'
            })
        
        return data


class RegistrationSettingsSerializer(serializers.ModelSerializer):
    """Serializer for registration settings"""
    
    class Meta:
        model = RegistrationSettings
        fields = [
            'registration_open',
            'registration_fee',
            'max_registrations',
            'program_date',
            'payment_qr_code',
            'payment_instructions'
        ]


class DepartmentChoicesSerializer(serializers.Serializer):
    """Serializer for department choices"""
    value = serializers.CharField()
    label = serializers.CharField()


class YearChoicesSerializer(serializers.Serializer):
    """Serializer for year choices"""
    value = serializers.CharField()
    label = serializers.CharField()