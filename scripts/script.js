'use strict';

function hideContactInfo() {
  $('.contact-icons').hide();
}

$('#connect').click(function() {
  $('.contact-icons').toggle();
});

hideContactInfo();
