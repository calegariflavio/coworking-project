//from book.html
const searchAll = document.getElementById('btn-showAll');
const form = document.getElementById('searchForm');

//-----------------------------DISPLAY ALL AVAILABLE=TRUE ON DB----------------------------------------------------------------------------------------------
searchAll.addEventListener('click', async (event) => {
  event.preventDefault(); 

  try {
    const response = await fetch('http://localhost:3000/search-all-coworkings', { 
      method: 'GET' 
    });

    if (response.ok) {
      const fetchedData = await response.json();
      jsonData = fetchedData;
      displayAll();  
    } else {
      console.error("Error: ", response.statusText);
    }
  } catch (error) {
    console.error('Retrieving error:', error);
  }
});



  //-----------------------------DISPLAY BASED ON FILTER----------------------------------------------------------------------------------------------



  form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
  
    try {
      const response = await fetch('http://localhost:3000/search-coworking', { 
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        const fetchedData = await response.json();
        jsonData = fetchedData; 
        displaySearchResults(jsonData);  
      } else {
        console.error("Error: ", response.statusText);
      }
    } catch (error) {
      console.error('Retrieving error:', error);
    }
  });

//-----------------------------WILL DISPLAY ALL RETRIEVED DATA----------------------------------------------------------------------------------------------
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
            <p><strong>Seats:</strong> ${item.seatsAvailable}</p>
            <p><strong>Price:</strong> $${item.expectedRent}</p>
            <p class="availability" style="color: ${item.available ? 'green' : 'red'}; font-weight: bold;">
                This space is ${item.available ? 'AVAILABLE' : 'NOT AVAILABLE'}
            </p> 
            <p id="secretValue"><strong></strong>${item._id}</p>
            <button class="picture-btn" id="picture-btn" name="" type="button" 
              onclick="showPictureInPopup('${item.imagePath}')">Show picture
            </button> 
            <div id="picListPopup" class="popup">
              <div class="popup-content">
                <span class="close-btn-pic">CLOSE</span>
                <h2>Cowork Picture</h2>
                <div id="picPopup"></div>
              </div>
            </div>
            <br><br>
            <button class="reservation-btn" id="reservation-btn" name="reservation-btn" type="button" data-item-id="${item.id}"
                style="${item.available ? '' : 'display: none'}"> 
                Book this space
            </button>
          </li>
        `);
      });
    }
  }

//-----------------------------WILL DISPLAY FILTERED DATA----------------------------------------------------------------------------------------------
    function displaySearchResults(results) {
    const listGroup = $("#searchResults ul.list-group");
    listGroup.empty();
  
    // Get filter values (Assuming you have form elements to get these values)
    const cityFilter = document.getElementById('cityFilter').value.toLowerCase(); 
    const maxPriceFilter = parseFloat(document.getElementById('maxPriceFilter').value); 
    const minSeatsFilter = parseInt(document.getElementById('seatsFilter').value); 
  
    const filteredResults = results.filter((item) => {
      // Filter by city (case-insensitive)
      if (cityFilter && item.city.toLowerCase() !== cityFilter) {
        return false; 
      }
  
      // Filter by maximum price
      if (maxPriceFilter && item.expectedRent > maxPriceFilter) {
        return false;
      }
  
      // Filter by minimum seats available
      if (minSeatsFilter && item.seatsAvailable < minSeatsFilter) {
        return false;
      }
  
      // If item passes all filters, keep it
      return true;
    });
  
    if (filteredResults.length === 0) {
      listGroup.append('<li class="list-group-item">No results found</li>');
    } else {
      filteredResults.forEach((item) => {
       
        listGroup.append(`
          <li class="list-group-item">
            <h3>${item.propertyName}</h3>
            <p><strong>Address:</strong> ${item.address}, ${item.city}, ${item.province}</p>
            <p><strong>Seats:</strong> ${item.seatsAvailable}</p>
            <p><strong>Price:</strong> $${item.expectedRent}</p>
            <p class="availability" style="color: ${item.available ? 'green' : 'red'}; font-weight: bold;">
                This space is ${item.available ? 'AVAILABLE' : 'NOT AVAILABLE'}
            </p>
            <p id="secretValue"><strong></strong>${item._id}</p>
            <button class="picture-btn" id="picture-btn" name="" type="button" 
              onclick="showPictureInPopup('${item.imagePath}')">Show picture
            </button> 
            <div id="picListPopup" class="popup">
              <div class="popup-content">
                <span class="close-btn-pic">CLOSE</span>
                <h2>Cowork Picture</h2>
                <div id="picPopup"></div>
              </div>
            </div>
            <br><br>
            <button class="reservation-btn" id="reservation-btn" name="reservation-btn" type="button" data-item-id="${item.id}"
                style="${item.available ? '' : 'display: none'}"> 
                Book this space
            </button>
          </li>
        `);
      });
    }
  }
  
