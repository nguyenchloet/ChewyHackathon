let map;
let marker;
let geocoder;
let responseDiv;
let response;
var lat;
var long;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 42.3601, lng: -71.0589 },
    zoom: 8,
    mapTypeControl: false,
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.getElementById("zip-input");

  inputText.type = "text";
  const submitButton = document.getElementById('zip-button');

  submitButton.type = "button";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");
  
  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  responseDiv.id = "response-container";
  responseDiv.appendChild(response);

  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  //map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
  });
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
}

/* clear zip input */
function clear() {
  marker.setMap(null);
  responseDiv.style.display = "none";
}

/* display input location as map marker */
function geocode(request) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      marker.setMap(map);
      responseDiv.style.display = "block";
      response.innerText = JSON.stringify(result, null, 2);
      lat = results[0].geometry.location.lat();
      long = results[0].geometry.location.lng();
      return results;
    })
    .catch((e) => {
      console.log("Geocode was not successful for the following reason: " + e);
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
});
            
