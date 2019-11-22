import './styles.css';
import 'bootstrap';
import $ from 'jquery';
import {PracticeLookup} from './backend.js';

$(document).ready(function() {
  $('#practiceButton').click(function() {

    const practice = $('#practices').val();
    $('#practices').val("");

    (async () => {
      // The API call is business logic.
      let doctorLookupVariable = new PracticeLookup();
      const response = await doctorLookupVariable.getDoctorByPractice(practice);
      getElements(response);
    })();

    function getElements(response) {
      $('.showList').prepend(`Here's the <em><strong>${practice}</strong></em> list we found in Seattle:`);
      response.practice.forEach ((practice) => {
        const id = practice.id;
        const clinic_name = practice.clinic_name;
        // const firstName = practiceInfo.data.doctors.profile.first_name;
        // const lastName = practiceInfo.data[i].doctors[0].profile.last_name;
        //
        const visit_address = practice.visit_address.street + practice.data.visit_address.street2 + " " + practice.data.visit_address.zip;
        $('#listDisplay').append(`<li>id: ${id} , clinic name: ${clinic_name}, address: ${visit_address}</li>`);
        $("#resultDiv").show();
        $("#practiceDiv").hide();
      });
    }
  });
});
