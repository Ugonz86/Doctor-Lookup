const latitude = 47.6062;
const longitude = -122.3321;
const resultLimit = 15;

export class QueryLookup {
  async getQuery(query){
    try {
      let response = await
      fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=47.6062%2C-122.3321%2C50&user_location=${latitude}%2C${longitude}&skip=0&limit=${resultLimit}&user_key=cb0cb401317acaef5e79e512214daf52`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      error("There was an error handling your request: " + error.message);
    }
  }
}
