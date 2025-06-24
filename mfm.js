// Form Validation for Admission Page
function validateAdmissionForm() {
  const name = document.forms["admissionForm"]["full_name"].value;
  const dob = document.forms["admissionForm"]["dob"].value;
  const parent = document.forms["admissionForm"]["parent_name"].value;

  if (name === "" || dob === "" || parent === "") {
    alert("Please fill all required fields.");
    return false;
  }

  alert("Admission form submitted successfully!");
  return true;
}

// Result Checker Confirmation
function confirmResultCheck() {
  return confirm("Are you sure you want to check this result?");
}

// Feedback Alert
function feedbackSuccess() {
  alert("Thank you for your feedback!");
}
