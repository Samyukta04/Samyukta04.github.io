//withdrawl and deposit
let balance = 0;
let users = [];
const root = document.getElementById("root");

const showLogin = () => {
  let str = `
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <button onclick='validateUser()'>Login</button>
    <hr>
    <button onclick='showRegister()'>Not a Member? Register here...</button>
  `;
  root.innerHTML = str;
};

function showRegister() {
  let str = `
    <h1>Register</h1>
    <p><input type="text" id="regEmail" placeholder="Email"></p>
    <p><input type="password" id="regPass" placeholder="Password"></p>
    <button onclick='registerUser()'>Register</button>
    <hr>
    <button onclick='showLogin()'>Already a Member? Login here...</button>
  `;
  root.innerHTML = str;
}

function showBank() {
  let str = `
    <h2>Welcome!</h2>
    <div class="balance-box">Balance: ₹ <span id="bal">${balance}</span></div>
    <div class="input-row">
      <label for="amt">Amount</label>
      <input type="number" id="amt" min="1" placeholder="Enter amount">
    </div>
    <div class="btn-row">
      <button onclick="deposit()">Deposit</button>
      <button onclick="withdraw()">Withdraw</button>
    </div>
    <div class="message" id="msg"></div>
    <hr>
    <button onclick="showLogin()">Logout</button>
  `;
  root.innerHTML = str;
}

function validateUser() {
  
  showBank();
}

function registerUser() {
  showLogin();
}
function deposit() {
  let amt = Number(document.getElementById("amt").value);
  let msg = document.getElementById("msg");
  if (amt > 0) {
    balance += amt;
    document.getElementById("bal").textContent = balance;
    msg.textContent = "Deposited ₹" + amt;
    msg.style.color = "green";
  } else {
    msg.textContent = "Enter a valid amount";
    msg.style.color = "red";
  }
}

function withdraw() {
  let amt = Number(document.getElementById("amt").value);
  let msg = document.getElementById("msg");
  if (amt > 0 && amt <= balance) {
    balance -= amt;
    document.getElementById("bal").textContent = balance;
    msg.textContent = "Withdrew ₹" + amt;
    msg.style.color = "green";
  } else if (amt > balance) {
    msg.textContent = "Insufficient balance";
    msg.style.color = "red";
  } else {
    msg.textContent = "Enter a valid amount";
    msg.style.color = "red";
  }
}
document.addEventListener('DOMContentLoaded', showLogin);
