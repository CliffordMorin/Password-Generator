// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? Type (8-128) characters."))

  if(passwordLength < 8 || passwordLength > 128){
    alert("Password needs to in between 8-128 character in length.");
    return
  }

  // confirm what characters types the user chooses
  var includeLowerCase = confirm("Would you like to include lowercase characters in your Password? (Click Ok for yes or cancel for no)")
  var includeUpperCase = confirm("Would you like to include UPPERCASE characters in your Password? (Click Ok for yes or cancel for no)")
  var includeNumbers = confirm("Would you like to include numeric characters in your Password? (Click Ok for yes or cancel for no)")
  var includeSpecial = confirm("Would you like to include special characters in your Password? (Click Ok for yes or cancel for no)")

  // brings back alert if no characters types are chosen
    if(includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSpecial === false){
    alert("Password needs to have at least one type of character.")
    return}
  
  // Character arrays
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w" ,"x", "y", "z"];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
  var potentialChar = [];

  // Puts at least one of each user choice character into the begging of potentialChar 
  var passwordCharacters = [];

      if(includeLowerCase){
        potentialChar = potentialChar.concat(lowerLetters)
        console.log(potentialChar.join(', '));
        passwordCharacters.push(lowerLetters[Math.floor(Math.random()* lowerLetters.length)])
      }
      if(includeUpperCase){
        potentialChar = potentialChar.concat(upperLetters)
        console.log(potentialChar.join(', '));
        passwordCharacters.push(upperLetters[Math.floor(Math.random()* upperLetters.length)])
      }
      if(includeNumbers){
        potentialChar = potentialChar.concat(numbers)
        console.log(potentialChar.join(', '));
        passwordCharacters.push(numbers[Math.floor(Math.random()* numbers.length)])
      }
      if(includeSpecial){
        potentialChar = potentialChar.concat(symbols)
        console.log(potentialChar.join(', '));
        passwordCharacters.push(symbols[Math.floor(Math.random()* symbols.length)])
      }

      //Joins potentialChar into an array
      potentialChar.join(', ');
      console.log(potentialChar);

      //Randomly select potentialChar based on the passwordLength and assign the output as a string to passwordCharacters
      //The remaining characters amount needed are chosen at random and added to a string
      var numberOfRandom = passwordLength - passwordCharacters.length; 
      console.log(numberOfRandom);

      for (var i = 0; i < numberOfRandom; i++) {
        var random = potentialChar[Math.floor(Math.random()* potentialChar.length)];
        passwordCharacters.push(random);
        console.log(passwordCharacters.join(""));
        //shuffles the passwordCharacters so there completely random
        for (let k = passwordCharacters.length - 1; k > 0; k--) {
          const j = Math.floor(Math.random() * (k + 1));
          [passwordCharacters[k], passwordCharacters[j]] = [passwordCharacters[j], passwordCharacters[k]];
          console.log(passwordCharacters);
        }
        }
        return passwordCharacters.join("");
}
      


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
