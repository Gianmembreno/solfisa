// Function to handle form submission
function handleSubmit() {
  // Validate form
  const form = document.getElementById("myForm");
  const antiguedadLaboral = document.getElementById("antiguedad_laboral").value;

  if (antiguedadLaboral === "") {
    alert("You must select an option for Antiguedad Laboral.");
    event.preventDefault(); // Prevent form from submitting
    return false;
  }

  // Prevent default form submission
  event.preventDefault();

  // Collect values
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const email = document.getElementById("email").value;
  const antiguedad_laboral =
    document.getElementById("antiguedad_laboral").value;
  const ingresos = document.getElementById("ingresos").value;

  // Calculate points for antiguedad_laboral
  let antiguedad_points = 0;
  if (antiguedad_laboral === "1-2") antiguedad_points = 3;
  else if (antiguedad_laboral === "2-4") antiguedad_points = 5;
  else if (antiguedad_laboral === "5-6") antiguedad_points = 7.5;

  // Calculate points for ingresos
  let ingresos_points = 0;
  if (ingresos === "10-15") ingresos_points = 5;
  else if (ingresos === "16-20") ingresos_points = 7.5;
  else if (ingresos === "21-25") ingresos_points = 10;

  // Calculate total points
  const total_points = antiguedad_points + ingresos_points;

  // Prepare email content (This is for demonstration, replace this with an actual email sending mechanism)
  const emailContent = `
        Name: ${name}
        ID: ${id}
        Email: ${email}
        Antiguedad Laboral: ${antiguedad_laboral} (Points: ${antiguedad_points})
        Ingresos: ${ingresos} (Points: ${ingresos_points})
        Total Points: ${total_points}
    `;

  // For demonstration, we'll just alert the email content
  alert("Email Content: " + emailContent);

  // Here you could use the Fetch API or some other method to send the email with the content.
}
