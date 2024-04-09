// JavaScript for the password generator

// Function to generate random password
function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
  
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  // Function to update displayed password
  function updatePassword() {
    const passwordField = document.getElementById("password");
    passwordField.textContent = generatePassword();
  }
  
  // Event listener for generate button
  document.getElementById("generate").addEventListener("click", updatePassword);
  