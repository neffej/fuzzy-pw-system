// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowCase = "abcdefghijklmnopqrstuvwxyz";
const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const sChar = '!@#$%^&*-_=+';


function generatePassword(){
  console.log("hey you clicked the button")

  // Clear characters from cache
  let characters = "";
  let pword = "";

  // User sets password length
  let pwLength = prompt("Choose a password length between 8 and 128 characters");
 
  if (pwLength != null){
    Number(pwLength);

  //Check if user input is a number 
    if (isNaN(pwLength) === true){
   alert("Password length input must be a number");
   return "Please try again";
   }else{  

  // If input is a number, use logic to validate input is the proper length:
  if (Number(pwLength)<= 8 || Number(pwLength)>=128) {
        return "Please choose a password length between 8 and 128 characters";
      }else {
      console.log(Number(pwLength));
  // If user pwLength is not within the defined range, user is prompted to try agian
    

  // If pwLength IS within defined range:
  // User confirms whether they want lowercase characters in their password
  let lowerCase = confirm("Do you want your password to include lowercase characters?");
    console.log (lowerCase);

  // Characters string is edited if true
    if (lowerCase === true){
      characters += lowCase;
    }else {characters};

  // Repeat for uppercase 
  let upperCase = confirm("Do you want your password to include uppercase characters?")
  console.log (upperCase);

    if (upperCase === true){
      characters += upCase;
    }else {characters};

  // Repeat for numbers
  let numbers = confirm("Do you want your password to include numbers?")
  console.log (numbers);

    if (numbers === true){
      characters += num;
    }else {characters};

  // Repeat for special characters
  let specChar = confirm("Do you want your password to include special characters?")
  console.log (specChar);

    if (specChar === true){
      characters += sChar;
    }

  //If no character types were selected: 
    if (characters.length <1){
      return "Please choose a character type for your password";
    }
  }

  console.log(characters.length);
  
  // Log character string for troubleshooting
  console.log (characters);

  // Write password
    for (var i=0; i < Number(pwLength); i++) {
      pword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
  };

  // Log pword for confirmation
  console.log(pword);

  // Return pword to user 
  return pword;
}}}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);