//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// STELLAR FOR BACKGROUND SCROLLING
$(window).load(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    } else {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }
});

// -------------------------------------------------------------
// .span-link
// -------------------------------------------------------------
$('.sl').on('click', function (e) {    
    var f = $('.new-tab-opener');
    f.attr('action', $(this).attr('data-href'));
    f.submit();    
});

//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
             $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});	

$("#form_contact").submit(function(){
        return false;
});

$("#form_contact").validate({
  rules: {
        email: {
          required: true,
          email: true
        },
        temat: {
          required: true,
          email: false
        },
        wiadomosc: "required",
  },
  messages: {
        email: {
          required: "<h6>- Wypełnij pole adres e-mail</h6>",
          email: "<h6>- Błędny format adres e-mail</h6>"
        },
        temat: {
          required: "<h6>- Wypełnij pole Temat</h6>",
        },
        wiadomosc: "<h6>- Treść wiadomości nie może być pusta</h6>"
  }
});