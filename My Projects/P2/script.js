const root = document.getElementById('root');

const showLogin = () => {
    let str = `
    <div class='App-Container'>
        <h1>Login Form</h1>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="handleLogin()">Log In</button></p>
        <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    `;
    root.innerHTML = str;
};

const showRegister = () => {
    let str = `
    <div class='App-Container'>
        <h1>Register Form</h1>
        <p><input type="text" id="txtName" placeholder="Name"></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="handleRegister()">Register</button></p>
        <p><button onclick="showLogin()">Back to Login</button></p>
    </div>
    `;
    root.innerHTML = str;
};

const handleLogin = () => {
    const email = document.getElementById("txtEmail").value.trim();
    const pass = document.getElementById("txtPass").value.trim();

    if (email && pass) {
        showHome();
    } else {
        alert("Please enter email and password.");
    }
};

const handleRegister = () => {
    const name = document.getElementById("txtName").value.trim();
    const email = document.getElementById("txtEmail").value.trim();
    const pass = document.getElementById("txtPass").value.trim();

    if (name && email && pass) {
        alert("Account created successfully. Please log in.");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
};

const showHome = () => {
    let str = `
    <div class='App-Container'>
        <h1>Welcome to the Home Page!</h1>
        <p>Click the button below to log out.</p>
        <p><button onclick="showLogin()">Log Out</button></p>
    </div>
    `;
    root.innerHTML = str;
};
