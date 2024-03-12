document.getElementById("maxPrice").addEventListener("input", function() {
    const priceOutput = document.getElementById("priceOutput");
    const formattedPrice = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.value);
    priceOutput.textContent = formattedPrice;
  });

  document.getElementById("btn-search").addEventListener("click", function() {
    console.log("OK");
  });