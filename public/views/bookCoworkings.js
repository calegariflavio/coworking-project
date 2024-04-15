//-----------------------------BOOK A COWORKING----------------------------------------------------------------------------------------------
const listGroup = document.querySelector('.list-group');

//event litener to handle a click on the reservation-btn button
listGroup.addEventListener('click',  async function(event) {
    event.preventDefault(); 
    
    if (event.target.classList.contains('reservation-btn')) {
        
        const coworkingID = document.getElementById('secretValue').textContent;  //retriveCoworkings.js      retrives the id from a coworking space

    try {
        const response = await fetch('http://localhost:3000/book-coworking', { //fetch the coworkingID to upadate on database
        method: 'PATCH',
        body: JSON.stringify({ itemId: coworkingID }),
        headers: {
            'Content-Type': 'application/json' 
         } 
      });
  
      if (response.ok) {   
        console.log("200 OK")
        displayPopup();

      } else {
        console.error("Error: ", response.statusText);
      }
    } catch (error) {
      console.error('Retrieving error:', error);
    }
}
});

// Function to display the popup
function displayPopup() {
    
    const bookPopup = document.getElementById("popupUP"); //book.html
   
    bookPopup.innerHTML = `
      <p><b>Congratulations!</b></p> 
      <p>You booked a coworking space!</p>      
    `;

  // Show the popup
  const popup = document.getElementById("bookPopup"); //book.html
   
  popup.style.display = "block";

  // Close button functionality
  popup.querySelector(".close-btn").addEventListener("click", function () { //book.html
    popup.style.display = "none";
  });
}
//this function will handle the image been shown on the screen 
function showPictureInPopup(imagePath) {
  imagePath = imagePath.replace('/public/views', ''); 
  const imageElement = document.createElement('img');
  
  imageElement.src = imagePath;
  imageElement.alt = 'Cowork Image';

  displayImgPopup(imageElement);
}
// this function will manipulate the DOM to show the image itself 
function displayImgPopup(imgElement) {
  const popupFormData = document.getElementById("picPopup");

  popupFormData.innerHTML = `
  <img src="${imgElement.src}" alt="${imgElement.alt}" width="600" height="600">
  `;

  // Show the popup
  const popup = document.getElementById("picListPopup");
  popup.style.display = "block";

// Close button functionality
popup.querySelector(".close-btn-pic").addEventListener("click", function () {
  popup.style.display = "none";
});
}

