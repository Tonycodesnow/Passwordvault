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


// function to generate the password
function generatePassword() {

  window.alert("Welcome let's make a password!")
  
  // ask user how long they would like the password to be
  var passwordLength = prompt("Choose a password with a legth between 8 and 128 characters long!", "How many 8-128?");

  
  // if the user's password length is lower than 8 or greater than 128
  if (passwordLength > 7  && passwordLength < 129)
  { 
    // ask if user would like to use specific characters
    var upperChar = confirm("Will you use Uppercase letters enter yes or no?")
  
    var lowerChar = confirm("Will you use Lowercase letters enter yes or no?")
  
    var numChar = confirm("Will you use numbers enter yes or no?")
  
    var specialChar = confirm("Will you use Special characters enter yes or no?")
  
    } else {alert("Please choose a number between 8 and 128 characters!")

    return
  }

  var newChar = ""
  // if statements for user "to" or "not to" use specific characters
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
  // for loop randomizing the password
  for (i=0; i< passwordLength; i++) {
      var randomChar = newChar[Math.floor(Math.random() * newChar.length)] 
      password = password +  randomChar
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
