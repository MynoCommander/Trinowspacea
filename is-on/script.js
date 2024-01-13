// Function to toggle the visibility of the navbar
function toggleNavbar() {
    const navbar = document.getElementById('mainNavbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

// Function to set and display the user's username (replace 'John' with the actual username)
function setUserInfo() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    usernameDisplay.textContent = 'Welcome, John'; // Replace 'John' with the actual username or use dynamic data from your backend
}

// Call the setUserInfo function to display the user's username if signed in
setUserInfo();
