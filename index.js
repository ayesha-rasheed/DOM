// Define a user object to store user data
const user = {
name: '' ,
age: '' ,
email: '',
}

// Get the form and display element
const form = document.getElementById("userform");
const usernamedisplay = document.getElementById("username");
const useragedisplay = document.getElementById("useragedisplay");
const useremaildisplay = document.getElementById("useremail");

// Function to update the user display data
userNameDisplay.textContent = user.id || "Not set";
userAgeDisplay.textContent = user.age || "Not set";
userEmailDisplay.textContent = user.email || "Not set";

 // Get the values from the form
user.name = document.getElementById("name");
user.age = document.getElementById("age");
user.email = document.getElementById("email");

// Upadte the user data
updateuserdisplay();

  // Optionally, clear the form fields after submission
  form.reset();

// Initialize display with default values
updateUserDisplay();