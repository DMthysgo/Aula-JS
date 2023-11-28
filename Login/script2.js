document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data.json", true);
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
  
          if (username === responseData.username && password === responseData.password) {
            alert("Login successful!");
          } else {
            alert("Invalid credentials. Please try again.");
          }
        }
      };
      xhr.send();
    });
  });