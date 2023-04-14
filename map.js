let map;
let marker;
let geocoder;
let responseDiv;
let response;
var lat;
var long;
var zipcode;

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
      map.setZoom(11);
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

$(document).ready(function() {
 /* get data from JSON file */
  $.getJSON('clinic-info.json', function(data) {
    $.each(data, function(key, value) { 
      //console.log(JSON.stringify(data));
    });
  });
  getZip();
});

/* get user input zip code */
function getZip() {
  let zipOutput = document.getElementById('zip-received');
  let searchResults = document.getElementById("search-output");
  let zipError = document.getElementById("zip-error");

  $("#zip-button").click(function(){
      zipcode = $("#zip-input").val();
      if (!zipcode == "") {
        zipOutput.innerHTML = zipcode;  
        searchResults.style.display = 'block';
        zipError.style.display = 'none';
      } else {
        zipError.style.display = 'block';
      }
  });  
}

function showFilters() {
  let filterOptions = document.getElementById('fieldsets');
  $("#filter").click(function(){
    if (filterOptions.style.display == 'none') {
      filterOptions.style.display = 'block';
    } else {
      filterOptions.style.display = 'none';
    }
  });   
  $("#submitFilters").click(function(){
      filterOptions.style.display = 'none';
  });   
}

showFilters();