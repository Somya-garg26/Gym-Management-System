// Sample data - you can add more receipts to localStorage
const sampleReceipts = [
  {
    date: "2025-06-01",
    amount: "₹1,500",
    member: "Somya Garg",
    month: "June 2025",
  },
  {
    date: "2025-05-01",
    amount: "₹1,500",
    member: "Somya Garg",
    month: "May 2025",
  }
];

// Save sample data once (for testing purpose)
if (!localStorage.getItem("receipts")) {
  localStorage.setItem("receipts", JSON.stringify(sampleReceipts));
}

// Function to display receipts
function showReceipts() {
  const receiptList = document.getElementById("receipt-list");
  const receipts = JSON.parse(localStorage.getItem("receipts")) || [];

  receipts.forEach((receipt) => {
    const card = document.createElement("div");
    card.className = "receipt-card";
    card.innerHTML = `
      <strong>Member:</strong> ${receipt.member} <br/>
      <strong>Month:</strong> ${receipt.month} <br/>
      <strong>Amount:</strong> ${receipt.amount} <br/>
      <strong>Date:</strong> ${receipt.date}
    `;
    receiptList.appendChild(card);
  });
}

function goBack() {
  window.history.back();
}

showReceipts();