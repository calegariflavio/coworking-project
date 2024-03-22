// Sample JSON data 
const jsonData = [];

// Retrieve the stored data
const storedData = localStorage.getItem('submittedFormData');
if (storedData) {
  jsonData.push(...JSON.parse(storedData));
}

// Function to process the search filters
function performSearch() {  
  const cityFilter = $('#cityFilter').val();
  const maxPriceFilter = parseFloat($('#maxPriceFilter').val());
  const seatsFilter = parseInt($('#seatsFilter').val());
  
  const filteredData = jsonData.filter(item => {
    return (
      (!cityFilter || item.city.toLowerCase() === cityFilter.toLowerCase()) &&
      (!maxPriceFilter || item.rent <= maxPriceFilter) &&
      (!seatsFilter || item.seats >= seatsFilter) &&
      (item.available)
    );
  });

  displaySearchResults(filteredData);
}

// Function to display the results
function displaySearchResults(results) {
  const listGroup = $('#searchResults ul.list-group');
  listGroup.empty();

  if (results.length === 0) {
    listGroup.append('<li class="list-group-item">No results found</li>');
  } else {
    results.forEach(item => {
      listGroup.append(`
        <li class="list-group-item">
          <h3>${item.propertyName}</h3>
          <p><strong>Address:</strong> ${item.address}, ${item.city}, ${item.province}</p>
          <p><strong>Seats:</strong> ${item.seats}</p>
          <p><strong>Price:</strong> $${item.rent}</p>
          <button class="reservation-btn" data-item-id="${item.id}">Reserve this space  </button>
        </li>
      `);
    });
  }
}

// Function to display all results
function displayAll() {
  const listGroup = $('#searchResults ul.list-group');
  listGroup.empty();

  const filteredData = jsonData.filter(item => {
    return (
      (item.available)
    );
  });

  if (filteredData.length === 0) {
    listGroup.append('<li class="list-group-item">No results found</li>');
  } else {
    filteredData.forEach(item => {
      listGroup.append(`
        <li class="list-group-item">
          <h3>${item.propertyName}</h3>
          <p><strong>Address:</strong> ${item.address}, ${item.city}, ${item.province}</p>
          <p><strong>Seats:</strong> ${item.seats}</p>
          <p><strong>Price:</strong> $${item.rent}</p>
          <button class="reservation-btn" data-item-id="${item.id}">Reserve this space</button>
        </li>
      `);
    });
  }
}

function makeReservation(itemId) {
  const itemToUpdate = jsonData.find(item => item.id === itemId);

  if (itemToUpdate) { 
    itemToUpdate.available = false;  
  }

  localStorage.setItem('submittedFormData', JSON.stringify(jsonData));

  displayAll();
}

function confirmBookPopup(itemId) {
  const reservedItem = jsonData.find(item => item.id === itemId);

  let confirmationMessage = "Reservation successful!";
  if (reservedItem) {
    confirmationMessage += `\nYou have reserved: ${reservedItem.propertyName}`;
  }

  alert(confirmationMessage); 
}

function changeBookHeaderFilter() {
  $('#searchResults h2').text("Results based on your filters");
}

function changeBookHeaderAll() {
  $('#searchResults h2').text("All results");
}

function handleSearchButtonClick() {
  performSearch();
  changeBookHeaderFilter(); 
}

function handleAllButtonClick() {
  displayAll();
  changeBookHeaderAll(); 
}

$(document).on('click', '.reservation-btn', function() {
  const itemId = $(this).data('item-id'); 
  makeReservation(itemId);
  confirmBookPopup(itemId);
});


$('#btn-search').click(handleSearchButtonClick);

$('#btn-showAll').click(handleAllButtonClick);