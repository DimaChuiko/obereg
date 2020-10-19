/*jshint esversion: 6 */
//jQuery(document).ready(function($) {
//$('.menu-phone').hide();
$('.menu-open-btn').on('click', () => {
 if ($('#menu-phone').css('display') === 'none') {
  $('.menu-btn-line').addClass('menu-btn-line-active');
  $('.menu-phone').slideDown(500);
 } else {
  $('.menu-btn-line').removeClass('menu-btn-line-active');
  $('.menu-phone').slideUp(500);
 }
});