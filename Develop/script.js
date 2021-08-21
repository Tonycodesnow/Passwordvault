// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// define our character sets used for password generation
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+{}|:?><[]";
var minPassLength = 8;
var maxPassLength = 128;


// function to generate the password
function generatePassword() {

  window.alert("Welcome let's make a password!")
  
  // ask user how long they would like the password to be
  var passwordLength = prompt("Choose a password with a legth between 8 and 128 characters long!", "How many 8-128?");

  
  // if the user's password length is lower than 8 or greater than 128
  if (passwordLength >= minPassLength && passwordLength <= maxPassLength){
    } else {alert("Please choose a number between 8 and 128 characters!")
  }

  // ask if user would like to use Upperrcase letters
  var upperChar = confirm("Will you use Uppercase letters enter yes or no?")

  var lowerChar = confirm("Will you use Lowercase letters enter yes or no?")

  var numChar = confirm("Will you use numbers enter yes or no?")

  var specialChar = confirm("Will you use Special characters enter yes or no?")

  var newChar = ""

  if (upperChar === true ){
    newChar = newChar + uppercaseLetters
  }

  if (lowerChar === true ){
    newChar = newChar + lowercaseLetters
  }

  if (numChar === true ){
    newChar = newChar + numbers
  }
  
  if (specialChar === true){
    newChar = newChar + specialCharacters
  }

  var password = ""

  for (i=0; i< passwordLength; i++) {
      var randomChar = newChar[Math.floor(Math.random() * newChar.length)] 
      password = password +  randomChar
  }


  return password

  console.log(upperChar, lowerChar)


  // ask if user would like to use lowercase letters

  // ask if user would like to use numbers

  // ask if user would like to use special characters

  // gernerate password and place in textarea



 
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
