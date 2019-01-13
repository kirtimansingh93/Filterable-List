// Get input element
  let filterInput = document.getElementById('filterInput');
// Add Event Listener (The keyup event occurs when a keyboard key is released.)
  filterInput.addEventListener('keyup', filterNames);

  function filterNames() {
  // Get value of the search input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

  }