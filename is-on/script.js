// Function to toggle the visibility of the navbar
function toggleNavbar() {
    const navbar = document.getElementById('mainNavbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to set and display the user's username from the URL
function setUserInfoFromURL() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const usernameFromURL = getUrlParameter('username');

    if (usernameFromURL) {
        usernameDisplay.textContent = 'Welcome, ' + usernameFromURL;
    }
}

// Call the setUserInfoFromURL function to display the username from the URL
setUserInfoFromURL();
// After successful signup, redirect to home page with username in the URL
const username = /* get the username from your signup process */;
window.location.href = 'https://trispace.xyz/getstarted/6651798412/access1' + encodeURIComponent(username);
