function showContactInfo() {
  $('.contact-information').show();
}

function hideContactInfo() {
  $('.contact-information').hide();
}

$('#connect').hover(function() {
  showContactInfo();
})

$('.contact-information').on('mouseleave', function() {
  hideContactInfo();
});
