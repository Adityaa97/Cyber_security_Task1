function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (lengthCriteria) strength++;
    if (uppercaseCriteria) strength++;
    if (lowercaseCriteria) strength++;
    if (numberCriteria) strength++;
    if (specialCharCriteria) strength++;

    let feedbackMessage = '';
    switch (strength) {
        case 1:
        case 2:
            feedbackMessage = 'Weak password';
            feedback.style.color = 'red';
            break;
        case 3:
            feedbackMessage = 'Moderate password';
            feedback.style.color = 'orange';
            break;
        case 4:
        case 5:
            feedbackMessage = 'Strong password';
            feedback.style.color = 'green';
            break;
        default:
            feedbackMessage = '';
            break;
    }

    feedback.textContent = feedbackMessage;
}
