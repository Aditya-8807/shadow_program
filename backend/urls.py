# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # Health check
    path('', views.api_health_check, name='api_health_check'),
    
    # Form data and settings
    path('form-data/', views.get_form_data, name='get_form_data'),
    
    # Registration endpoints
    path('registrations/', views.list_registrations, name='list_registrations'),
    path('registrations/create/', views.create_registration, name='create_registration'),
    path('registrations/<int:registration_id>/', views.get_registration, name='get_registration'),
    path('registrations/<int:registration_id>/update-status/', views.update_registration_status, name='update_registration_status'),
    
    # Statistics
    path('statistics/', views.registration_statistics, name='registration_statistics'),
]