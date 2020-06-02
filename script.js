// Assignment Code
var generateBtn = document.querySelector("#generate");

// Query user for password criteria and confirm
const lc = confirm("Do you want to include lower case characters in password");
const uc = confirm("Do you want to include upper case characaters in password?");
const num = confirm("Do you want to include numerals in password?");
const sp = confirm("Do you want to include special characters in password?");

let userContinue = false;
let pswLen = 0;
let wantToContinue = true;

if (lc || uc || num || sp) {
  userContinue=true;
}
// prompt user and get desired password length
if (userContinue) {
  pswLen = prompt("Provide password length 8 - 128 chars");
  // console.log ('PSWLEN-1:', pswLen);

  if (pswLen !== null) {

    let inputError = (pswLen < 8 || pswLen >128);

    

    while (userContinue && inputError) {

      alert("Password Length is a number between 8 and 128.");

      wantToContinue = confirm("Would you like to continue?");

      if (wantToContinue === false) {
        alert( "No passord will be generated; valid psw length needed (8 - 128 chars)");
        userContinue = false;
        
      }
      else {
        pswLen = prompt("Provide password length 8 - 128 chars");
        if (pswLen !== null) {
         // console.log ('PSWLEN-2:', pswLen);
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
  if ((wantToContinue) && (userContinue) && (pswLen !== null)){
  alert(`Your selected password criteria:\n    include lowercase = ${lc}\n    include upper case = ${uc}\n    include numbers = ${num}\n    include special characters = ${sp}\n    password Length = ${pswLen}\n\nClick on Generate Password Button to generate your secure passord with these password criteria`);
}
}
else {
  alert("One of lower case, upper case, numerals or special characters have to be selected to generate Password, Please refresh page and re-enter");
}


function generatePassword() {
let errorText = '';
if (!userContinue) {
  errorText += 'No password Generated';
if (!(lc || uc || num || sp)) {
  errorText += ', Atleast one char type should be included for Password Generation.';
}


else if (wantToContinue === false) {
errorText += ', User Cancelled.';
}
else if (pswLen === null) {
  errorText += ', No pswLen provided / User Cacelled';
}
// console.log('PSWLEN=',pswLen);
errorText += ' Reload the page and retry.';
  return errorText;
}

// We are here means, all user inputs are validated and we are ready to
// generate the password per user password criteria

// different possible character sets
const lcChars = "abcdefghijklmnopqrstuvwxyz";
const ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = '0123456789';
const spChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// possiblePswChars builds from empty string 
// Initialize other variables as well
let possiblePswChars = '';
let generatedPsw = '';
let i=0;

/* if user wants to include lowercase characters, let us choose a lowercase character
 from among the 24 randomly and use it as 1st char in password
 We are trying to also honor ( self imposed restriction or a not a must requirement) that
 if user wants a character type to be included in the password, make sure atleast 1 character
 from that character type is present in the password  */
if (lc) {
  possiblePswChars = lcChars;
  generatedPsw += lcChars[Math.floor(Math.random() *lcChars.length)];
  i++;
  // console.log('POSSIBLEPSWCHARS', possiblePswChars);
  // console.log('GENERATED PSW', generatedPsw);
} 

/* if user wants to include uppercase characters, let us choose a uppercase character
 from among the 24 randomly and use it as 2nd char in password
 We are trying to also honor ( self imposed restriction or a not a must requirement) that
 if user wants a character type to be included in the password, make sure atleast 1 character
 from that character type is present in the password */
if (uc) {
  possiblePswChars = possiblePswChars + ucChars;
  generatedPsw += ucChars[Math.floor(Math.random() *ucChars.length)];
  i++;
  // console.log('POSSIBLEPSWCHARS', possiblePswChars);
  // console.log('GENERATED PSW', generatedPsw);
  
}

/* if user wants to include numbers, let us choose a number
 from among the 10 randomly and use it as 3rd char in password
 We are trying to also honor ( self imposed restriction or a not a must requirement) that
 if user wants a character type to be included in the password, make sure atleast 1 character
 from that character type is present in the password */
if (num) {
  possiblePswChars = possiblePswChars + numerals;
  generatedPsw += numerals[Math.floor(Math.random() *numerals.length)];
  i++;
  // console.log('POSSIBLEPSWCHARS',possiblePswChars);
  // console.log('GENERATED PSW', generatedPsw);
}

/* if user wants to include special characters, let us choose a number
 from among all the sepcial characters and use it as  4th char in password
 We are trying to also honor ( self imposed restriction or a not a must requirement) that
 if user wants a character type to be included in the password, make sure atleast 1 character
 from that character type is present in the password */
if (sp) {
  possiblePswChars = possiblePswChars + spChars;
  generatedPsw += spChars[Math.floor(Math.random() *spChars.length)];
  i++;
  // console.log('POSSIBLEPSWCHARS',possiblePswChars);
  // console.log('GENERATED PSW', generatedPsw);
}

// console.log('I:', i);
// console.log('PSWLEN',pswLen);

/* Now that we ensured atleast one character of each character type that the user want to include in the password is built in to the password, build the rest of the password in a random manner from all the character types that the user wanted to make up the password */
for (; i<pswLen;i++) {
  generatedPsw += possiblePswChars[Math.floor(Math.random() *possiblePswChars.length)];
}
// console.log('GENERATED PSW', generatedPsw);
return(generatedPsw);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log('PASSWORD:', password);
  var passwordText = document.querySelector("#password");
 // console.log('PASSWORDTEXT:', passwordText);
 // console.log('password:',password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
