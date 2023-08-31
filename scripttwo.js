function calculateAndEmail() {
  const oldData = JSON.parse(sessionStorage.getItem("formData"));

  const antiguedadLaboral = document.getElementById("antiguedad_laboral").value;
  const ingresos = document.getElementById("ingresos").value;

  let points = 0;

  if (antiguedadLaboral === "1-2") points += 3;
  else if (antiguedadLaboral === "2-4") points += 5;
  else if (antiguedadLaboral === "5-6") points += 7.5;

  if (ingresos === "10-15") points += 5;
  else if (ingresos === "16-20") points += 7.5;
  else if (ingresos === "21-25") points += 10;

  const allData = {
    ...oldData,
    antiguedadLaboral,
    ingresos,
    points,
  };

  // Here you would send 'allData' to the server for emailing
  // This is just a simulation.
  alert(
    `Esta informacion seria enviada a la empresa y no visible al cliente. Total de Puntos: ${points}`
  );

  // Clear the sessionStorage
  sessionStorage.clear();

  // Navigate to sent.html
  window.location.href = "sent.html";
}
