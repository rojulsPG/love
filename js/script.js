// JavaScript by st4zz - versi aman

$(document).ready(function() {

  // Smooth scroll nav
  $('.nav-link').on('click', function(e) {
    var tujuan = $(this).attr('href');
    if(tujuan.startsWith('#')) { // biar nggak error kalau href="#"
      var elemenTujuan = $(tujuan);
      $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
      }, 1250, 'easeInOutExpo');
      e.preventDefault();
    }
  });

  // Parallax Kontol Efek :v 
  // About Text
  $(window).on('load', function() {
    $('.pleft').addClass('pshow');
    $('.pright').addClass('pshow');
  });

  $(window).scroll(function(){
    var iScroll = $(this).scrollTop();

    // Jumbotron Parallax
    $('.jumbotron img').css('transform', 'translateY(' + iScroll/4 + 'px)');
    $('.jumbotron h1').css('transform', 'translateY(' + iScroll/2 + 'px)');
    $('.jumbotron p').css('transform', 'translateY(' + iScroll/1.2 + 'px)');

    // Gallery Efek
    if( $('.gallery').length && iScroll > $('.gallery').offset().top - 200 ) {
      $('.gallery .thumbnail').each(function(i) {
        var thumb = $(this);
        setTimeout(function() {
          thumb.addClass('foto');
        }, 300 * (i+1));
      });
    }
  });

});
