const pass = document.getElementById('password');
const btn = document.querySelector('button');
const message = document.getElementById('message');

pass.addEventListener("input", () => {
    if(pass.value.length > 0){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
        message.style.display = "none";
    }
})

btn.addEventListener('click', ()=>{
    message.classList.remove('weak', 'medium', 'strong');

    const password = pass.value;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if(hasLower) strength++;
    if(hasUpper) strength++;
    if(hasNumber) strength++;
    if(hasSymbol) strength++;
    
    if(pass.value.length <= 4 || strength < 2){
        message.style.display = 'block';
        message.innerHTML = `Password is Weak`;
        message.classList.add('weak');
    }else if(pass.value.length < 8 || strength < 4){
        message.style.display = 'block';
        message.innerHTML = `Password is Medium`;
        message.classList.add('medium');
    }else if(pass.value.length >= 8 && strength === 4){
        message.style.display = 'block';
        message.innerHTML = `Password is Strong`;
        message.classList.add('strong');
    }
})