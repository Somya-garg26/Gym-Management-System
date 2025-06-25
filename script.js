// Register user
function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  const user = { email, password, role };
  localStorage.setItem("user_" + email, JSON.stringify(user));

  alert("Registered successfully!");
  location.href = "login.html";
}

// Login user
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const stored = localStorage.getItem("user_" + email);
  if (!stored) return alert("User not found!");

  const user = JSON.parse(stored);
  if (user.password !== password) return alert("Wrong password!");

  localStorage.setItem("loggedInUser", email);
  alert("Login successful!");
  location.href = "dashboard.html";
}

// Show dashboard user info
if (location.pathname.includes("dashboard.html")) {
  const email = localStorage.getItem("loggedInUser");
  if (!email) location.href = "login.html";

  const user = JSON.parse(localStorage.getItem("user_" + email));
  document.getElementById("userEmail").innerText = user.email;
  document.getElementById("userRole").innerText = user.role;
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  location.href = "login.html";
}

// Upload Receipt
function uploadReceipt() {
  const email = localStorage.getItem("loggedInUser");
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  const receipt = { amount, date };
  const allReceipts = JSON.parse(localStorage.getItem("receipts_" + email)) || [];

  allReceipts.push(receipt);
  localStorage.setItem("receipts_" + email, JSON.stringify(allReceipts));

  alert("Receipt saved!");
  showReceipts();
}

// Show Receipts
function showReceipts() {
  const email = localStorage.getItem("loggedInUser");
  const list = document.getElementById("receiptList");
  if (!list) return;

  list.innerHTML = "";
  const receipts = JSON.parse(localStorage.getItem("receipts_" + email)) || [];
  receipts.forEach((r, i) => {
    const li = document.createElement("li");
    li.innerText = `#${i + 1} - ₹${r.amount} on ${r.date}`;
    list.appendChild(li);
  });
}

if (location.pathname.includes("receipts.html")) {
  showReceipts();
}
