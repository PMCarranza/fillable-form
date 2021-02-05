'use strict';
$('#my-form').hide();

var choice;

$('#yes').on('click', function (radio) {
    // radio.preventDefault();
    $('#my-form').show();
    console.log(choice);

})