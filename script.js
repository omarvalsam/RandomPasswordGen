// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = "0123456789";
var special = "@%+\/',!#$^? )(}{][~-_.";
var Lower = "abcdefghijklmnopqrstuvwxyz";
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password ="";
var passwordammount="";
var conNumber;
var conSpecial;
var conLower;
var conUpper;

function generatePassword() {
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
      console.log (password);
      return password;
      };
 
  // Write password to the #password input
function writePassword() { 
  
  var passwordtext = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
