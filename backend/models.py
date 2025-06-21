from django.db import models
from django.core.validators import RegexValidator, EmailValidator
import uuid
import os

def upload_payment_screenshot(instance, filename):
    """Generate upload path for payment screenshots"""
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join('payment_screenshots', filename)

class Registration(models.Model):
    """Model for Shadow Program Registration"""
    
    # Personal Information
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=20, unique=True)
    
    # Contact Information
    phone_regex = RegexValidator(
        regex=r'^\d{10}$',
        message="Contact number must be 10 digits."
    )
    contact = models.CharField(validators=[phone_regex], max_length=10)
    email = models.EmailField(validators=[EmailValidator()])
    ldap_id = models.CharField(max_length=50, unique=True)
    
    # Academic Information
    DEPARTMENT_CHOICES = [
        ('aerospace_engineering', 'Aerospace Engineering'),
        ('chemical_engineering', 'Chemical Engineering'),
        ('civil_engineering', 'Civil Engineering'),
        ('computer_science_engineering', 'Computer Science and Engineering'),
        ('electrical_engineering', 'Electrical Engineering'),
        ('engineering_physics', 'Engineering Physics'),
        ('materials_science_engineering', 'Materials Science and Engineering'),
        ('mechanical_engineering', 'Mechanical Engineering'),
        ('metallurgical_engineering', 'Metallurgical Engineering and Materials Science'),
        ('mathematics_statistics', 'Mathematics and Statistics'),
        ('chemistry', 'Chemistry'),
        ('physics', 'Physics'),
        ('biosciences_bioengineering', 'Biosciences and Bioengineering'),
        ('earth_sciences', 'Earth Sciences'),
        ('energy_science_engineering', 'Energy Science and Engineering'),
        ('environmental_science_engineering', 'Environmental Science and Engineering'),
        ('industrial_design_centre', 'Industrial Design Centre'),
        ('systems_control_engineering', 'Systems and Control Engineering'),
        ('climate_studies', 'Climate Studies'),
        ('other', 'Other'),
    ]
    
    YEAR_CHOICES = [
        ('1st_year', '1st Year'),
        ('2nd_year', '2nd Year'),
        ('3rd_year', '3rd Year'),
        ('4th_year', '4th Year'),
        ('5th_year', '5th Year'),
        ('phd', 'PhD'),
        ('msc', 'MSc'),
        ('mtech', 'MTech'),
    ]
    
    department = models.CharField(max_length=50, choices=DEPARTMENT_CHOICES)
    year_of_study = models.CharField(max_length=20, choices=YEAR_CHOICES)
    
    # Payment Information
    payment_screenshot = models.FileField(upload_to=upload_payment_screenshot)
    payment_verified = models.BooleanField(default=False)
    
    # Registration Status
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'rejected'),
        ('completed', 'Completed'),
    ]
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    confirmation_accepted = models.BooleanField(default=True)  # Always true when form is submitted
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Program Completion
    program_attended = models.BooleanField(default=False)
    refund_processed = models.BooleanField(default=False)
    refund_date = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Shadow Program Registration'
        verbose_name_plural = 'Shadow Program Registrations'
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.roll_number}"
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_department_display_name(self):
        return dict(self.DEPARTMENT_CHOICES).get(self.department, self.department)
    
    def get_year_display_name(self):
        return dict(self.YEAR_CHOICES).get(self.year_of_study, self.year_of_study)


class RegistrationSettings(models.Model):
    """Model for managing registration settings"""
    
    registration_open = models.BooleanField(default=True)
    registration_fee = models.DecimalField(max_digits=6, decimal_places=2, default=50.00)
    max_registrations = models.PositiveIntegerField(null=True, blank=True)
    program_date = models.DateTimeField(null=True, blank=True)
    
    # Payment Details
    payment_qr_code = models.ImageField(upload_to='qr_codes/', null=True, blank=True)
    payment_instructions = models.TextField(default="Scan the QR code and pay ₹50")
    
    class Meta:
        verbose_name = 'Registration Settings'
        verbose_name_plural = 'Registration Settings'
    
    def __str__(self):
        return f"Registration Settings - Open: {self.registration_open}"