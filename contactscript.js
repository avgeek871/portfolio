
/* Master Form Validation Function */

function validate (name, email, desc) {
    /*const name = document.contact-form.name.value;
    const email = document.contact-form.email.value;
    const desc = document.contact-form.desc.value;*/

    if (name === "") {
        alert("I need you name to work with you!");
        document.contact-form.name.focus();
        return false;
    };

    if (email === "") {
        alert("I'll need an email to contact you!");
        document.contact-form.email.focus();
        return false;
    };

    if (desc === "") {
        alert("Please give me some insight on your ideas!");
        document.contact-form.desc.focus();
        return false;
    };

    if (validateName(name) === false) {
        alert("Invalid name");
        document.contact-form.name.focus();
        return false;
    };

    if (validateEmail(email) === false) {
        alert("Invalid email address");
        document.contact-form.email.focus();
        return false;
    };

    console.log(name);
    console.log(email);
    console.log(desc);

    return true;
};

/* Validate Name Function */

function validateName (name) {

    const letters = /^[A-Za-z]+$/;

    if (name.match(letters)) {
        return true;
    }
    else {
        return false;
    };
};

/* Validate Email Function */

function validateEmail (email) {
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(format)) {
        return true;
    } else {
        return false;
    }
};