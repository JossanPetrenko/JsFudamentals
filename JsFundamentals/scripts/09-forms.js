
//preventingFormSubmission();
function preventingFormSubmission() {

    let form = document.getElementById('user-form');
    form.addEventListener('submit', event => {

        // prevent the browser from submitting the form
        event.preventDefault();
    });

    console.log("Prevening Form Submission");
}


//acessingFormFields();
function acessingFormFields() {

    // form.elements[]
    let form = document.getElementById('user-form');
    form.addEventListener('submit', event => {

        let user = form.elements['user'];
        let avatarFile = form.elements['avatar-file'];

        console.log(user.value, avatarFile.value);
        event.preventDefault();

    });

    console.log("Acessing Form Fields");
}


//showingValidationsErrors();
function showingValidationsErrors() {

    let form = document.getElementById('user-form');
    form.addEventListener('submit', event => {

        let user = form.elements['user'];
        let userError = document.getElementById('user-error');

        if (!user.value) {
            userError.textContent = 'Invalid entry';
            userError.style.color = 'red';
            user.style.borderColor = 'red';
            user.focus();

            event.preventDefault();
        }

    });

    console.log("Showing Validations Errors");
}

//postingFromJavaScript();
function postingFromJavaScript() {

    let form = document.getElementById('user-form');
    form.addEventListener('submit', event => {

        let user = form.elements['user'];
        let avatarFile = form.elements['avatar-file'];

        let posting = {
            user: user.value,
            avatarFile: avatarFile.value
        };

        let promise = $.post(
            "http://5d83fa06baffda001476ac60.mockapi.io/users", posting
        );

        promise.then(
            data => console.log('sucess', data),
            error => console.log('error', error)
        );

        //because we are handling the post ourselves, we have make sure to call event preventDefault() 
        event.preventDefault();

    });
    console.log("Posting From Java Script");
}