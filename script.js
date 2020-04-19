// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars=[];
var lowerChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbChars=["1","2","3","4","5","6","7","8","9","0"];
var specChars=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

var length=Number(prompt("How many characters should the password be?"));
while (isNaN(length) || length < 8 || length > 128) length=Number(prompt("Length must be between 8-128 characters."));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  useLowerCase=confirm("Use lowercase characters in the password?");
  useUpperCase=confirm("Use uppercase characters in the password?");
  useNumbers=confirm("Use numbers in the password?");
  useSpecial=confirm("Use special characters in the password?")

  if (useLowerCase==true){chars.push(lowerChars)};
  if (useUpperCase==true){chars.push(upperChars)};
  if (useNumbers==true){chars.push(numbChars)};
  if (useSpecial==true){chars.push(specChars)};

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);