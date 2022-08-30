// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password function:

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you wish for your password to contain. It must be no less than 8 and no more than 128 characters.")
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {


    var lowerCase = confirm("Do you wish for your password to contain lower case letters?")

    var upperCase = confirm("Do you wish for your password to contain upper case letters?")

    var numbers = confirm("Do you wish for your password to contain numbers?")

    var specialChars = confirm("Do you wish for your password to contain special characters?")

    var password = "";

    var allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()'

    if (!lowerCase && upperCase) {
      allChars = allChars.toUpperCase();
    };
    if (!upperCase && lowerCase) {
      allChars = allChars.toLowerCase();
    };
    if (!upperCase && !lowerCase) {
      allChars = allChars.replace(/[A-Za-z]/g, '');
    };
    if (!numbers) {
      allChars = allChars.replace(/[^/\D]/g, '');
    };
    if (!specialChars) {
      allChars = allChars.replace(/[^a-zA-Z0-9 ]/g, '');
    };


    for (var i = 0; i < parseInt(passwordLength); i++) {

      password += allChars.charAt(Math.floor(Math.random() * allChars.length));


    };

    return password;
  }
  else {
    return "Please enter a password length between 8-128 characters."
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
