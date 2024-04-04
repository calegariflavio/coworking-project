const { List } = require('../models/list');
const form = document.getElementById('listingForm');


exports.createNewCoworking = async (req, res) => {
  try {
    const listDetails = new List({
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

    const savedListDetails = await listDetails.save();
    res.status(201).json(savedListDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SUBMIT button listener (LIST)
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);

  fetch('/api/list-coworking', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Listing failed');
    }
    return response.json(); 
  })
  .then(data =>  {
    console.log('Listing successful:', data);
    // Handle successful Listing (e.g., display a success message)
  })
  .catch(error => {
    console.error('Listing error:', error);
    // Handle Listing error (e.g., display an error message)
  });
});


//-----------------------------------------------------------

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
      return Math.random().toString(16).slice(2, 10); // Generates a random string
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
      available: true,
    };

    // Push the form data into an array
    var formDataArray = [];

    var existingData = localStorage.getItem("submittedFormData");

    if (existingData) {
      formDataArray = JSON.parse(existingData);
    }

    formDataArray.push(formData);

    localStorage.setItem("submittedFormData", JSON.stringify(formDataArray));

    console.log(formDataArray); // Output the array to console

    // Display submitted values in the popup
    var popupFormData = document.getElementById("popupFormData");
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
    popup.querySelector(".close-btn").addEventListener("click", function () {
      popup.style.display = "none";
      document.getElementById("contactForm").reset();
    });
  });
