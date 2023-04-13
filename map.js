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

$(document).ready(function() {
  $.getJSON('clinic-info.json', function(data) {
      //console.log(data);
      $.each(data, function(key, value) { 
          //console.log(key, value);
          console.log(value.clinic_name);
          console.log(value.zip);
      });
  });
});
            