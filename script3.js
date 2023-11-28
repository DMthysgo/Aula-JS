document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data2.json", true);
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
  
          const users = responseData.users;
  
          const foundUser = users.find(user => user.username === username && user.password === password);
  
          if (foundUser !== undefined) {
            alert("Login successful!");
            // Redirecionar para outra página após o login bem-sucedido
            window.location.href = "pagina-secreta.html";
          } else {
            alert("Invalid credentials. Please try again.");
          }
        }
      };
  
      xhr.send();
    });
  });