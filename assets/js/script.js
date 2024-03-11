$(document).ready(function() {
  $('.dropdown').click(function(event) {
      event.stopPropagation(); // Prevent clicks from bubbling up the DOM
      $(this).find('.dropdown-menu').toggle();
  });

  // Close the dropdown if the user clicks outside of it
  $(document).click(function() {
      $('.dropdown-menu').hide();
  });
});
