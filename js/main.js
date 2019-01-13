// Get input element
  let filterInput = document.getElementById('filterInput');
// Add Event Listener (The keyup event occurs when a keyboard key is released.)
  filterInput.addEventListener('keyup', filterNames);

  function filterNames() {
  // Get value of the search input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // Get ul id (names)
    let ul = document.getElementById('names');
  // Get li's from ul (gets all li element values with class colletion-item and     puts them into an array)
    let li = ul.querySelectorAll('li.collection-item');

  }