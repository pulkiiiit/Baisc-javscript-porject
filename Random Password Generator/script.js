// Rnadom Pasword Generator

function generatePassword(length ,includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChar = "abcdefghijklmnopqurstuvwzvz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
    const numbersChar = "0123456789";
    const symbolsChars = "!@#$%^&*()_+="

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowerCase ? lowerCaseChar : "";
    allowedChars += includeUpperCase ? upperCaseChar : "";
    allowedChars += includeNumbers ? numbersChar : "";
    allowedChars += includeSymbols ?  symbolsChars: "";

    console.log(allowedChars);

    if(length<= 0 ){
        return `(password length must be at least 1)`
    }

    if(allowedChars === 0){
        return `(At least 1 set of chracters needs to be selected)`
    }

    for(let i = 1 ; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars [randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols );

console.log(`Generated passwod : ${password}`);