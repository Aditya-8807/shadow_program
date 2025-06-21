from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import Registration, RegistrationSettings


@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    """Admin interface for Registration model"""
    
    list_display = [
        'roll_number',
        'full_name',
        'department_display',
        'year_display',
        'contact',
        'email',
        'payment_status',
        'status',
        'created_at'
    ]
    
    list_filter = [
        'status',
        'payment_verified',
        'department',
        'year_of_study',
        'program_attended',
        'refund_processed',
        'created_at'
    ]
    
    search_fields = [
        'first_name',
        'last_name',
        'roll_number',
        'email',
        'ldap_id',
        'contact'
    ]
    
    readonly_fields = [
        'created_at',
        'updated_at',
        'full_name',
        'payment_screenshot_preview'
    ]
    
    fieldsets = [
        ('Personal Information', {
            'fields': [
                'first_name',
                'last_name',
                'full_name',
                'roll_number',
                'ldap_id'
            ]
        }),
        ('Contact Information', {
            'fields': [
                'contact',
                'email'
            ]
        }),
        ('Academic Information', {
            'fields': [
                'department',
                'year_of_study'
            ]
        }),
        ('Payment Information', {
            'fields': [
                'payment_screenshot',
                'payment_screenshot_preview',
                'payment_verified'
            ]
        }),
        ('Registration Status', {
            'fields': [
                'status',
                'confirmation_accepted'
            ]
        }),
        ('Program Completion', {
            'fields': [
                'program_attended',
                'refund_processed',
                'refund_date'
            ]
        }),
        ('Timestamps', {
            'fields': [
                'created_at',
                'updated_at'
            ],
            'classes': ['collapse']
        })
    ]
    
    actions = [
        'mark_payment_verified',
        'mark_payment_unverified',
        'approve_registration',
        'reject_registration',
        'mark_program_attended',
        'process_refund'
    ]
    
    def full_name(self, obj):
        return obj.full_name
    full_name.short_description = 'Full Name'
    
    def department_display(self, obj):
        return obj.get_department_display_name()
    department_display.short_description = 'Department'
    
    def year_display(self, obj):
        return obj.get_year_display_name()
    year_display.short_description = 'Year'
    
    def payment_status(self, obj):
        if obj.payment_verified:
            return format_html(
                '<span style="color: green; font-weight: bold;">✓ Verified</span>'
            )
        else:
            return format_html(
                '<span style="color: red; font-weight: bold;">✗ Pending</span>'
            )
    payment_status.short_description = 'Payment'
    
    def payment_screenshot_preview(self, obj):
        if obj.payment_screenshot:
            return format_html(
                '<a href="{}" target="_blank">'
                '<img src="{}" style="max-width: 200px; max-height: 200px;" />'
                '</a>',
                obj.payment_screenshot.url,
                obj.payment_screenshot.url
            )
        return "No screenshot uploaded"
    payment_screenshot_preview.short_description = 'Payment Screenshot'
    
    # Admin Actions
    def mark_payment_verified(self, request, queryset):
        updated = queryset.update(payment_verified=True)
        self.message_user(request, f'{updated} registrations marked as payment verified.')
    mark_payment_verified.short_description = 'Mark payment as verified'
    
    def mark_payment_unverified(self, request, queryset):
        updated = queryset.update(payment_verified=False)
        self.message_user(request, f'{updated} registrations marked as payment unverified.')
    mark_payment_unverified.short_description = 'Mark payment as unverified'
    
    def approve_registration(self, request, queryset):
        updated = queryset.update(status='approved')
        self.message_user(request, f'{updated} registrations approved.')
    approve_registration.short_description = 'Approve registrations'
    
    def reject_registration(self, request, queryset):
        updated = queryset.update(status='rejected')
        self.message_user(request, f'{updated} registrations rejected.')
    reject_registration.short_description = 'Reject registrations'
    
    def mark_program_attended(self, request, queryset):
        updated = queryset.update(program_attended=True, status='completed')
        self.message_user(request, f'{updated} registrations marked as program attended.')
    mark_program_attended.short_description = 'Mark program as attended'
    
    def process_refund(self, request, queryset):
        from django.utils import timezone
        updated = queryset.filter(program_attended=True).update(
            refund_processed=True,
            refund_date=timezone.now()
        )
        self.message_user(request, f'{updated} refunds processed.')
    process_refund.short_description = 'Process refunds'


@admin.register(RegistrationSettings)
class RegistrationSettingsAdmin(admin.ModelAdmin):
    """Admin interface for Registration Settings"""
    
    list_display = [
        'registration_open',
        'registration_fee',
        'max_registrations',
        'program_date'
    ]
    
    fieldsets = [
        ('Registration Control', {
            'fields': [
                'registration_open',
                'max_registrations',
                'program_date'
            ]
        }),
        ('Payment Settings', {
            'fields': [
                'registration_fee',
                'payment_qr_code',
                'payment_instructions'
            ]
        })
    ]
    
    def has_add_permission(self, request):
        # Only allow one settings object
        return not RegistrationSettings.objects.exists()
    
    def has_delete_permission(self, request, obj=None):
        # Don't allow deletion of settings
        return False