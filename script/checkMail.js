
document.getElementById('form-mail').addEventListener('submit', function(e) {
    e.preventDefault();
    let errorSpan = document.getElementById('error-msg');
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mail = e.target[0].value;

    errorSpan.innerHTML = "";

    if(!mail.match(mailFormat)) {
        errorSpan.innerHTML = "Oops! Please check your email";
    }   
})