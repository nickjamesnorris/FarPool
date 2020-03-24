/**
 * Button listener for handling zip code submissions when user is searching for carpools.
 */
let zipCodeSubmit = $('#zipCodeSubmit');

zipCodeSubmit.click(function(event){
    let zipCode = $('locationZipCode').val();
    console.log(zipCode);
});