/*Price slider*/
document.getElementById("maxPrice").addEventListener("input", function() {
    const priceOutput = document.getElementById("priceOutput");
    const formattedPrice = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.value);
    priceOutput.textContent = formattedPrice;
  });

  document.getElementById("btn-search").addEventListener("click", function() {
    console.log("OK");
  });

/*Rotate img with randon degree*/
const imageElement = document.getElementById('image-grid'); 

function applyRandomRotation() {
  const randomDeg = Math.random() * 30 - 15; // Range: -15 to 15
  imageElement.style.transform = `rotate(${randomDeg}deg)`; 
}

// Call the function on hover, page load, on an interval, etc.
imageElement.addEventListener('mouseover', applyRandomRotation);