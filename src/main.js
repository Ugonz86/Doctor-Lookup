import './styles.css';
import 'bootstrap';
import $ from 'jquery';
import { QueryLookup } from './backend.js';

$(document).ready(function() {
  $('#queryButton').click(function() {

    const query = $('#queries').val();
    $('#queries').val("");

    (async () => {
      let queryLookupVariable = new QueryLookup();
      const response = await queryLookupVariable.getQuery(query);
      getElements(response);
    })();
  });
  $("#goHome").click(function() {
    location.reload();
  });
});

function getElements(response) {
  if (response.data.length > 0) {
    response.data.forEach ((item) => {
      let firstName = item.profile.first_name;
      let lastName = item.profile.last_name;
      let phone = item.practices[0].phones[0].number;
      let website;
      if (item.practices[0].website == undefined) {
        website = "No Website";
      } else {
        website = item.practices[0].website;
      }
      let address;
      if (item.practices[0].visit_address.street2 == undefined) {
        address = item.practices[0].visit_address.street + '<br>' + item.practices[0].visit_address.city + ' ' + item.practices[0].visit_address.state_long + ' ' + item.practices[0].visit_address.zip;
      } else {
        address = item.practices[0].visit_address.street + ' ' + item.practices[0].visit_address.street2 + '<br>' + item.practices[0].visit_address.city + ' ' + item.practices[0].visit_address.state_long + ' ' + item.practices[0].visit_address.zip;
      }
      let newPatients;
      if (item.practices[0].accepts_new_patients == true) {
        newPatients = "Yes";
      } else {
        newPatients = "No";
      }
      $('#listDisplay').append(`<b>${firstName} ${lastName}</b><br>Phone: ${phone}<br>${website}<br>${address}<br>Accepting New Patients: ${newPatients}<br><br>`);
      $("#resultDiv").slideDown("slow");
      $("#queryDiv").hide();
    });
  } else {
    $('#listDisplay').append(`Your query did not bring any results. Please try another word.`);
    $("#resultDiv").slideDown("slow");
    $("#queryDiv").hide();
  }
}
