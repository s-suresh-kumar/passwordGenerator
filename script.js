// Assignment Code
var generateBtn = document.querySelector("#generate");
/*
function clearPassword() {
  var passwordText = document.querySelector("#password");
    console.log('PASSWORDTEXT:', passwordText);
    console.log('password:',password);
  
    passwordText.value = "";
  
  }
clearPassword();
*/

const lc = confirm("Do you want to include lowerCase chars in password");
const uc = confirm("do you want to include upperCase chars in password?");
const num = confirm("Do you want to include numerals in password?");
const sp = confirm("Do you want to include special chars in password?");
let userContinue = false;
let pswLen = 0;

if (lc || uc || num || sp) {
  userContinue=true;
}
if (userContinue) {
   pswLen = prompt("Provide password length 8 - 128 chars");
  console.log ('PSWLEN-1:', pswLen);

  if (pswLen != null) {

    let inputError = (pswLen < 8 || pswLen >128);

    

    while (userContinue && inputError) {

      alert("password Length is a number between 8 and 128.");

      userContinue = confirm("would you like to continue?")

      if (userContinue == false) {
        alert( "No passord generated; password Length 8 - 128 chars only");
      }
      else {
        pswLen = prompt("Provide password length 8 - 128 chars");
        if (pswLen != null) {
        console.log ('PSWLEN-2:', pswLen);
        inputError=(pswLen <8 || pswLen >128);
        }
        else {
          userContinue = false;
        }
        
      }

    }
  }
  else {
    userContinue = false;
  }
}
else {
  alert("One of lowerCase, upperCase, numerals or special Characters have to be selected to generate Password, Please refresh page and re-enter");
}

function generatePassword() {

if (!userContinue) {
  return "No password Generated ";
}

const lcChars = "abcdefghijklmnopqrstuvwxyz";
const ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = '0123456789';
const spChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

/*
const spChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^','_', '`', '{', '|', '}', '~']; */

let possiblePswChars;
let generatedPsw = '';
let i=0;
if (lc) {
  possiblePswChars = lcChars;
  //generatedPsw[i++]= lcChars[Math.floor(Math.random() *lcChars.length)];
  generatedPsw += lcChars[Math.floor(Math.random() *lcChars.length)];
  i++;
  console.log('POSSIBLEPSWCHARS', possiblePswChars);
  console.log('GENERATED PSW', generatedPsw);
} 
if (uc) {
  possiblePswChars = possiblePswChars + ucChars;
  generatedPsw += ucChars[Math.floor(Math.random() *ucChars.length)];
  i++;
  console.log('POSSIBLEPSWCHARS',possiblePswChars);
  console.log('GENERATED PSW', generatedPsw);
  
}
if (num) {
  possiblePswChars = possiblePswChars + numerals;
  generatedPsw += numerals[Math.floor(Math.random() *numerals.length)];
  i++;
  console.log('POSSIBLEPSWCHARS',possiblePswChars);
  console.log('GENERATED PSW', generatedPsw);
 
}
if (sp) {
  possiblePswChars = possiblePswChars + spChars;
  generatedPsw += spChars[Math.floor(Math.random() *spChars.length)];
  i++;
  console.log('POSSIBLEPSWCHARS',possiblePswChars);
  console.log('GENERATED PSW', generatedPsw);
}

console.log('I:', i);
console.log('PSWLEN',pswLen);

for (; i<pswLen;i++) {
  generatedPsw += possiblePswChars[Math.floor(Math.random() *possiblePswChars.length)];
}
console.log('GENERATED PSW', generatedPsw);
return(generatedPsw);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('PASSWORD:', password);
  var passwordText = document.querySelector("#password");
  console.log('PASSWORDTEXT:', passwordText);
  console.log('password:',password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
