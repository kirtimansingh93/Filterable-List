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

  // Loop through collection-items li's and get elements of anchor tag
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName('a')[0];
      // If matched:
      if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }