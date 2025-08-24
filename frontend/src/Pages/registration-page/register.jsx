import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './register.css';
import CustomCheckbox from '../../components/customCheckBox/customcheckbox';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    rollNumber: '',
    contact: '',
    email: '',
    ldapId: '',
    department: '',
    yearOfStudy: '',
    cpi: '',
    screenshot: null,
    passportPhoto: null,
    confirmation: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  const [passportPhotoName, setPassportPhotoName] = useState('');

  const [registrationsOpen, setRegistrationsOpen] = useState(true);

  // Fetch registration status from backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/registration-status/')
      .then((res) => res.json())
      .then((data) => {
        console.log('API returned:', data);
        setRegistrationsOpen(data.registrations_open);
      })
      .catch(() => setRegistrationsOpen(false));
  }, []);

  // Dropdown options
  const departments = [
    { value: 'aerospace_engineering', label: 'Aerospace Engineering' },
    { value: 'applied_geophysics', label: 'Applied Geophysics' },
    { value: 'chemical_engineering', label: 'Chemical Engineering' },
    { value: 'civil_engineering', label: 'Civil Engineering' },
    { value: 'computer_science_engineering', label: 'Computer Science and Engineering' },
    { value: 'electrical_engineering', label: 'Electrical Engineering' },
    { value: 'engineering_physics', label: 'Engineering Physics' },
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
    { value: 'mtech', label: 'MTech' },
  ];

  // Handle input text/select/checkbox
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
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
      newErrors.ldapId = "LDAP ID is required";
    } else {
      const ldap = formData.ldapId.trim().toLowerCase();
      if (!ldap.endsWith("@iitb.ac.in")) {
        newErrors.ldapId = "LDAP ID must be in the format ******@iitb.ac.in";
      }
    }

    if (!formData.cpi) {
      newErrors.cpi = 'CPI is required';
    } else if (isNaN(formData.cpi) || formData.cpi < 0 || formData.cpi > 10) {
      newErrors.cpi = 'CPI must be a number between 0 and 10';
    }

    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of Study is required';

    if (!formData.screenshot) {
      newErrors.screenshot = 'Payment screenshot is required';
    } else if (!(formData.screenshot instanceof File)) {
      newErrors.screenshot = 'Invalid file selected';
    } else if (!formData.screenshot.type.startsWith('image/')) {
      newErrors.screenshot = 'Please select an image file';
    }

    if (!formData.passportPhoto) {
      newErrors.passportPhoto = 'Passport photo is required';
    } else if (!(formData.passportPhoto instanceof File)) {
      newErrors.passportPhoto = 'Invalid file selected';
    } else if (!formData.passportPhoto.type.startsWith('image/')) {
      newErrors.passportPhoto = 'Please select an image file';
    }

    if (!formData.confirmation) newErrors.confirmation = 'You must confirm your registration';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fieldName = e.target.name;

    if (file) {
      setFormData((prev) => ({ ...prev, [fieldName]: file }));

      if (fieldName === 'screenshot') {
        setFileName(file.name);
      } else if (fieldName === 'passportPhoto') {
        setPassportPhotoName(file.name);
      }

      if (errors[fieldName]) {
        setErrors((prev) => ({ ...prev, [fieldName]: '' }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: null }));
      if (fieldName === 'screenshot') setFileName('');
      if (fieldName === 'passportPhoto') setPassportPhotoName('');
    }
  };

  // Handle form submit
  const handleSubmit = async () => {
    if (!validateForm()) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Credentials',
        text: 'Please correct the highlighted errors before submitting.',
      });
      return;
    }

    if (!registrationsOpen) {
      Swal.fire({
        icon: 'warning',
        title: 'Registration Closed',
        text: 'Registrations are closed currently.',
      });
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
      form.append('cpi', formData.cpi);
      form.append('payment_screenshot', formData.screenshot);
      form.append('passport_photo', formData.passportPhoto);
      form.append('confirmation_accepted', formData.confirmation);

      const response = await fetch('http://127.0.0.1:8000/api/registrations/create/', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        await response.json();
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Welcome to the Shadow Program!',
        }).then(() => navigate('/'));

        setFormData({
          firstName: '',
          lastName: '',
          rollNumber: '',
          contact: '',
          email: '',
          ldapId: '',
          department: '',
          yearOfStudy: '',
          cpi: '',
          screenshot: null,
          passportPhoto: null,
          confirmation: false,
        });
        setFileName('');
        setPassportPhotoName('');
      } else {
        const errorData = await response.json();

        if (errorData.errors) {
          const formattedErrors = {};
          Object.keys(errorData.errors).forEach((key) => {
            formattedErrors[key] = Array.isArray(errorData.errors[key])
              ? errorData.errors[key][0]
              : errorData.errors[key];
          });

          const fieldMapping = {
            payment_screenshot: 'screenshot',
            passport_photo: 'passportPhoto',
            year_of_study: 'yearOfStudy',
            first_name: 'firstName',
            last_name: 'lastName',
            roll_number: 'rollNumber',
            ldap_id: 'ldapId',
          };

          const mappedErrors = {};
          Object.keys(formattedErrors).forEach((key) => {
            const frontendKey = fieldMapping[key] || key;
            mappedErrors[frontendKey] = formattedErrors[key];
          });

          setErrors(mappedErrors);

          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text:
              errorData.errors.roll_number || errorData.errors.ldap_id
                ? 'This Roll Number or LDAP ID is already registered.'
                : 'Please correct the errors highlighted in the form.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Submission Error',
            text: 'There was an error with your submission. Please try again.',
          });
        }
      }
    } catch (error) {
      console.error('Submission failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to submit the form. Please check your internet connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const QRCodeSVG = () => (
    <div className="flex flex-col items-center">
      <p style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Registration Fee: ₹50
      </p>
      <p style={{ color: 'black', fontSize: '1.1rem' }}>Scan either of the QR codes</p>
      <br />
      <img src="/qr.png" alt="Payment QR Code" style={{ width: 200, height: 200, marginRight: 200 }} />
      <img src="/qr.png" alt="Payment QR Code" style={{ width: 200, height: 200 }} />
    </div>
  );

  return (
    <div className="registration-container">
      {/* Event Card */}
      <div className="wrapper">
        <div className="event_card">
          <div className="card_content">
            <div className="logo_section">
              <img src="/placeholder.svg?height=80&width=80" alt="Company Logo" className="company-logo" />
            </div>
            <div className="info_section">
              <h1 className="event_title">Shadow Program - Company Name</h1>
              <div className="event_details">
                <div className="detail_item">
                  <span className="detail_label">Venue:</span>
                  <span className="detail_value">LHC 101, IIT Bombay</span>
                </div>
                <div className="detail_item">
                  <span className="detail_label">Date:</span>
                  <span className="detail_value">25th August 2025</span>
                </div>
                <div className="detail_item">
                  <span className="detail_label">Time:</span>
                  <span className="detail_value">6:00 PM - 8:00 PM</span>
                </div>
              </div>
              <div className="event_note">
                <span className="note_label">Note:</span>
                Open to all first & second year UG students
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="registration-card">
        <div className="header">
          <h1>Shadow Program Registration</h1>
          <p>SARC - IIT Bombay</p>
        </div>

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

            {/* CPI (centered) */}
            <div className="form-group full-width">
              <label htmlFor="cpi">
                CPI <span className="required">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                id="cpi"
                name="cpi"
                value={formData.cpi}
                onChange={handleInputChange}
                className={`form-input ${errors.cpi ? 'error' : ''}`}
                placeholder="Enter your CPI (0–10)" 
              />
              {errors.cpi && <p className="error-message">{errors.cpi}</p>}
              <p className="cpi-note">CPI will remain confidential and will only be shared with the company</p>
              <div></div> {/* right spacer */}
            </div>


            {/* Payment Section */}
            <div className="payment-section">
              <h3 style={{ fontSize: "2rem" }}>Payment</h3>

              <div className="qr-container">
                <div className="qr-code-wrapper">
                  <QRCodeSVG />

                </div>
              </div>

              <div className="refund-notice">
                <p> This amount will be fully refunded after the Shadow Program</p>
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
                      <p className="upload-text"> Click here to upload your payment screenshot</p>
                      <p className="file-formats">Supported formats: JPG, PNG, JPEG, WEBP, HEIC</p>
                    </div>
                  )}
                </div>
              </div>
              {errors.screenshot && <p className="error-message">{errors.screenshot}</p>}
            </div>
                        
            {/* Passport Photo Upload */}
            <div className="form-group full-width">
              <label htmlFor="passportPhoto">
                Upload Passport Size Photo <span className="required">*</span>
              </label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="passportPhoto"
                  name="passportPhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <div className={`file-upload-area ${passportPhotoName ? 'has-file' : ''} ${errors.passportPhoto ? 'error' : ''}`}>
                  {passportPhotoName ? (
                    <div className="file-success">
                      <p className="file-name">✅ {passportPhotoName}</p>
                      <p className="file-instruction">Click to change file</p>
                    </div>
                  ) : (
                    <div className="file-placeholder">
                      <p className="upload-text"> Click here to upload your passport size photo</p>
                      <p className="file-formats">Supported formats: JPG, PNG, JPEG, WEBP, HEIC</p>
                    </div>
                  )}
                </div>
              </div>
              {errors.passportPhoto && <p className="error-message">{errors.passportPhoto}</p>}
            </div>

            {/* Confirmation Checkbox */}
            <div className="confirmation-section">
              <div className="checkbox-container">
                <CustomCheckbox
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                  label={
                    <>
                      I confirm my registration for the Shadow Program and I understand that I
                      will be attending this program at my own risk, and SARC will not be
                      responsible for any mishaps. The final seat allocation for students will be determined solely at the discretion of the company.<span className="required">*</span>
                    </>
                  }
                />
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
              {isSubmitting ? 'Processing Registration...' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;