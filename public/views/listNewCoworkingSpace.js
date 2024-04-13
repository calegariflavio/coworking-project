const form = document.getElementById('listingForm');

var generateUniqueId = () => {
  return Math.random().toString(16).slice(2, 10); // Generates a random string
}; 

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  // Collect form data 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const province = document.getElementById('province').value;
  const city = document.getElementById('city').value;
  const propertyName = document.getElementById('propertyName').value;
  const phone = document.getElementById('phone').value;
  const postalCode = document.getElementById('postalCode').value;
  const seatsAvailable = document.getElementById('seats').value;
  const expectedRent = document.getElementById('rent').value;
  const details = document.getElementById('details').value;
  const file = document.getElementById('file').files[0];

  // Create FormData object for multipart uploads
  const formData = new FormData(); 
  formData.append('name', name);
  formData.append('email', email);
  formData.append('address', address );
  formData.append('province', province);
  formData.append('city', city);
  formData.append('propertyName', propertyName);
  formData.append('phone', phone);
  formData.append('postalCode', postalCode);
  formData.append('seats', seatsAvailable);
  formData.append('rent', expectedRent);
  formData.append('file', file);
  formData.append('details', details);

  const uniqueID = generateUniqueId();
  formData.append('uniqueID', uniqueID);

  try {
    const response = await fetch('http://localhost:3000/list-coworking', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Display the popup
      displayPopup(formData);  
      form.reset(); // Reset the form
    } else {
      console.error("Error: ", response.statusText);
    }

  } catch (error) {
    console.error('Listing error:', error);
  }
});

// Function to display the popup
function displayPopup(formData) {
    const popupFormData = document.getElementById("popupFormData");
  
    // Get the values from the formData or input elements
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone'); 
    const propertyName = formData.get('propertyName');
    const details = formData.get('details');
  
    popupFormData.innerHTML = `
      <p><strong>Name:</strong> ${name}</p> 
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Property Name:</strong> ${propertyName}</p>
      <p><strong>Details:</strong> ${details}</p>
    `;

  // Show the popup
  const popup = document.getElementById("formSubmitPopup");
  popup.style.display = "block";

  // Close button functionality
  popup.querySelector(".close-btn").addEventListener("click", function () {
    popup.style.display = "none";
  });
}
