'use strict';
require ('./css/main');
import $ from 'jquery';

$('.hamburger-menu').on('click', function() {
  document.getElementById('phoneNav').style.height = '100%';
});

$('.close-nav').on('click', function() {
  document.getElementById('phoneNav').style.height = '0%';
});

$('.mobile-nav').on('click', function() {
  document.getElementById('phoneNav').style.height = '0%';
});
