// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    // console.log(desc);
  }

  if (desc === '[]') {
    console.log(`We couldn't find that cat breed 😿`);
    return;
  }

  try {
    // let data = JSON.parse(desc);
    process.stdout.write(desc + '\n');
  } catch (err) {
    process.stdout.write(`⛔There's a problem reading the JSON\n`);
  }
  
});
