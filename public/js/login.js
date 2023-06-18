const loginFormHandler = async (event) => {
  event.preventDefault();
  // Get the values of the username and password input fields
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  // If the input fields have values
  if (username && password) {
    // Send a POST request to the login endpoint with the input values as JSON data
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Successful login!");
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
