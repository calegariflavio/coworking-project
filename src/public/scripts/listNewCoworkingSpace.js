const form = document.getElementById('listingForm');

var generateUniqueId = () => {
    return Math.random().toString(16).slice(2, 10); // Generates a random string
  }; 

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

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
    const file = document.getElementById('file').files[0];

    const formData = new FormData(); // Use FormData for multipart uploads
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

    const uniqueID = generateUniqueId();
    formData.append('uniqueID', uniqueID);
   
    try {
        const response = await fetch('http://localhost:3000/list-coworking', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.log("RESP: ", response)
            throw new Error('Listing failed'); 
        }

        const data = await response.json();
        console.log('Listing successful:', data);
        } catch (error) {
        console.error('Listing error:', error);
    }
});

 // Display submitted values in the popup
 var popupFormData = document.getElementById("popupFormData");
popupFormData.innerHTML = `
    <p><strong>Name:</strong> ${formData.get('name')}</p> 
    <p><strong>Email:</strong> ${formData.get('email')}</p>
    <p><strong>Phone:</strong> ${formData.get('phone')}</p>
    <p><strong>Property Name:</strong> ${formData.get('propertyName')}</p>
    <p><strong>Details:</strong> ${formData.get('details')}</p>
`;

 // Show the popup
 var popup = document.getElementById("formSubmitPopup");
 popup.style.display = "block";

 // Close button functionality
 popup.querySelector(".close-btn").addEventListener("click", function () {
   popup.style.display = "none";
   document.getElementById("contactForm").reset();
 });
