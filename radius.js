// function getRadius(){

//   console.log('getting zipcode from api');

//   const apiKey = 'DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm';
//   const zipCode = '02215';
//   const distance = '5';
//   const units = 'mile';

//   fetch('https://www.zipcodeapi.com/rest/'+apiKey+'/radius.json/'+zipCode+'/'+distance+'/'+units, {mode:'no-cors'})
//    .then(response => console.log(response.json))
//    .then(data => console.log(data))
//    .catch(error => console.error(error))

//  }

function getRadius(){

  console.log('getting zipcode from api');

  const apiKey = 'DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm';
  const zipCode = '02215';
  const distance = '5';
  const units = 'mile';

  fetch('https://www.zipcodeapi.com/rest/'+apiKey+'/radius.json/'+zipCode+'/'+distance+'/'+units, {mode:'no-cors'})
    .then(response => response.json())
    .then(data => {
      const results = data.zip_codes.map(zip => ({zipcode: zip.zip_code, distance: zip.distance}));
      const sortedResults = results.sort((a, b) => a.distance - b.distance);
      console.log(sortedResults);
    })
    .catch(error => console.error(error));
}
