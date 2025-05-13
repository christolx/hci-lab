document.addEventListener('DOMContentLoaded', function() {
    initModelFormValidation();
});

function initModelFormValidation() {
    const form = document.getElementById('model-form');
    if (!form) return;

    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const birthDateInput = document.getElementById('birthDate');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const heightInput = document.getElementById('height');
    const termsCheckbox = document.getElementById('terms');

    const fullNameError = document.getElementById('fullName-error');
    const emailError = document.getElementById('email-error');
    const birthDateError = document.getElementById('birthDate-error');
    const genderError = document.getElementById('gender-error');
    const heightError = document.getElementById('height-error');
    const termsError = document.getElementById('terms-error');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        resetErrors();

        let isValid = true;

        if (!validateFullName(fullNameInput.value)) {
            fullNameError.textContent = 'Please enter your full name (minimum 3 characters)';
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (!validateBirthDate(birthDateInput.value)) {
            birthDateError.textContent = 'You must be at least 18 years old';
            isValid = false;
        }

        if (!validateGender(genderInputs)) {
            genderError.textContent = 'Please select your gender';
            isValid = false;
        }

        if (!validateHeight(heightInput.value, genderInputs)) {
            const selectedGender = Array.from(genderInputs).find(input => input.checked);
            if (!selectedGender) {
                heightError.textContent = 'Please select your gender first';
            } else if (selectedGender.value === 'male') {
                heightError.textContent = 'Male models must be at least 185cm tall';
            } else if (selectedGender.value === 'female') {
                heightError.textContent = 'Female models must be at least 175cm tall';
            } else {
                heightError.textContent = 'Non-Binary models must be at least 150cm tall';
            }
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must agree to the terms and conditions';
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = 'Thank you for your application! We will contact you soon.';
            formMessage.className = 'model-registration__form-message success';

            setTimeout(() => {
                form.reset();
                formMessage.textContent = '';
                formMessage.className = 'model-registration__form-message';
            }, 5000);
        } else {
            formMessage.textContent = 'Please correct the errors in the form.';
            formMessage.className = 'model-registration__form-message error';

            const firstError = document.querySelector('.model-registration__error:not(:empty)');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    function validateFullName(name) {
        return name.trim().length >= 3;
    }

    function validateEmail(email) {
        return email.includes('@') && email.includes('.') && email.trim().length > 5;
    }

    function validateBirthDate(birthDate) {
        if (!birthDate) return false;

        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const age = today.getFullYear() - birthDateObj.getFullYear();

        const hasBirthdayOccurred =
            today.getMonth() > birthDateObj.getMonth() ||
            (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());

        const adjustedAge = hasBirthdayOccurred ? age : age - 1;

        return adjustedAge >= 18;
    }

    function validateGender(genderInputs) {
        return Array.from(genderInputs).some(input => input.checked);
    }

    function validateHeight(height, genderInputs) {
        const selectedGender = Array.from(genderInputs).find(input => input.checked);
        if (!selectedGender) {
            genderError.textContent = 'Please select your gender first';
            return false;
        }

        let minHeight = 150;
        if (selectedGender.value === 'male') {
            minHeight = 185;
        } else if (selectedGender.value === 'female') {
            minHeight = 175;
        }

        const heightNum = parseFloat(height);
        return !isNaN(heightNum) && heightNum >= minHeight && heightNum <= 220;
    }

    function resetErrors() {
        fullNameError.textContent = '';
        emailError.textContent = '';
        birthDateError.textContent = '';
        genderError.textContent = '';
        heightError.textContent = '';
        termsError.textContent = '';
        formMessage.textContent = '';
        formMessage.className = 'model-registration__form-message';
    }

    fullNameInput.addEventListener('blur', function() {
        if (!validateFullName(this.value) && this.value.trim() !== '') {
            fullNameError.textContent = 'Please enter your full name (minimum 3 characters)';
        } else {
            fullNameError.textContent = '';
        }
    });

    emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value) && this.value.trim() !== '') {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    birthDateInput.addEventListener('change', function() {
        if (!validateBirthDate(this.value) && this.value !== '') {
            birthDateError.textContent = 'You must be at least 18 years old';
        } else {
            birthDateError.textContent = '';
        }
    });

    heightInput.addEventListener('blur', function() {
        if (this.value !== '') {
            if (!validateHeight(this.value, genderInputs)) {
                const selectedGender = Array.from(genderInputs).find(input => input.checked);
                if (!selectedGender) {
                    heightError.textContent = 'Please select your gender first';
                } else if (selectedGender.value === 'male') {
                    heightError.textContent = 'Male models must be at least 185cm tall';
                } else if (selectedGender.value === 'female') {
                    heightError.textContent = 'Female models must be at least 175cm tall';
                } else {
                    heightError.textContent = 'Height must be at least 150cm';
                }
            } else {
                heightError.textContent = '';
            }
        } else {
            heightError.textContent = '';
        }
    });

    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            termsError.textContent = '';
        }
    });

    genderInputs.forEach(input => {
        input.addEventListener('change', function() {
            genderError.textContent = '';
            if (heightInput.value) {
                if (!validateHeight(heightInput.value, genderInputs)) {
                    const selectedGender = Array.from(genderInputs).find(input => input.checked);
                    if (selectedGender.value === 'male') {
                        heightError.textContent = 'Male models must be at least 185cm tall';
                    } else if (selectedGender.value === 'female') {
                        heightError.textContent = 'Female models must be at least 175cm tall';
                    } else {
                        heightError.textContent = 'Height must be at least 150cm';
                    }
                } else {
                    heightError.textContent = '';
                }
            }
        });
    });
}
