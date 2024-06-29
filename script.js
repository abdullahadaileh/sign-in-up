

// البدء بجزء تحميل الصفحة وتعريف ال Sections 

document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
// ***************************************************************************************



// بدء sign up form
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // تعريف محتويات ادخال المعلومات الشخصية
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // *****************************************************************************


            // Alert يظهر عند ادخال المعلومات وال

            if (firstName && lastName && email && password) {
                alert('Sign Up successful!');
                document.getElementById('signup-container').classList.add('hidden');
                document.getElementById('signin-container').classList.remove('hidden');
            } else {
                alert('Please fill out all fields.');
            }
        });
            // *******************************************************************************


        // عند النقر على الارسال يتم اخفاء نموذج ال sign up  واظهار نموذج ال sign in 

        const signinLink = document.getElementById('signinLink');
        signinLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('signup-container').classList.add('hidden');
            document.getElementById('signin-container').classList.remove('hidden');
        });
    }
        // *************************************************************************************



        
        // بدء sign in form 

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;


            // Alert عند اكتمال تسجيل الدخول 
            if (email && password) {
                alert('Sign In successful!');


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

