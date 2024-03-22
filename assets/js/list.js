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
  };

  // Push the form data into an array
  var formDataArray = [
    {
      id: generateUniqueId(),
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: generateUniqueId(),
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: generateUniqueId(),
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  formDataArray.push(formData);

  console.log(formDataArray); // Output the array to console
});