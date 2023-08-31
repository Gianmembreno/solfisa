function checkAndEmail() {
  // Pretend to send email here (This should be handled by the server in real-life scenarios)
  sessionStorage.clear(); // Clear any previous data
  window.location.href = "sent.html";
}

function continueToSecondPage() {
  const data = {
    name: document.getElementById("name").value,
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  sessionStorage.setItem("formData", JSON.stringify(data));

  // Navigate to the second page
  window.location.href = "second.html";
}
