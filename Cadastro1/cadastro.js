document.addEventListener("DOMContentLoaded", function() {
    const cadastroForm = document.getElementById("cadastroForm");
  
    cadastroForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;
  
      // Carrega o arquivo JSON existente (se houver)
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "users.json", true);
  
      xhr.onload = function() {
        let usersData = [];
        if (xhr.status === 200) {
          usersData = JSON.parse(xhr.responseText);
        }
  
        // Adiciona o novo usuário aos dados existentes
        usersData.push({ "username": newUsername, "password": newPassword });
  
        // Salva os dados atualizados em um arquivo JSON
        const jsonBlob = new Blob([JSON.stringify(usersData)], { type: "application/json" });
        const jsonUrl = URL.createObjectURL(jsonBlob);
                
        // DOWNLOAD CONVENCIONAL
        
        const a = document.createElement("a");
        a.href = jsonUrl;
        a.download = "users.json";
        a.click();
        
      };
  
      xhr.send();
    });
  });
  