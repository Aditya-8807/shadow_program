import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    rollNumber: '',
    contact: '',
    email: '',
    ldapId: '',
    department: '',
    yearOfStudy: '',
    screenshot: null,
    confirmation: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
const departments = [
  { value: 'aerospace_engineering', label: 'Aerospace Engineering' },
  { value: 'geophysics', label: 'Applied Geophysics' },
  { value: 'chemical_engineering', label: 'Chemical Engineering' },
  { value: 'civil_engineering', label: 'Civil Engineering' },
  { value: 'computer_science_engineering', label: 'Computer Science and Engineering' },
  { value: 'electrical_engineering', label: 'Electrical Engineering' },
  { value: 'engineering_physics', label: 'Engineering Physics' },
  { value: 'materials_science_engineering', label: 'Materials Science and Engineering' },
  { value: 'mechanical_engineering', label: 'Mechanical Engineering' },
  { value: 'metallurgical_engineering', label: 'Metallurgical Engineering and Materials Science' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'physics', label: 'Physics' },
  { value: 'biosciences_bioengineering', label: 'Biosciences and Bioengineering' },
  { value: 'earth_sciences', label: 'Earth Sciences' },
   { value: 'economics', label: 'Economics' },
  { value: 'energy_science_engineering', label: 'Energy Science and Engineering' },
  { value: 'environmental_science_engineering', label: 'Environmental Science and Engineering' },
  { value: 'industrial_engineering', label: 'Industrial Engineering and Operations Research' },
  { value: 'systems_control_engineering', label: 'Systems and Control Engineering' },
  { value: 'climate_studies', label: 'Climate Studies' },
  { value: 'other', label: 'Other' },
  
];

  const years = [
  { value: '1st_year', label: '1st Year' },
  { value: '2nd_year', label: '2nd Year' },
  { value: '3rd_year', label: '3rd Year' },
  { value: '4th_year', label: '4th Year' },
  { value: '5th_year', label: '5th Year' },
  { value: 'phd', label: 'PhD' },
  { value: 'msc', label: 'MSc' },
  { value: 'mtech', label: 'MTech' }
];


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  
  const validateForm = () => {
  const newErrors = {};

  if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
  if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
  if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll Number is required';
  if (!formData.contact.trim()) {
    newErrors.contact = 'Contact Number is required';
  } else if (!/^\d{10}$/.test(formData.contact)) {
    newErrors.contact = 'Contact Number must be 10 digits';
  }
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email';
  }
 if (!formData.ldapId.trim()) {
  newErrors.ldapId = 'LDAP ID is required';
} else {
  const parts = formData.ldapId.trim().split('@');
  if (parts.length !== 2 || parts[1] !== 'iitb.ac.in') {
    newErrors.ldapId = 'LDAP ID must be in the format ******@iitb.ac.in';
  }
}

  if (!formData.department) newErrors.department = 'Department is required';
  if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of Study is required';
  
  // More specific file validation
  if (!formData.screenshot) {
    newErrors.screenshot = 'Payment screenshot is required';
  } else if (!(formData.screenshot instanceof File)) {
    newErrors.screenshot = 'Invalid file selected';
  } else if (!formData.screenshot.type.startsWith('image/')) {
    newErrors.screenshot = 'Please select an image file';
  }
  
  if (!formData.confirmation) newErrors.confirmation = 'You must confirm your registration';

  console.log('Validation errors:', newErrors); // Debug log
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  
 const handleFileChange = (e) => {
  const file = e.target.files[0];
  console.log('File selected:', file); // Debug log
  
  if (file) {
    console.log('File details:', {
      name: file.name,
      size: file.size,
      type: file.type
    }); // Debug log
    
    setFormData(prev => ({
      ...prev,
      screenshot: file
    }));
    setFileName(file.name);
    
    // Clear file error
    if (errors.screenshot) {
      setErrors(prev => ({
        ...prev,
        screenshot: ''
      }));
    }
  } else {
    console.log('No file selected'); // Debug log
    setFormData(prev => ({
      ...prev,
      screenshot: null
    }));
    setFileName('');
  }
};

