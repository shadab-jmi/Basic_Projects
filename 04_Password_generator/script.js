const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy")

const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol = '![&*)@%^]{#$(}'

let arr = [upperCase, lowerCase, number, symbol]

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += number[Math.floor(Math.random() * number.length)];
    // password += symbol[Math.floor(Math.random() * symbol.length)];

    // while (length > password.length) {
    //     password += allChars[Math.floor(Math.random() * allChars.length)];
    // }

    // return password

    for(let i = 0;i<length;i++){
        let selected = arr[Math.floor(Math.random() * arr.length)]
        password += selected[Math.floor(Math.random() * selected.length)]
    }
    return password
}

generateButton.addEventListener('click', ()=>{
    passwordBox.value = `${generatePassword()}`
})

copyButton.addEventListener('click', ()=>{
    passwordBox.select();
    document.execCommand("copy");
})