const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Successfully created account!");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

// const signupFormHandler = async function(event) {
//     event.preventDefault();

//     const username = document.querySelector('#signup-name').value.trim();
//     const password = document.querySelector('#signup-pass').value.trim();
//     console.log(username);
//     console.log(password);
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       body: JSON.stringify({
//         username, password
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to sign up');
//     }
//   };

//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
