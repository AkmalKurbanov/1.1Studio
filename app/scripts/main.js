$(document).ready(function () {


 // slider //////////////////////////////////////////////////////////////////
 var swiper = new Swiper('.rewardsSlide-js', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4500,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    772: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

 var swiper = new Swiper('.lastProjects-js', {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 3
    }
  }
});

 var swiper = new Swiper('.flabEvent-js', {
  slidesPerView: 12,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,      
  },
  autoplay: {
    delay: 4500,
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 5
    },
    991: {
      slidesPerView: 6
    },
    1199: {
      slidesPerView: 8
    },
    1600: {
      slidesPerView: 8
    }
  }
});
 // slider end //////////////////////////////////////////////////////////////////






    // search //////////////////////////////////////////////////////////////////
    $('.search-js, .closeBtn-js').click(function () {
      $('.hideForm-js').slideToggle();
      $('.search-js').toggleClass('searchNone');
    });
  // search end //////////////////////////////////////////////////////////////////







  // subMenu //////////////////////////////////////////////////////////////////
  if (Modernizr.mq('(min-width: 768px)')) {
    $('.nav-js a').click(function (e) {
      e.preventDefault();
      $('.nav-js a').not(this).removeClass('iconRotate-js');
      $('.nav-js a').not(this).next().slideUp();
      $(this).toggleClass('iconRotate-js');
      $(this).toggleClass('activeHover');
      $(this).next().slideToggle();
    });

    $('.flabSubMenu').mouseleave(function () {
      $('.nav-js a').removeClass('iconRotate-js');
      $('.nav-js a').removeClass('activeHover');
      $('.nav-js a').next().slideUp();
    });
  }
  // subMenu end //////////////////////////////////////////////////////////////////










  // input event //////////////////////////////////////////////////////////////////
  $('.iphone-js').click(function (e) {
    $('.nav-js a').removeClass('iconRotate-js');
  });
  // input event end //////////////////////////////////////////////////////////////////








  // input phone //////////////////////////////////////////////////////////////////
  $('.js-phone').mask('+999 (999) 99-99-99');
  // input phone end //////////////////////////////////////////////////////////////////








// mmnenu menu clone //////////////////////////////////////////////////////////////////
$('.navMenu-js ul').clone().appendTo('.flabMmenu');
$('.flabNavWrap__nav').clone().appendTo('.flabMmenu');
// mmnenu menu clone end //////////////////////////////////////////////////////////////////







// equalizer click toggleClass //////////////////////////////////////////////////////////////////
$('.equalizer-js').on('click',function() {
 $(this).toggleClass('equalizerOff');
});
// equalizer click toggleClass //////////////////////////////////////////////////////////////////





