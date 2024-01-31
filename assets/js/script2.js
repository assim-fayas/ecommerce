// Get the pop-up box element
var popupBox = document.getElementById("popup-box");

// Get the login button element
var loginBtn = document.getElementById("login-btn");

// Get the go back button element
var goBackBtn = document.getElementById("go-back-btn");

// Add click event listener to the login button
loginBtn.addEventListener("click", function() {
  // Redirect to login page
  window.location.href = "login.html";
});

// Add click event listener to the go back button
goBackBtn.addEventListener("click", function() {
  // Hide the pop-up box
  popupBox.style.display = "none";
});

// Show the pop-up box
popupBox.style.display = "block";
