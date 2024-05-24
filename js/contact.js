$("#location-bar a").click(function(event) {
    // Prevent default action and stop propagation
    event.stopPropagation();
  
    // Get variables
    const $this = $(this);
    const $li = $this.parent();
    const selectedMap = $this.attr("href");
    const selectedLocation = $this.data('location');
  
    // Check if variables are defined
    if (!selectedMap || !selectedLocation) {
      console.error('Undefined or null variable');
      return;
    }
  
    // Add active class to selected li and remove from siblings
    if (!$li.hasClass('active')) {
      $li.addClass('active').siblings('li').removeClass('active');
    }
  
    // Update #map background image with the image from the location
    $('#map').css('background-image', `url(${selectedMap})`);
  
    // Update tooltip 'address'
    $('.selectedLocation').text(selectedLocation);
  });