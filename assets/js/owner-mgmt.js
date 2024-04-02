window.onload = onPageLoad;

var generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random string
};

// Sample JSON data
const jsonData = [
  {
    id: "123",
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
  },
  {
    id: "123",
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
  },
  {
    id: "123",
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: true,
  },
];

// Retrieve the stored data
const storedData = localStorage.getItem("submittedFormData");
if (storedData) {
  jsonData.push(...JSON.parse(storedData));
}

function onPageLoad() {
  performSearch();
}

// Function to process the search filters
function performSearch() {
  const id = "123";

  const filteredData = jsonData.filter((item) => {
    return (
      (id === item.id) &&
      item.available
    );
  });

  displayUserResults(filteredData);
}

// Function to edit a listed space
function displayUserResults(results) {
  const listGroup = $("#listedSpaces ul.list-group");
  listGroup.empty();

  if (results.length === 0) {
    listGroup.append('<li class="list-group-item col-md-3">No results found</li>');
  } else {
    results.forEach((item) => {
      listGroup.append(`
        <li class="list-group-item">
          <h3>${item.propertyName}</h3>
          <p><strong>Address:</strong> ${item.address}, ${item.city}, ${item.province}</p>
          <p><strong>Seats:</strong> ${item.seats}</p>
          <p><strong>Price:</strong> $${item.rent}</p>
          <button class="edit-btn" data-item-id="${item.id}">Edit this space  </button>
          <button class="delete-btn" data-item-id="${item.id}">Delete this space  </button>
        </li>
      `);
    });
  }
}


$(document).on("click", ".edit-btn", function () {
  const itemId = $(this).data("item-id");
  editListedSpace(itemId);
});

$(document).on("click", ".delete-btn", function () {
  const itemId = $(this).data("item-id");
  //TODO delete
});

function editListedSpace(itemId) {
  // Find the item to edit
  const itemToEdit = jsonData.find((item) => item.id === itemId.toString());

  // If the item is found
  if (itemToEdit) {
    // Create a popup with input fields
    const popupContent = `
      <label for="propertyName">Property Name:</label>
      <input type="text" id="propertyName" value="${itemToEdit.propertyName}"><br><br>
      <label for="address">Address:</label>
      <input type="text" id="address" value="${itemToEdit.address}"><br><br>
      <label for="city">City:</label>
      <input type="text" id="city" value="${itemToEdit.city}"><br><br>
      <label for="province">Province:</label>
      <input type="text" id="province" value="${itemToEdit.province}"><br><br>
      <label for="seats">Seats:</label>
      <input type="number" id="seats" value="${itemToEdit.seats}"><br><br>
      <label for="rent">Rent:</label>
      <input type="number" id="rent" value="${itemToEdit.rent}"><br><br>
      <button onclick="updateSpace('${itemId}')">Update</button>
    `;

    // Open the popup
    const popup = window.open("", "Edit Space", "width=400,height=400");
    popup.document.body.innerHTML = popupContent;

    // Define the updateSpace function within the same scope as editListedSpace
    popup.updateSpace = function(itemId) {
      // Find the index of the item to update
      const index = jsonData.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        // Update the item with new values from the popup fields
        jsonData[index].propertyName = popup.document.getElementById("propertyName").value;
        jsonData[index].address = popup.document.getElementById("address").value;
        jsonData[index].city = popup.document.getElementById("city").value;
        jsonData[index].province = popup.document.getElementById("province").value;
        jsonData[index].seats = parseInt(popup.document.getElementById("seats").value);
        jsonData[index].rent = parseInt(popup.document.getElementById("rent").value);

        // Close the popup
        popup.close();

        // Update the UI with the edited data
        displayUserResults(jsonData);

        // You might also want to update the data in localStorage if needed
        localStorage.setItem("submittedFormData", JSON.stringify(jsonData));
      } else {
        alert("Item not found for updating.");
      }
    };
  } else {
    alert("Item not found for editing.");
  }
}