// menu main page //////////////////////////////////////////////////////////////////
function checkPosition() {
  if (Modernizr.mq('(min-width: 768px)')) {
    var
    $ham      =      $('.flabHamburger'),
    $hamOp    =      $('.flabHamburger--open'),
    $shBut    =      $('.mainSearchButton-js'),
    $lM       =      $('.lMenu-js'),
    $nM       =      $('.navMenu-js, .navMenu-js ul li'),
    $copy     =      $('.copy-js'),
    $hF       =      $('.hidForm-js'),
    $rot      =      $('.video-js');

    $ham.on('click',function() {  
      $ham.toggleClass('flabHamburger--open');
      $rot.toggleClass('rotateVideo');  
      $lM.toggleClass('flabLeftMenu--open');  
      $nM.toggleClass('showMenu');  
      $copy.fadeToggle();
      $hF.fadeOut(); 
      $shBut.fadeIn();
      $nM.fadeIn();
      if($hF.css('display') == 'block'){
        $nM.removeClass('showMenu'); 
      }
    });

    $shBut.on('click',function() { 
      $(this).fadeOut();
      $rot.addClass('rotateVideo'); 
      $lM.addClass('flabLeftMenu--open');   
      $ham.addClass('flabHamburger--open');
      $hF.fadeIn(); 
      $nM.fadeOut();  
      $copy.fadeIn();
    });

  }
// menu main page end //////////////////////////////////////////////////////////////////


      // mmenu //////////////////////////////////////////////////////////////////
      else{
        var $menu = $('.flabMmenu').mmenu({

          'navbar': {
            'title': '<div class="flabHeader__logo flabHeader__logo--logoMmenu"><a href="index.html"><div class="flabHeader__logoWrap"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 149.37 44.92"><defs><style>.cls-1{fill:#fc1114}.cls-2{fill:#fff}.cls-3,.cls-4{isolation:isolate}.cls-4{opacity:.75}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="Layer_19" data-name="Layer 19"><polygon class="cls-1" points="9.94 0.45 9.94 4.51 12.31 4.51 12.31 28.58 16.76 28.58 16.76 4.51 16.76 1.03 16.76 0.45 9.94 0.45"/></g><g id="Layer_18" data-name="Layer 18"><polygon class="cls-1" points="0 0.45 0 4.51 2.37 4.51 2.37 28.58 6.82 28.58 6.82 4.51 6.82 1.03 6.82 0.45 0 0.45"/></g><g id="Layer_16" data-name="Layer 16"><polygon class="cls-2" points="35.01 0.3 35.01 4.36 44.5 4.36 44.5 28.43 49.25 28.43 49.25 4.36 59.04 4.36 59.04 0.3 35.01 0.3"/></g><g id="Layer_15" data-name="Layer 15"><rect class="cls-2" x="114.22" y="0.3" width="4.45" height="28.13"/></g><path class="cls-2" d="M134.53.3a14.23,14.23,0,0,0-14.39,14.07,14.39,14.39,0,0,0,28.78,0A14.23,14.23,0,0,0,134.54.3Zm0,24.65a10.71,10.71,0,0,1-10.83-10.58,10.83,10.83,0,0,1,21.66,0h0A10.71,10.71,0,0,1,134.53,25Z"/><g id="Layer_13" data-name="Layer 13"><path class="cls-2" d="M84.85,17.57V.3H81V15.38c0,8.41-3.41,9.57-8.9,9.57s-8.31-2.32-8.31-9.57V.3H60.23V18.57c0,5.61,5.51,10.15,12.31,10.15s12.31-4.06,12.31-10.15"/></g><g id="Layer_12" data-name="Layer 12"><path class="cls-2" d="M98.35.3H86.63V28.43H98.35a14.23,14.23,0,0,0,14.39-14.07A14.23,14.23,0,0,0,98.35.3ZM97,24.78H90.78V4.07H97c6.55,0,11.86,4.63,11.86,10.35S103.57,24.78,97,24.78Z"/></g><g id="Layer_11" data-name="Layer 11"><path class="cls-2" d="M33.67,2.19c-5.93-4.06-15.13-2-15.13,4.93,0,4.93,2.73,6.38,5.93,8.12,2.67,1.45,6.23,3.48,6.23,6.38,0,2.61-2.92,3.37-4.9,3.34C22,24.88,18.54,21,18.54,21V26a10.68,10.68,0,0,0,11.87,2,6.75,6.75,0,0,0,4.15-6.67c-.15-3.92-1.48-5.8-5.64-8.12-2-1.14-6.53-2.61-6.53-6.09,0-1.74,1.78-3.48,4.45-3.48,3.26,0,6.82,3.48,6.82,3.48Z"/></g><g id="Layer_10" data-name="Layer 10"><rect class="cls-2" x="34.44" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="36.72" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="41.29" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="29.88" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="27.6" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="25.32" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="23.04" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="20.76" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="18.48" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="16.2" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="13.92" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="11.64" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="9.36" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="7.08" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="4.79" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="2.51" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="32.16" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="39.01" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="43.57" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="48.13" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="96.02" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="98.3" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="102.87" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="45.85" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="91.46" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="89.18" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="86.9" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="84.62" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="82.34" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="80.06" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="77.78" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="75.5" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="73.22" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="70.94" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="68.66" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="66.37" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="64.09" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="61.81" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="59.53" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="57.25" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="54.97" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="52.69" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="50.41" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="93.74" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="100.58" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="105.15" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="109.71" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="107.43" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="148.48" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="146.2" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="143.92" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="141.64" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="139.36" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="137.08" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="134.8" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="132.52" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="130.23" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="127.95" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="125.67" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="123.39" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="121.11" y="35.68" width="0.89" height="4.06"/><rect class="cls-2" x="118.83" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="116.55" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="114.27" y="35.68" width="0.89" height="2.32"/><rect class="cls-2" x="111.99" y="35.68" width="0.89" height="2.32"/></g><g id="Layer_9" data-name="Layer 9"><g class="cls-3"><path class="cls-2" d="M76.72,41.74a1.09,1.09,0,0,1-.21.73.81.81,0,0,1-1.18,0,1.08,1.08,0,0,1-.22-.73v-.59a1.09,1.09,0,0,1,.22-.73.81.81,0,0,1,1.18,0,1.09,1.09,0,0,1,.22.73Zm-.34-.66a.81.81,0,0,0-.12-.48.45.45,0,0,0-.69,0,.82.82,0,0,0-.12.48v.72a.82.82,0,0,0,.12.48.4.4,0,0,0,.35.16.4.4,0,0,0,.34-.16.83.83,0,0,0,.12-.49Z"/></g></g><g id="Layer_8" data-name="Layer 8"><g class="cls-3"><path class="cls-2" d="M98.91,42.69h-.34V40.54H98V40.3l.86-.09Z"/></g></g><g id="Layer_7" data-name="Layer 7"><g class="cls-3"><path class="cls-2" d="M122.47,42.69h-1.64v-.23l.83-.9a2.28,2.28,0,0,0,.3-.39.6.6,0,0,0,.08-.29.46.46,0,0,0-.11-.31.37.37,0,0,0-.29-.13.51.51,0,0,0-.39.13.52.52,0,0,0-.12.37h-.33a.69.69,0,0,1,.22-.54.86.86,0,0,1,.63-.22.75.75,0,0,1,.54.19.66.66,0,0,1,.2.5.78.78,0,0,1-.12.41,2.61,2.61,0,0,1-.34.44l-.67.71h1.22Z"/></g></g><g id="Layer_6" data-name="Layer 6"><g class="cls-3"><path class="cls-2" d="M144,41.29h.3a.4.4,0,0,0,.32-.11.46.46,0,0,0,.09-.31.44.44,0,0,0-.11-.32.43.43,0,0,0-.32-.11.45.45,0,0,0-.32.11.4.4,0,0,0-.12.31h-.33a.59.59,0,0,1,.21-.48.81.81,0,0,1,.57-.2.82.82,0,0,1,.56.18.66.66,0,0,1,.21.52.57.57,0,0,1-.09.31.59.59,0,0,1-.28.23.56.56,0,0,1,.32.23.72.72,0,0,1-.13.88.86.86,0,0,1-.58.19.88.88,0,0,1-.57-.18.58.58,0,0,1-.22-.5h.33a.4.4,0,0,0,.12.31.47.47,0,0,0,.34.12.48.48,0,0,0,.34-.12.44.44,0,0,0,.12-.34.46.46,0,0,0-.11-.34.48.48,0,0,0-.35-.11H144Z"/></g></g><g id="Layer_5" data-name="Layer 5"><g class="cls-3"><path class="cls-2" d="M51.61,41.77h-.85v-.26h.85Z"/><path class="cls-2" d="M52.86,42.69h-.34V40.54H52V40.3l.86-.09Z"/></g></g><g id="Layer_4" data-name="Layer 4"><g class="cls-3"><path class="cls-2" d="M28.71,41.77h-.85v-.26h.85Z"/><path class="cls-2" d="M30.62,42.69H29v-.23l.83-.9a2.28,2.28,0,0,0,.3-.39.6.6,0,0,0,.08-.29.46.46,0,0,0-.11-.31.37.37,0,0,0-.29-.13.51.51,0,0,0-.39.13.52.52,0,0,0-.12.37h-.33a.69.69,0,0,1,.22-.54.86.86,0,0,1,.63-.22.75.75,0,0,1,.54.19.66.66,0,0,1,.2.5.78.78,0,0,1-.12.41,2.61,2.61,0,0,1-.34.44l-.67.71h1.22Z"/></g></g><g id="Layer_3" data-name="Layer 3"><g class="cls-3"><path class="cls-2" d="M5.77,41.77H4.92v-.26h.85Z"/><path class="cls-2" d="M6.51,41.29h.3a.4.4,0,0,0,.32-.11.46.46,0,0,0,.09-.31.44.44,0,0,0-.11-.32.43.43,0,0,0-.32-.11.45.45,0,0,0-.32.11.4.4,0,0,0-.12.31H6a.59.59,0,0,1,.21-.48.81.81,0,0,1,.57-.2.82.82,0,0,1,.56.18.66.66,0,0,1,.21.52.57.57,0,0,1-.09.31.59.59,0,0,1-.28.23.56.56,0,0,1,.32.23.72.72,0,0,1-.13.88.86.86,0,0,1-.58.19.88.88,0,0,1-.57-.18A.58.58,0,0,1,6,42h.33a.4.4,0,0,0,.12.31.47.47,0,0,0,.34.12.48.48,0,0,0,.34-.12A.44.44,0,0,0,7.27,42a.46.46,0,0,0-.11-.34.48.48,0,0,0-.35-.11h-.3Z"/></g></g><g id="Layer_2" data-name="Layer 2"><polygon class="cls-2" points="75.94 43.1 74.86 44.92 77.01 44.92 75.94 43.1"/></g><g id="Слой_2-2" data-name="Слой 2"><g id="Layer_14" class="blinker" data-name="Layer 14"><image class="cls-4" width="326" height="326" transform="translate(119.84) scale(0.09 0.09)" xlink:href="data:image/png;base64,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"/><path class="cls-1" d="M143.77,14.34a9.26,9.26,0,0,1-18.51,0,9.26,9.26,0,0,1,18.51,0Z"/></g></g></g></g></svg></div></a></div>'
          },

          'extensions': [
          'pagedim-black',
          'position-right',
          'theme-dark'
          ],      
          'counters': true,
          'iconbar': {
            'add': true,
            'top': [
            '<a href=\'/\'><i class=\'fal fa-home\'></i></a>'
            ],
            'bottom': [
            '<a href=\'#\'><i class=\'fab fa-youtube\'></i></a>',
            '<a href=\'#\'><i class=\'fab fa-instagram\'></i></a>',
            '<a href=\'#\'><i class=\'fab fa-facebook-f\'></i></a>',
            '<a href=\'#\'><i class=\'fab fa-vk\'></i></a>'
            ]
          },     

          'navbars': [
          {
           'position': 'bottom',
           'content': [
           'searchfield'
           ]
         }
         ],    
         'searchfield': {
          'showSubPanels': false
        }

      });
var API = $('.flabMmenu').data('mmenu'),
$icon = $('.flabHamburger');
$icon.click(function () {
  API.open();
});
API.bind('open:finish', function () {
  $icon.addClass('flabHamburger--open');
});
API.bind('close:finish', function () {
  setTimeout(function () {
    $icon.removeClass('flabHamburger--open');
  }, 100);
});
}
}

