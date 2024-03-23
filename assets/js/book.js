var generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random string
};

// Sample JSON data 
const jsonData = [{
  id: generateUniqueId(),
  name: "Peter Parker",
  email: "peterparker@example.com",
  address: "120 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Sky Office",
  phone: "555-555-5550",
  postalCode: "A1B 2C0",
  seats: 7,
  rent: 719,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Mary Jane",
  email: "maryjane@example.com",
  address: "121 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "My Office",
  phone: "555-555-5551",
  postalCode: "A1B 2C1",
  seats: 10,
  rent: 550,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Tony Stark",
  email: "tonystark@example.com",
  address: "122 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Stark Tower",
  phone: "555-555-5552",
  postalCode: "A1B 2C2",
  seats: 15,
  rent: 1000,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Usain Bolt",
  email: "usainbolt@example.com",
  address: "123 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Bolt Space",
  phone: "555-555-5553",
  postalCode: "A1B 2C3",
  seats: 20,
  rent: 650,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Michael Phelps",
  email: "michaelphelps@example.com",
  address: "124 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Pool Space",
  phone: "555-555-5554",
  postalCode: "A1B 2C4",
  seats: 11,
  rent: 880,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Kate Spade",
  email: "katespade@example.com",
  address: "125 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Spade Office",
  phone: "555-555-5555",
  postalCode: "A1B 2C5",
  seats: 12,
  rent: 1200,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Joseph Climber",
  email: "Josephclimber@example.com",
  address: "126 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "High Office",
  phone: "555-555-556",
  postalCode: "A1B 2C6",
  seats: 14,
  rent: 2000,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "John Snow",
  email: "johnsnow@example.com",
  address: "127 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Black Tower Office",
  phone: "555-555-5557",
  postalCode: "A1B 2C7",
  seats: 25,
  rent: 1250,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Bruce Waine",
  email: "jbrucewaine@example.com",
  address: "128 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Waine's Tower",
  phone: "555-555-5558",
  postalCode: "A1B 2C8",
  seats: 25,
  rent: 2550,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
},
{
  id: generateUniqueId(),
  name: "Alicia Keys",
  email: "alcicakeys@example.com",
  address: "129 Main St",
  province: "AB",
  city: "Calgary",
  propertyName: "Buble Office",
  phone: "555-555-5559",
  postalCode: "A1B 2C9",
  seats: 10,
  rent: 999,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  available: true
}];

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