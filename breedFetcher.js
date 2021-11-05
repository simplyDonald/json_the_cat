const request = require('request');


let domain = 'https://api.thecatapi.com/v1/breeds/search/?q=' + process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error.errno},  ${error.code}`);
    return;
  }

  if (body === '[]') {
    console.log(`We couldn't find that cat breed 😿`);
    return;
  }

  // console.log(typeof body);
  try {
    let data = JSON.parse(body);
    process.stdout.write(data[0].description + '\n');
  } catch (err) {
    process.stdout.write(`⛔There's a problem reading the JSON\n`);
  }
  // fs.writeFile(filePath,body, err => {
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
    
  //   let {size} = fs.statSync(filePath);
  //   console.log(`Downloaded and saved ${size} bytes to ./index.html`);
    
  // });
  
});