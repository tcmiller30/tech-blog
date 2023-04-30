// login logic
const loginFormHandler = async (event) => {
event.preventDefault();

// Collect values from the login form
const name = document.querySelector('#loginUser').value.trim();
const password = document.querySelector('#loginPassword').value.trim();

if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
};

document
.getElementById('loginForm')
.addEventListener('submit', loginFormHandler);

// Signup logic
const signupFormHandler = async (event) => {
event.preventDefault();

// Collect values from the signup form
const name = document.querySelector('#signupUser').value.trim();
const password = document.querySelector('#signupPassword').value.trim();

if (name && password) {
    // Send a POST Request to the API endpoint
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
};

document
.getElementById('signupForm')
.addEventListener('submit', signupFormHandler);