checkPosition();

$( window ).resize(function() {
  checkPosition();
});
 // mmenu end //////////////////////////////////////////////////////////////////






// video main //////////////////////////////////////////////////////////////////
$('.flabLeftMenu__having').click(function () {
  $(this).toggleClass('rotate');
  $(this).next().slideToggle();
});
// video main end //////////////////////////////////////////////////////////////////




// input effect //////////////////////////////////////////////////////////////////
var $inputItem = $('.js-inputWrapper');
$inputItem.length && $inputItem.each(function () {
  var $this = $(this),
  $input = $this.find('.flabFormInput--input'),
  placeholderTxt = $input.attr('placeholder'),
  $placeholder;

  $input.after('<span class="placeholder">' + placeholderTxt + '</span>'),
  $input.attr('placeholder', ''),
  $placeholder = $this.find('.placeholder'),

  $input.val().length ? $this.addClass('active') : $this.removeClass('active'),

  $input.on('focusout', function () {
    $input.val().length ? $this.addClass('active') : $this.removeClass('active');
  }).on('focus', function () {
    $this.addClass('active');
  });
});
// input effect end //////////////////////////////////////////////////////////////////


  //E-mail Ajax Send //////////////////////////////////////////////////////////////////
  $('form').submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize()
    }).done(function () {
      $.magnificPopup.open({
        items: {
          src: '#popup_thanks'
        },
        type: 'inline',
        midClick: true
      });
      setTimeout(function () {
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  //E-mail Ajax end  //////////////////////////////////////////////////////////////////







  // acardeon //////////////////////////////////////////////////////////////////
  $('.buttonHiddenItem-jss').click(function () {
    $(this).next().slideToggle(800);
  });
  $('.flabCareers__itemName p').click(function () {
    $(this).toggleClass('blink_link');
  });
  // acardeon end //////////////////////////////////////////////////////////////////
  

  



// contropls buttons on main page //////////////////////////////////////////////////////////////////
$('.pause-js').click(function () {
  if($('#video').get(0).paused == true){
    $(this).html('<i class="fal fa-pause"></i>')
    $('#video').get(0).play();     
  }

  else{
    $(this).html('<i class="fal fa-play"></i>')
    $('#video').get(0).pause();
  }
});
if($('#video').get(0).paused == true){
 $('#video').get(0).play();     
}


$('.equalizer-js').click(function () {
  if($('#video').get(0).muted == false){
    $('#video').get(0).muted = true;    
  }
  else{
    $('#video').get(0).muted = false;
  }
});
// contropls buttons on main page end //////////////////////////////////////////////////////////////////





});
