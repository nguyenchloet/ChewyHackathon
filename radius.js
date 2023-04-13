const apiKey = DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm;
const zipCode = ;
const distance = ;
const units = 'mile';

fetch(`https://www.zipcodeapi.com/rest/${apiKey}/radius.json/${zipCode}/${distance}/${units}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));