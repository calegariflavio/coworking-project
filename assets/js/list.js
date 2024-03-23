document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var province = document.getElementById("province").value;
  var city = document.getElementById("city").value;
  var propertyName = document.getElementById("propertyName").value;
  var phone = document.getElementById("phone").value;
  var postalCode = document.getElementById("postalCode").value;
  var seats = document.getElementById("seats").value;
  var rent = document.getElementById("rent").value;
  var details = document.getElementById("details").value;

  var generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random string
  };
  // Create an object with the form values
  var formData = {
    id: generateUniqueId(),
    name: name,
    email: email,
    address: address,
    province: province,
    city: city,
    propertyName: propertyName,
    phone: phone,
    postalCode: postalCode,
    seats: seats,
    rent: rent,
    details: details,
    available: true
  };

  // Push the form data into an array
  var formDataArray = [
    
  ];

  var existingData = localStorage.getItem('submittedFormData');

  if (existingData) {
    formDataArray = JSON.parse(existingData);
  } 

  formDataArray.push(formData);

  localStorage.setItem('submittedFormData', JSON.stringify(formDataArray));

  console.log(formDataArray); // Output the array to console

  // Display submitted values in the popup
  var popupFormData = document.getElementById('popupFormData');
  popupFormData.innerHTML = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Property Name:</strong> ${formData.propertyName}</p>
      <p><strong>Details:</strong> ${formData.details}</p>
      `;

  // Show the popup
  var popup = document.getElementById("formSubmitPopup");
  popup.style.display = "block";

  // Close button functionality
  popup.querySelector('.close-btn').addEventListener('click', function() {
    popup.style.display = "none";
    document.getElementById("contactForm").reset();
  }); 
});
