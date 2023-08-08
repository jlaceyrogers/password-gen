var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate password based on user's criteria
function generatePassword() {
    const specialCharacters = "!@#$%^&*()_-+=<>,.?/~:;|";

    let passwordLength = parseInt(prompt("Choose a password length between 8 and 128:"));
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(prompt("Invalid length. Choose a password length between 8 and 128:"));
    }

    const includeLowercase = confirm("Include lowercase characters?");
    const includeUppercase = confirm("Include uppercase characters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSpecial = confirm("Include special characters?");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert("You must choose at least one character type.");
        return "";
    }

    let password = "";
    while (password.length < passwordLength) {
        if (includeLowercase && password.length < passwordLength) {
            password += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }
        if (includeUppercase && password.length < passwordLength) {
            password += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        if (includeNumbers && password.length < passwordLength) {
            password += String.fromCharCode(48 + Math.floor(Math.random() * 10));
        }
        if (includeSpecial && password.length < passwordLength) {
            password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
