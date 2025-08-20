const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

const contactName = document.getElementById('contact-name');
const phoneNumber = document.getElementById('phone-number');
const EmailId = document.getElementById('email-id');
const message = document.getElementById('message-input');
const submitBtn =  document.getElementById('submit-btn');

function validateName(){
    let nameValue = document.getElementById('contact-name').value;

    if(nameValue.length == 0){
        nameError.innerHTML = `Enter the name`
        return false;
    }
    if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = `Enter full name`;
        return false;
    }
    nameError.innerHTML = `<img src="images/check.svg">`;
    return true;
}

function validatePhone(){
    let phoneValue = phoneNumber.value;

    if(phoneValue.length == 0){
        phoneError.innerHTML = `Enter phone number`;
        return false;
    }
    
    if(!phoneValue.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = `Enter 10 digit number`;
        return false;
    }
    phoneError.innerHTML = `<img src="images/check.svg">`;
    return true;
}

function validateEmail(){
    let emailValue = EmailId.value;

    if(emailValue.length == 0){
        emailError.innerHTML = `Enter email address`;
        return false;
    }
    if(!emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = `Email invalid`;
        return false;
    }
    emailError.innerHTML = `<img src="images/check.svg">`;
    return true;
}

function validateMessage(){
    let messageValue = message.value;
    console.log(messageValue.trim().length);
    

    if(messageValue.trim().length < 30){
        messageError.innerHTML = `${30-messageValue.trim().length} characters needed`;
        return false;
    }
    messageError.innerHTML = `<img src="images/check.svg">`;
    return true;
}

function validaateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = `Fix all errors to submit`;
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false;
    }
    return true;
}

contactName.addEventListener('keyup', validateName);
phoneNumber.addEventListener('keyup', validatePhone);
EmailId.addEventListener('keyup', validateEmail);
message.addEventListener('keyup', validateMessage)

submitBtn.addEventListener('click', (e)=>{
    if(!validaateForm()){
        e.preventDefault();
    }
})