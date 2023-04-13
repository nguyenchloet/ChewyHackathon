let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 42.3601, lng: -71.0589 },
    zoom: 8,
  });
}

initMap();
/*
fetch('./clinic-info.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
*/

/* get data from JSON file */
$(document).ready(function() {
  $.getJSON('clinic-info.json', function(data) {
      //console.log(data);
      $.each(data, function(key, value) { 
          //console.log(key, value);
          //console.log(value.clinic_name);
          //console.log(value.zip);
      });
  });
  /* get user input zip code */
  $(document).ready(function(){
    // Get value on button click and show alert
    $("#zip-button").click(function(){
        var zip = $("#zip-input").val();
        console.log(zip);
    });
  });
});
            

