document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();// Previne o formulario de ser submetido normalmente.
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      console.log("Username:", username);
      console.log("Password:", password);
  
    });
  });