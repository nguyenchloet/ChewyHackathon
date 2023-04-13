let map;
let marker;
let geocoder;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 42.3601, lng: -71.0589 },
    zoom: 8,
  });
}

window.initMap = initMap();

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
  let zipOutput = document.getElementById('zip-received');
  var zip;
  $("#zip-button").click(function(){
      zip = $("#zip-input").val();
      zipOutput.innerHTML = zip;
      console.log(zip);
  });
  

  // sort zip by distance from input zip
  // get closest zip = closestZip
  
});
            