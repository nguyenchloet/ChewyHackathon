fetch('clinic-info.json')
  .then(response => response.json())
  .then(clinics => {
    // Loop through each clinic object
    clinics.forEach(clinic => {
      // Check if the clinic matches the selected filters
      if (clinic.insuranceChecked) {

      }
      
    else if (clinic.practiceHub) {
        // Display the clinic in the HTML
        const clinicHTML = `<div>${clinic.clinic_name} - ${clinic.address1}, ${clinic.city}, ${clinic.state} ${clinic.zip}</div>`;
        document.querySelector('#clinics-container').insertAdjacentHTML('beforeend', clinicHTML);
      }
    });
  });



// Get references to the checkboxes
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

// Add event listeners to the checkboxes
insuranceCheckbox.addEventListener("change", updateContent);
practicehubCheckbox.addEventListener("change", updateContent);
cwavCheckbox.addEventListener("change", updateContent);
emergencyCheckbox.addEventListener("change", updateContent);
beefCattleCheckbox.addEventListener("change", updateContent);
foodAnimalCheckbox.addEventListener("change", updateContent);
dairyCheckbox.addEventListener("change", updateContent);
avianCheckbox.addEventListener("change", updateContent);
exoticCheckbox.addEventListener("change", updateContent);
reptileCheckbox.addEventListener("change", updateContent);
equineCheckbox.addEventListener("change", updateContent);
swineCheckbox.addEventListener("change", updateContent);
canineCheckbox.addEventListener("change", updateContent);
nutritionCheckbox.addEventListener("change", updateContent);
oncologyCheckbox.addEventListener("change", updateContent);
cardiologyCheckbox.addEventListener("change", updateContent);
neurologyCheckbox.addEventListener("change", updateContent);
dermatologyCheckbox.addEventListener("change", updateContent);
radiologyCheckbox.addEventListener("change", updateContent);

// Function to update the content on the webpage based on the selected filters
function updateContent() {
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

  // Use the checked state of the checkboxes to filter the content on the webpage
  // For example:
  if (insuranceChecked) {
    // Show content that accepts insurance
  } else {
    // Hide content that accepts insurance
  }

  // Repeat for all the other checkboxes and their corresponding filters
}
