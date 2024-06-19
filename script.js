// Assignment code here

var includeCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var includeLowerCase = "abcdefghijklmnopqrstuvwxyz"
var includeNumbers = "0123456789"
var includeSymbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var charSet = "writePassword"
var userLength = "length"

displayPassword = function (length) {
  var password = writePassword(length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}
getPassLength = function () {

  var length = prompt("Please choose a password length between 8 and 128.")
  length = parseInt(length);
  if (length > 7 && length < 129) {
    return length;
  }
  else {
    window.alert("You did not choose a valid number. Please try again.")
    return getPassLength();
  }
}

var generateBtn = document.querySelector("#generate")
addEventListener('click', event => {
  var length = getPassLength();
  // put parse int statement here
  displayPassword(length); // do not remove!!!
// to evaluate whether the number chosen is between the parameter}
})

// Write password to the #password input
writePassword = function (length) {
  var includeCapitals = confirm("Would you like to include capital letters?");
    var includeLowerCase = confirm("Would you like to include lower case letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSymbols = confirm("Would you like to include symbols?");


  var charSet = ""

  if (includeCapitals === true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (includeLowerCase === true) {
    charSet = charSet + "abcdefghijklmnopqrstuvwxyz"
  }
  if (includeNumbers === true) {
    charSet = charSet + "0123456789"
  }
  if (includeSymbols === true) {
    charSet = charSet + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  return randomPassword(length, charSet);

  
}

randomPassword = function (length, charSet) {
 var password = ""

  for (var i = 0; i < length; i++) {

    password += charSet.charAt(Math.floor(Math.random() * charSet.length++));
  }
    return password;
  }