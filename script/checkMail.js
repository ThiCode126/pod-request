
document.getElementById('form-mail').addEventListener('submit', function(e) {
    e.preventDefault();
    let errorSpan = document.getElementById('error-msg').value;

    console.log(errorSpan)

    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mail = e.target[0].value;

    errorSpan = "";

    if(mail.match(mailFormat)) {
        console.log(mail + " : adresse valide !");
    } else {
        console.log(mail + " : adresse INvalide !");
        errorSpan = "Oops! Please check your email";
    }   
})