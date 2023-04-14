fetch('clinic-info.json')
  .then(response => response.json())
  .then(clinics => {
    // loop through each clinic object (loop only through specified radius)
    clinics.forEach(clinic => {
      // check if the clinic matches the selected filters
      if (clinic.insuranceChecked) {

      }
      // check for all filters
    else if (clinic.practiceHub) {
        // Display the clinic in the HTML
        const clinicHTML = `<div>${clinic.clinic_name} - ${clinic.address1}, ${clinic.city}, ${clinic.state} ${clinic.zip}</div>`;
        document.querySelector('#clinics-container').insertAdjacentHTML('beforeend', clinicHTML);
      }
    });
  });


// get references to the checkboxes
var insuranceCheckbox = document.getElementById("insurance");
var practicehubCheckbox = document.getElementById("practicehub");
var cwavCheckbox = document.getElementById("cwav");
var emergencyCheckbox = document.getElementById("emergency");
var beefCattleCheckbox = document.getElementById("beefcattle");
var foodAnimalCheckbox = document.getElementById("foodanimal");
var dairyCheckbox = document.getElementById("dairy");
var avianCheckbox = document.getElementById("avian");
var exoticCheckbox = document.getElementById("exotic");
var reptileCheckbox = document.getElementById("reptile");
var equineCheckbox = document.getElementById("equine");
var swineCheckbox = document.getElementById("swine");
var canineCheckbox = document.getElementById("canine");
var nutritionCheckbox = document.getElementById("nutrition");
var oncologyCheckbox = document.getElementById("oncology");
var cardiologyCheckbox = document.getElementById("cardiology");
var neurologyCheckbox = document.getElementById("neurology");
var dermatologyCheckbox = document.getElementById("dermatology");
var radiologyCheckbox = document.getElementById("radiology");

// add event listeners to the checkboxes
insuranceCheckbox.addEventListener("change", updateClinics);
practicehubCheckbox.addEventListener("change", updateClinics);
cwavCheckbox.addEventListener("change", updateClinics);
emergencyCheckbox.addEventListener("change", updateClinics);
beefCattleCheckbox.addEventListener("change", updateClinics);
foodAnimalCheckbox.addEventListener("change", updateClinics);
dairyCheckbox.addEventListener("change", updateClinics);
avianCheckbox.addEventListener("change", updateClinics);
exoticCheckbox.addEventListener("change", updateClinics);
reptileCheckbox.addEventListener("change", updateClinics);
equineCheckbox.addEventListener("change", updateClinics);
swineCheckbox.addEventListener("change", updateClinics);
canineCheckbox.addEventListener("change", updateClinics);
nutritionCheckbox.addEventListener("change", updateClinics);
oncologyCheckbox.addEventListener("change", updateClinics);
cardiologyCheckbox.addEventListener("change", updateClinics);
neurologyCheckbox.addEventListener("change", updateClinics);
dermatologyCheckbox.addEventListener("change", updateClinics);
radiologyCheckbox.addEventListener("change", updateClinics);

// Function to update the content on the webpage based on the selected filters
function updateClinics() {
  // Get references to all the checkboxes and their current checked state
  const insuranceChecked = insuranceCheckbox.checked;
  const practicehubChecked = practicehubCheckbox.checked;
  const cwavChecked = cwavCheckbox.checked;
  const emergencyChecked = emergencyCheckbox.checked;
  const beefCattleChecked = beefCattleCheckbox.checked;
  const foodAnimalChecked = foodAnimalCheckbox.checked;
  const dairyChecked = dairyCheckbox.checked;
  const avianChecked = avianCheckbox.checked;
  const exoticChecked = exoticCheckbox.checked;
  const reptileChecked = reptileCheckbox.checked;
  const equineChecked = equineCheckbox.checked;
  const swineChecked = swineCheckbox.checked;
  const canineChecked = canineCheckbox.checked;
  const nutritionChecked = nutritionCheckbox.checked;
  const oncologyChecked = oncologyCheckbox.checked;
  const cardiologyChecked = cardiologyCheckbox.checked;
  const neurologyChecked = neurologyCheckbox.checked;
  const dermatologyChecked = dermatologyCheckbox.checked;
  const radiologyChecked = radiologyCheckbox.checked;

  // use the checked state of the checkboxes to filter the content on the webpage

  if (insuranceChecked) {
    // show content that accepts insurance
  } else {
    // hide content that accepts insurance
  }

  // repeat for all the other checkboxes and their corresponding filters
}
