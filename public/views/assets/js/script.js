// Province/City selector - List screen
$(document).ready(function () {
  // Define a JavaScript object to store cities for each province
  var citiesData = {
    AB: ["Calgary", "Edmonton", "Lethbridge"],
    BC: ["Kelowna", "Vancouver", "Victoria"],
  };

  // Attach change event to province select
  $("#province").change(function () {
    updateCities();
  });

  function updateCities() {
    var selectedProvince = $("#province").val();

    var citySelect = $("#city");

    citySelect.empty().append('<option value="">Select</option>');

    if (citiesData[selectedProvince]) {
      $.each(citiesData[selectedProvince], function (index, cityName) {
        addCityOption(cityName);
      });
    }
  }

  function addCityOption(cityName) {
    $("#city").append(
      '<option value="' + cityName + '">' + cityName + "</option>"
    );
  }
});

// Price range slider - Book screen
document
  .getElementById("maxPriceFilter")
  .addEventListener("input", function () {
    const priceOutput = document.getElementById("priceOutput");
    const formattedPrice = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(this.value);
    priceOutput.textContent = formattedPrice;
  });