// Updated handleSubmit function with file debugging
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  // Debug: Check if file exists before submitting
  console.log('Form data before submit:', formData);
  console.log('Screenshot file:', formData.screenshot);
  
  if (!formData.screenshot) {
    console.error('No screenshot file found!');
    alert('Please select a payment screenshot before submitting.');
    return;
  }

  setIsSubmitting(true);

  try {
    const form = new FormData();
    form.append('first_name', formData.firstName);
    form.append('last_name', formData.lastName);
    form.append('roll_number', formData.rollNumber);
    form.append('contact', formData.contact);
    form.append('email', formData.email);
    form.append('ldap_id', formData.ldapId);
    form.append('department', formData.department);
    form.append('year_of_study', formData.yearOfStudy);
    
    // Debug: Log file before appending
    console.log('Appending file to FormData:', formData.screenshot);
    form.append('payment_screenshot', formData.screenshot);
form.append('confirmation_accepted', formData.confirmation); 
    // Debug: Check FormData contents
    for (let pair of form.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    const response = await fetch('http://127.0.0.1:8000/api/registrations/create/', {
      method: 'POST',
      body: form,
    });

    if (response.ok) {
      const data = await response.json();
      alert('✅ Registration successful!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        rollNumber: '',
        contact: '',
        email: '',
        ldapId: '',
        department: '',
        yearOfStudy: '',
        screenshot: null,
        confirmation: false,
      });
      setFileName('');
    } else {
      const errorData = await response.json();
      console.error('❌ Validation errors:', errorData);
      
      // Handle specific field errors from backend
      if (errorData.errors) {
        // Convert backend error format to frontend format
        const formattedErrors = {};
        
        Object.keys(errorData.errors).forEach(key => {
          // Backend returns arrays, take the first error message
          if (Array.isArray(errorData.errors[key])) {
            formattedErrors[key] = errorData.errors[key][0];
          } else {
            formattedErrors[key] = errorData.errors[key];
          }
        });

        // Map backend field names to frontend field names if needed
        const fieldMapping = {
          'payment_screenshot': 'screenshot',
          'year_of_study': 'yearOfStudy',
          'first_name': 'firstName',
          'last_name': 'lastName',
          'roll_number': 'rollNumber',
          'ldap_id': 'ldapId'
        };

        const mappedErrors = {};
        Object.keys(formattedErrors).forEach(key => {
          const frontendKey = fieldMapping[key] || key;
          mappedErrors[frontendKey] = formattedErrors[key];
        });

        setErrors(mappedErrors);
        alert('❌ Please correct the errors highlighted in the form.');
      } else {
        alert('❌ There was an error with your submission. Please check your data.');
      }
    }
  } catch (error) {
    console.error('❌ Submission failed:', error);
    alert('❌ Failed to submit the form. Please check your internet connection and try again.');
  } finally {
    setIsSubmitting(false);
  }
};
  
  const QRCodeSVG = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="white"/>
      {/* Outer corners */}
      <rect x="10" y="10" width="70" height="70" fill="black"/>
      <rect x="20" y="20" width="50" height="50" fill="white"/>
      <rect x="30" y="30" width="30" height="30" fill="black"/>
      
      <rect x="120" y="10" width="70" height="70" fill="black"/>
      <rect x="130" y="20" width="50" height="50" fill="white"/>
      <rect x="140" y="30" width="30" height="30" fill="black"/>
      
      <rect x="10" y="120" width="70" height="70" fill="black"/>
      <rect x="20" y="130" width="50" height="50" fill="white"/>
      <rect x="30" y="140" width="30" height="30" fill="black"/>
      
      {/* Inner pattern */}
      <rect x="90" y="90" width="10" height="10" fill="black"/>
      <rect x="110" y="90" width="10" height="10" fill="black"/>
      <rect x="90" y="110" width="10" height="10" fill="black"/>
      <rect x="110" y="110" width="10" height="10" fill="black"/>
      
      {/* Additional pattern elements */}
      <rect x="90" y="20" width="10" height="10" fill="black"/>
      <rect x="90" y="40" width="10" height="10" fill="black"/>
      <rect x="90" y="60" width="10" height="10" fill="black"/>
      <rect x="20" y="90" width="10" height="10" fill="black"/>
      <rect x="40" y="90" width="10" height="10" fill="black"/>
      <rect x="60" y="90" width="10" height="10" fill="black"/>
      
      {/* Bottom right pattern */}
      <rect x="120" y="120" width="10" height="10" fill="black"/>
      <rect x="140" y="120" width="10" height="10" fill="black"/>
      <rect x="160" y="120" width="10" height="10" fill="black"/>
      <rect x="180" y="120" width="10" height="10" fill="black"/>
      <rect x="120" y="140" width="10" height="10" fill="black"/>
      <rect x="140" y="140" width="10" height="10" fill="black"/>
      <rect x="160" y="140" width="10" height="10" fill="black"/>
      <rect x="180" y="140" width="10" height="10" fill="black"/>
      <rect x="120" y="160" width="10" height="10" fill="black"/>
      <rect x="140" y="160" width="10" height="10" fill="black"/>
      <rect x="160" y="160" width="10" height="10" fill="black"/>
      <rect x="180" y="160" width="10" height="10" fill="black"/>
      <rect x="120" y="180" width="10" height="10" fill="black"/>
      <rect x="140" y="180" width="10" height="10" fill="black"/>
      <rect x="160" y="180" width="10" height="10" fill="black"/>
      <rect x="180" y="180" width="10" height="10" fill="black"/>
    </svg>
  );

  return (
    <div className="registration-container">
      <div className="registration-card">
        {/* Header */}
        <div className="header">
          <h1>Shadow Program Registration</h1>
          <p>SARC - IIT Bombay</p>
        </div>

        {/* Form */}
        <div className="form-container">
          <div className="form-content">
            {/* First Name and Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
              </div>
            </div>

            {/* Roll Number and LDAP ID */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rollNumber">
                  Roll Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className={`form-input ${errors.rollNumber ? 'error' : ''}`}
                  placeholder="Enter your roll number"
                />
                {errors.rollNumber && <p className="error-message">{errors.rollNumber}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="ldapId">
                  LDAP ID <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="ldapId"
                  name="ldapId"
                  value={formData.ldapId}
                  onChange={handleInputChange}
                  className={`form-input ${errors.ldapId ? 'error' : ''}`}
                  placeholder="Enter your LDAP ID"
                />
                {errors.ldapId && <p className="error-message">{errors.ldapId}</p>}
              </div>
            </div>

            {/* Contact and Email */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact">
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className={`form-input ${errors.contact ? 'error' : ''}`}
                  placeholder="10-digit mobile number"
                />
                {errors.contact && <p className="error-message">{errors.contact}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email ID <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
            </div>

            {/* Department and Year */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="department">
                  Department <span className="required">*</span>
                </label>
                <select
  id="department"
  name="department"
  value={formData.department}
  onChange={handleInputChange}
  className={`form-select ${errors.department ? 'error' : ''}`}
>
  <option value="">Select Department</option>
  {departments.map(dept => (
    <option key={dept.value} value={dept.value}>{dept.label}</option>
  ))}
</select>

                {errors.department && <p className="error-message">{errors.department}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="yearOfStudy">
                  Year of Study <span className="required">*</span>
                </label>
                <select
  id="yearOfStudy"
  name="yearOfStudy"
  value={formData.yearOfStudy}
  onChange={handleInputChange}
  className={`form-select ${errors.yearOfStudy ? 'error' : ''}`}
>
  <option value="">Select Year</option>
  {years.map(year => (
    <option key={year.value} value={year.value}>{year.label}</option>
  ))}
</select>

                {errors.yearOfStudy && <p className="error-message">{errors.yearOfStudy}</p>}
              </div>
            </div>

            {/* Payment Section */}
            <div className="payment-section">
              <h3>Payment Information</h3>
              
              <div className="qr-container">
                <div className="qr-code-wrapper">
                  <QRCodeSVG />
                  <p className="qr-label">Google Pay QR Code</p>
                  <p className="fee-amount">Registration Fee: ₹50</p>
                </div>
              </div>
              
              <div className="refund-notice">
                <p>💰 This amount will be fully refunded after you successfully attend the Shadow Program</p>
              </div>
            </div>

            {/* Screenshot Upload */}
            <div className="form-group full-width">
              <label htmlFor="screenshot">
                Upload Payment Screenshot <span className="required">*</span>
              </label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="screenshot"
                  name="screenshot"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <div className={`file-upload-area ${fileName ? 'has-file' : ''} ${errors.screenshot ? 'error' : ''}`}>
                  {fileName ? (
                    <div className="file-success">
                      <p className="file-name">✅ {fileName}</p>
                      <p className="file-instruction">Click to change file</p>
                    </div>
                  ) : (
                    <div className="file-placeholder">
                      <p className="upload-text">📷 Click here to upload your payment screenshot</p>
                      <p className="file-formats">Supported formats: JPG, PNG, GIF</p>
                    </div>
                  )}
                </div>
              </div>
              {errors.screenshot && <p className="error-message">{errors.screenshot}</p>}
            </div>

            {/* Confirmation Checkbox */}
            <div className="confirmation-section">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                  className="checkbox"
                />
                <label htmlFor="confirmation" className="checkbox-label">
                  I confirm my registration for the Shadow Program and I understand that I will be attending this program at my own risk, and SARC will not be responsible for any mishaps. <span className="required">*</span>
                </label>
              </div>
              {errors.confirmation && <p className="error-message">{errors.confirmation}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            >
              {isSubmitting ? 'Processing Registration...' : 'Register for Shadow Program'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;