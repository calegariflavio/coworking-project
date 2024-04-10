const form = document.getElementById('listingForm');

var generateUniqueId = () => {
    return Math.random().toString(16).slice(2, 10); // Generates a random string
  }; 

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
    const uniqueID = generateUniqueId();
   
    try {
        formData.append('uniqueID', uniqueID);
        const response = await fetch('/list-coworking', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
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
