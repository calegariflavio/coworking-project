//-----------------------------BOOK A COWORKING----------------------------------------------------------------------------------------------
const listGroup = document.querySelector('.list-group'); // Or whatever identifies your list


listGroup.addEventListener('click',  async function(event) {
    event.preventDefault(); 
    
    if (event.target.classList.contains('reservation-btn')) {
        
        const coworkingID = document.getElementById('secretValue').textContent;        

    try {
        const response = await fetch('http://localhost:3000/book-coworking', { 
        method: 'PATCH',
        body: JSON.stringify({ itemId: coworkingID }),
        headers: {
            'Content-Type': 'application/json' 
         } 
      });
  
      if (response.ok) {   
        console.log("200 OK")
        //reset screen method
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
    
    const bookPopup = document.getElementById("popupUP"); 
   
    bookPopup.innerHTML = `
      <p><b>Congratulations!</b></p> 
      <p>You booked a coworking space!</p>      
    `;

  // Show the popup
  const popup = document.getElementById("bookPopup");
  popup.style.display = "block";

  // Close button functionality
  popup.querySelector(".close-btn").addEventListener("click", function () {
    popup.style.display = "none";
  });
}