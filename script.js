document.addEventListener("DOMContentLoaded", function() {
    const toggleArrow = document.getElementById('toggleArrow');
    const sidePanel = document.getElementById('sidePanel');
    
    // Funcția pentru a deschide/închide panoul
    toggleArrow.addEventListener('click', function() {
      if (sidePanel.style.left === "-250px") {
        sidePanel.style.left = "0";  // Deschide panoul
      } else {
        sidePanel.style.left = "-250px";  // Ascunde panoul în stânga
      }
    });
  });
  