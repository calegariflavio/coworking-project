//from owner_management.html
// ---------------------------------------------DISPLAY SPACES-------------------------------------------------------------------------------------
window.onload = () => {
    loadAndDisplaySpaces();
}

async function loadAndDisplaySpaces() {
    try {
      const response = await fetch('http://localhost:3000/search-all-coworkings'); 
      const spacesData = await response.json();
      displaySpaces(spacesData);
    } catch (error) {
      console.error('Error fetching spaces:', error);
    }
  }
  
  function displaySpaces(spacesData) {
    const listedSpacesList = document.querySelector('#listedSpaces ul.list-group');
    listedSpacesList.innerHTML = '';

    spacesData.forEach(space => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        // Customize how you want to display each space's data:
        listItem.innerHTML = ` 
        <h3>${space.name}</h3> 
        <p><strong>Property Name:</strong> ${space.propertyName}</p>
        <p><strong>Address:</strong> ${space.address}</p>
        <p><strong>Seats:</strong> ${space.seatsAvailable}</p>
        <p><strong>Price:</strong> ${space.expectedRent}</p>
        <button class="edit-btn" data-item-mongo-id="${space._id}">Edit this space  </button>
        <button class="delete-btn" data-item-mongo-id="${space._id}">Delete this space  </button>
        `;

        listedSpacesList.appendChild(listItem);
    });
}


// ---------------------------------------------EDIT SPACES-------------------------------------------------------------------------------------
  
$(document).on("click", ".edit-btn", function () {
    const mongoId = $(this).data('item-mongo-id');
    editListedSpace(mongoId);  
});

async function editListedSpace(itemId) {

try {
    const response = await fetch('http://localhost:3000/search-all-coworkings', { 
        method: 'GET',
    });

    if (response.ok) {
        // Display the data
        const itemToEdit = await response.json();
        console.log("item: ", itemToEdit);

        itemToEdit.forEach(value => {
            const popupContent = `
        <label for="name">Name:</label>
        <input type="text" id="name" value="${value.name}"><br><br>
        
        <label for="propertyName">Property Name:</label>
        <input type="text" id="propertyName" value="${value.propertyName}"><br><br>

        <label for="address">Address:</label>
        <input type="text" id="address" value="${value.address}"><br><br>

        <label for="seats">Seats Available:</label>
        <input type="text" id="seats" value="${value.seatsAvailable}"><br><br>

        <label for="rent">Price:</label>
        <input type="text" id="rent" value="${value.expectedRent}"><br><br>

        <button onclick="updateSpace('${itemId}')">Update</button>
        `;

        const popup = window.open("", "Edit Space", "width=400,height=400");
        popup.document.body.innerHTML = popupContent;

        popup.updateSpace = function (itemId) {
            const updatedData = {
                name: popup.document.getElementById("name").value,
                propertyName: popup.document.getElementById("propertyName").value,
                address: popup.document.getElementById("address").value,
                seatsAvailable: popup.document.getElementById("seats").value,
                expectedRent: popup.document.getElementById("rent").value,
            };
        
            fetch(`http://localhost:3000/update-coworking-space/${itemId}`, {
                method: 'PATCH', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData) 
            })
            .then(response => {
                if (response.ok) {
                loadAndDisplaySpaces(); 
                popup.close();
                } else {
                console.error("Update failed:", response.statusText);
                }
            })
            .catch(error => {
                console.error("Error updating space:", error);
            });
            };
        })

        
    } else {
        console.error("Error: ", response.statusText);
    }
    } catch (error) {
    console.error('Retrieving error:', error);
    }
  
    
  }
  
// ---------------------------------------------DELETE SPACES-------------------------------------------------------------------------------------

  $(document).on("click", ".delete-btn", function () {
    const mongoId = $(this).data('item-mongo-id');
    deleteListedSpace(mongoId)
  });


async function deleteListedSpace(itemId) {
    if (!confirm("Are you sure you want to delete this space?")) {
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:3000/delete-coworking/${itemId}`, {
        method: 'DELETE', 
        });
    
        if (response.ok) {
        loadAndDisplaySpaces();
        } else {
        console.error("Delete failed:", response.statusText);
        }
    } catch (error) {
        console.error('Delete error:', error);
    }
}
      
        
      