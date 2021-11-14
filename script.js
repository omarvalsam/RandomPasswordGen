// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordammount=""
var conNumber;
var conSpecial;
var conLower;
var conUpper;

// Write password to the #password input
function writePassword() { 

  var passwordcharacters = "";
  
  var passwordammount = window.prompt("How long would you like your password to be?");
  passwordammount = parseInt (passwordammount);
  
    if (passwordammount < 8) {
       window.alert("password must be more than 8 characters")
       return ""
     }
    if (passwordammount > 128) {
       window.alert("password must be less than 128 characters")
       return ""
     }
    console.log (passwordammount); 
      
    
      var conNumber = window.confirm ("would you like numbers?")
      var conSpecial = window.confirm ("Would you like special characters?")
      var conLower = window.confirm ("Would you like lowercase characters?")
      var conUpper = window.confirm ("Would you like uppercase characters?")
      while (conNumber === false && conSpecial === false && conLower === false && conUpper === false) {
        
        window.alert ("Please select one option to generate a password!");

        var conNumber = window.confirm ("would you like numbers?")
        var conSpecial = window.confirm ("Would you like special characters?")
        var conLower = window.confirm ("Would you like lowercase characters?")
        var conUpper = window.confirm ("Would you like uppercase characters?")
      }
      
      if (conNumber) {
        passwordcharacters += number
      }
      if (conSpecial) {
        passwordcharacters += special
      }
      if (conLower) {
        passwordcharacters += Lower
      }
      if (conUpper) {
        passwordcharacters += Upper
      }
      for ( var i = 0; i < passwordammount; i++) {
        
        password += passwordcharacters [Math.floor(Math.random() * passwordcharacters.length)];
      }
      return password;
      }
 
      console.log (password)
  
  var passwordText = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
