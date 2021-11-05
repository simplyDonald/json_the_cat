const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  let domain = 'https://api.thecatapi.com/v1/breeds/search/?q=' + breedName;
  
  request(domain, (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }
    // console.log(response.statusCode);
    // console.log(body);
    let data = JSON.parse(body);
    // console.log(body);
    // if(data.length === 0) {
    if(body === '[]') {
      let message = 'Incorrect breed name';
      callback(null,message);
      return;
    }
    // console.log(data);
    let {description} = data[0];
    // console.log(description);
    callback(null,description);
    
  });
};
module.exports = {fetchBreedDescription};

