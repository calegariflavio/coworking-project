const { Book } = require('../models/book');
const form = document.getElementById('searchForm');

exports.bookCoworking = async (req, res) => {
  try {
    const bookDetails = new Book({
      id: req.body.id, 
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      province: req.body.province,
      city: req.body.city,
      propertyName: req.body.propertyName,
      phone: req.body.phone,
      postalCode: req.body.postalCode,
      seats: req.body.seats,
      rent: req.body.rent,
      details: req.body.details,
      available: req.body.available

    }); 

    const savedbookDetails = await bookDetails.find();
    res.status(201).json(savedbookDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch('/api/book-coworking', {
    method: 'GET',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Booking failed');
    }
    return response.json(); 
  })
  .then(data =>  {
    console.log('Booking successful:', data);
    // Handle successful booking (e.g., display a success message)
  })
  .catch(error => {
    console.error('Booking error:', error);
    // Handle booking error (e.g., display an error message)
  });
});



var generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random string
  };
  
  
    
  // Function to process the search filters
  function performSearch() {
    const cityFilter = $("#cityFilter").val();
    const maxPriceFilter = parseFloat($("#maxPriceFilter").val());
    const seatsFilter = parseInt($("#seatsFilter").val());
  
    const filteredData = jsonData.filter((item) => {
      return (
        (!cityFilter || item.city.toLowerCase() === cityFilter.toLowerCase()) &&
        (!maxPriceFilter || item.rent <= maxPriceFilter) &&
        (!seatsFilter || item.seats >= seatsFilter) &&
        item.available
      );
    });
  
    displaySearchResults(filteredData);
  }
  
  // Function to display the results
  function displaySearchResults(results) {
    const listGroup = $("#searchResults ul.list-group");
    listGroup.empty();
  
    if (results.length === 0) {
      listGroup.append('<li class="list-group-item">No results found</li>');
    } else {
      results.forEach((item) => {
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
    const listGroup = $("#searchResults ul.list-group");
    listGroup.empty();
  
    const filteredData = jsonData.filter((item) => {
      return item.available;
    });
  
    if (filteredData.length === 0) {
      listGroup.append('<li class="list-group-item">No results found</li>');
    } else {
      filteredData.forEach((item) => {
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
    const itemToUpdate = jsonData.find((item) => item.id === itemId);
  
    if (itemToUpdate) {
      itemToUpdate.available = false;
    }
  
    localStorage.setItem("submittedFormData", JSON.stringify(jsonData));
  
    displayAll();
  }
  
  function confirmBookPopup(itemId) {
    const reservedItem = jsonData.find((item) => item.id === itemId);
  
    let confirmationMessage = "Reservation successful!";
    if (reservedItem) {
      confirmationMessage += `\nYou have reserved: ${reservedItem.propertyName}`;
    }
  
    alert(confirmationMessage);
  }
  
  function changeBookHeaderFilter() {
    $("#searchResults h2").text("Results based on your filters");
  }
  
  function changeBookHeaderAll() {
    $("#searchResults h2").text("All results");
  }
  
  function handleSearchButtonClick() {
    performSearch();
    changeBookHeaderFilter();
  }
  
  function handleAllButtonClick() {
    displayAll();
    changeBookHeaderAll();
  }
  
  $(document).on("click", ".reservation-btn", function () {
    const itemId = $(this).data("item-id");
    makeReservation(itemId);
    confirmBookPopup(itemId);
  });
  
  $("#btn-search").click(handleSearchButtonClick);
  
  $("#btn-showAll").click(handleAllButtonClick);
  
