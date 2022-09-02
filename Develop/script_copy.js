// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Special characters //
const specialCharacters = "!@#$%^&*()";

//Prompts after clicking generate
function generatePassword() {
  var passwordLength = prompt ("Please enter the number of characters you wish for your password to contain. It must be no less than 8 and no more than 128 characters.")
  if (passwordLength === false) {
    writePassword

  }
  var lowerCase = prompt ("Do you wish for your password to contain lower case letters?")

  var upperCase = prompt ("Do you wish for your password to contain upper case letters?")

  var numbers = prompt ("Do you wish for your password to contain numbers?")

  var specialChars = prompt ("Do you wish for your password to contain special characters?")


  //Mins for numbers, lowercase, uppercase, and special characters
  var minimumCount = 0;

  // Empty mins:
  var minimumLowerCase = "";

  var minimumUpperCase = "";

  var minimumNumbers = "";

  var minimumSpecialChars = "";

  //Generator func:

  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialChars: function () {
      return String.fromCharCode[Math.floor(Math.random() * specialChars.length)]
    },
  };

  // Check to make sure user selected ok for all prompts and incorporate mins from above

  if (lowerCase=== true) {
    minimumNumbers = functionArray.getLowerCase();
    minimumCount++;
  }
  if (upperCase === true) {
    minimumNumbers - functionArray.getUpperCase();
  }
  if  (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (SpecialChars === true) {
    minimumSpecialChars = functionArray.getSpecialChars();
  }


  //empty string variabel for the 'for' loop below
  var randomPasswordGenerated = "";

  // loop getting randmom characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }
  // make sure characters are added to the password
  randomPasswordGenerated += minimumLowerCase;
  randomPasswordGenerated += minimumUpperCase;
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumSpecialChars;

  return randomPasswordGenerated;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
