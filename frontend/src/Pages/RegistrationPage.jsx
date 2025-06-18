
import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
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
        'Aerospace Engineering',
        'Chemical Engineering',
        'Civil Engineering',
        'Computer Science and Engineering',
        'Electrical Engineering',
        'Engineering Physics',
        'Materials Science and Engineering',
        'Mechanical Engineering',
        'Metallurgical Engineering and Materials Science',
        'Mathematics and Statistics',
        'Chemistry',
        'Physics',
        'Biosciences and Bioengineering',
        'Earth Sciences',
        'Energy Science and Engineering',
        'Environmental Science and Engineering',
        'Industrial Design Centre',
        'Systems and Control Engineering',
        'Climate Studies',
        'Other'
    ];

    const years = [
        '1st Year',
        '2nd Year',
        '3rd Year',
        '4th Year',
        '5th Year',
        'PhD',
        'MSc',
        'MTech'
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
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
            setFormData(prev => ({
                ...prev,
                screenshot: null
            }));
            setFileName('');
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
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
        if (!formData.ldapId.trim()) newErrors.ldapId = 'LDAP ID is required';
        if (!formData.department) newErrors.department = 'Department is required';
        if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of Study is required';
        if (!formData.screenshot) newErrors.screenshot = 'Payment screenshot is required';
        if (!formData.confirmation) newErrors.confirmation = 'You must confirm your registration';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);

            alert('Registration submitted successfully! You will receive a confirmation email shortly.');

            // Reset form
            setFormData({
                name: '',
                rollNumber: '',
                contact: '',
                email: '',
                ldapId: '',
                department: '',
                yearOfStudy: '',
                screenshot: null,
                confirmation: false
            });
            setFileName('');

        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your registration. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const QRCodeSVG = () => (
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="white" />
            {/* Outer corners */}
            <rect x="10" y="10" width="70" height="70" fill="black" />
            <rect x="20" y="20" width="50" height="50" fill="white" />
            <rect x="30" y="30" width="30" height="30" fill="black" />

            <rect x="120" y="10" width="70" height="70" fill="black" />
            <rect x="130" y="20" width="50" height="50" fill="white" />
            <rect x="140" y="30" width="30" height="30" fill="black" />

            <rect x="10" y="120" width="70" height="70" fill="black" />
            <rect x="20" y="130" width="50" height="50" fill="white" />
            <rect x="30" y="140" width="30" height="30" fill="black" />

            {/* Inner pattern */}
            <rect x="90" y="90" width="10" height="10" fill="black" />
            <rect x="110" y="90" width="10" height="10" fill="black" />
            <rect x="90" y="110" width="10" height="10" fill="black" />
            <rect x="110" y="110" width="10" height="10" fill="black" />

            {/* Additional pattern elements */}
            <rect x="90" y="20" width="10" height="10" fill="black" />
            <rect x="90" y="40" width="10" height="10" fill="black" />
            <rect x="90" y="60" width="10" height="10" fill="black" />
            <rect x="20" y="90" width="10" height="10" fill="black" />
            <rect x="40" y="90" width="10" height="10" fill="black" />
            <rect x="60" y="90" width="10" height="10" fill="black" />

            {/* Bottom right pattern */}
            <rect x="120" y="120" width="10" height="10" fill="black" />
            <rect x="140" y="120" width="10" height="10" fill="black" />
            <rect x="160" y="120" width="10" height="10" fill="black" />
            <rect x="180" y="120" width="10" height="10" fill="black" />
            <rect x="120" y="140" width="10" height="10" fill="black" />
            <rect x="140" y="140" width="10" height="10" fill="black" />
            <rect x="160" y="140" width="10" height="10" fill="black" />
            <rect x="180" y="140" width="10" height="10" fill="black" />
            <rect x="120" y="160" width="10" height="10" fill="black" />
            <rect x="140" y="160" width="10" height="10" fill="black" />
            <rect x="160" y="160" width="10" height="10" fill="black" />
            <rect x="180" y="160" width="10" height="10" fill="black" />
            <rect x="120" y="180" width="10" height="10" fill="black" />
            <rect x="140" y="180" width="10" height="10" fill="black" />
            <rect x="160" y="180" width="10" height="10" fill="black" />
            <rect x="180" y="180" width="10" height="10" fill="black" />
        </svg>
    );

    return (
        <div className="registration-container">
            <div className="registration-card">
                {/* Header */}
                <div className="header">
                    <h1>Shadow Program Registration</h1>
                    <p>SARc - IIT Bombay</p>
                </div>

                {/* Form */}
                <div className="form-container">
                    <div className="form-content">
                        {/* Name and Roll Number */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`form-input ${errors.name ? 'error' : ''}`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                            </div>

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

                        {/* LDAP ID */}
                        <div className="form-group full-width">
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
                                        <option key={dept} value={dept}>{dept}</option>
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
                                        <option key={year} value={year}>{year}</option>
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
                                    I confirm my registration for the Shadow Program and I understand that I will be attending this program at my own risk, and SARc will not be responsible for any mishaps. <span className="required">*</span>
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


