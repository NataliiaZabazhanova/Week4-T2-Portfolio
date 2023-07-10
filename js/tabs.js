$(document).ready(function() {
    $('.tabs__item').click(function(event) {
      
      // Remove the active class from all tabs__item elements
      $('.tabs__item').removeClass('active');
      
      // Add the active class to the clicked tabs__item element
      $(this).addClass('active');
      
      // Adjust the opacity of the images
      var clickedImg = $(this).find('img');
      var allImages = $('.tabs__item img');
      
      allImages.css('opacity', '0.5'); // Set opacity for all images
      clickedImg.css('opacity', '1'); // Set opacity for the clicked image
    });
  });
  