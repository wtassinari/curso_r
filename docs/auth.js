document.addEventListener('DOMContentLoaded', function() {
    const passwordContainer = document.getElementById('password-container');
    const protectedContent = document.getElementById('protected-content');
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    // The password is 'cursor2026#'
    // In a real scenario, this is not secure, but it serves the purpose of simple frontend protection
    const correctPassword = 'cursor2026#';

    // Check if user already authenticated in this session
    if (sessionStorage.getItem('authenticated') === 'true') {
        passwordContainer.style.display = 'none';
        protectedContent.style.display = 'block';
    }

    function checkPassword() {
        if (passwordInput.value === correctPassword) {
            sessionStorage.setItem('authenticated', 'true');
            passwordContainer.style.display = 'none';
            protectedContent.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    submitBtn.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});
