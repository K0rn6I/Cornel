document.addEventListener("DOMContentLoaded", function() {
  const toggleTableButton = document.getElementById('toggleTableButton');
  const tableContainer = document.getElementById('tableContainer');

  toggleTableButton.addEventListener('click', function() {
    // Verifică dacă tabelul este vizibil sau nu
    if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
      tableContainer.style.display = 'block'; // Arată tabelul
    } else {
      tableContainer.style.display = 'none'; // Ascunde tabelul
    }
  });
});
