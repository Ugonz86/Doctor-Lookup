// export class DoctorLookup {
//   async getDoctorByName(city) {
//     try {
//       let response = await fetch('https://api.betterdoctor.com/2016-03-01/practices?name='+name+'&location=47.624569%2C-122.351059%2C100&skip=0&limit=10&user_key=' + api);
//       let jsonifiedResponse = await response.json();
//       return jsonifiedResponse;
//     } catch(error) {
//       error("There was an error handling your request: " + error.message);
//     }
//   }
// }

export class PracticeLookup {
  async getDoctorByPractice(practice){
    try {
      let response = await
      fetch(`https://api.betterdoctor.com/2016-03-01/practices?${practice}location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=cb0cb401317acaef5e79e512214daf52`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      error("There was an error handling your request: " + error.message);
    }
  }
}
