const form = document.getElementById('searchForm');
const showAll = document.getElementById('btn-showAll');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
   
    try {
        const response = await fetch('/api/search-all-coworkings', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Search failed'); 
        }

        const data = await response.json();
        console.log('Search successful:', data);
        displaySearchResults(data); 
        } catch (error) {
        console.error('Search error:', error);
    }
});
    
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
    

    // listener on button SHOW ALL
    showAll.addEventListener('submit', async (event) => {
      event.preventDefault(); 
     
      try {
          const response = await fetch('/api/search-all-coworkings', {
              method: 'GET'
          });
  
          if (!response.ok) {
              throw new Error('Search failed'); 
          }
  
          const data = await response.json();
          console.log('Search successful:', data);
          displayAll(data); 
          } catch (error) {
          console.error('Search error:', error);
      }
  });
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

    //------------------ PROBABLY separate making a reservation from searching results
    
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
    
  