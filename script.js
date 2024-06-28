document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (firstName && lastName && email && password) {
                alert('Sign Up successful!');
                document.getElementById('signup-container').classList.add('hidden');
                document.getElementById('signin-container').classList.remove('hidden');
            } else {
                alert('Please fill out all fields.');
            }
        });

        const signinLink = document.getElementById('signinLink');
        signinLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('signup-container').classList.add('hidden');
            document.getElementById('signin-container').classList.remove('hidden');
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;

            if (email && password) {
                alert('Sign In successful!');
                // قم بإعادة توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول بنجاح
            } else {
                alert('Please fill out all fields.');
            }
        });

        const signupLink = document.getElementById('signupLink');
        signupLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('signin-container').classList.add('hidden');
            document.getElementById('signup-container').classList.remove('hidden');
        });
    }
});
