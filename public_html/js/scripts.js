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
  if ($(this).attr('class') !== 'dropdown-toggle active' && $(this).attr('class') !== 'dropdown-toggle') {
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

//google maps
$('#map').gmap3({
    map: {
        options: {
            center: [52.176856, 21.589037],
            zoom: 15,
            panControl: false,
            zoomControl: false
        }
    },
    marker: {
        values:[{
            latLng: [52.176856, 21.589037],
            data: 'Warszawska 252'
        }],
        events:{
            click: function(marker, event, context) {
                var map = $(this).gmap3('get'),
                    infowindow = $(this).gmap3({get:{name:'infowindow'}});
                if (infowindow) {
                    infowindow.open(map, marker);
                    infowindow.setContent(context.data);
                } else {
                    $(this).gmap3({
                        infowindow: {
                            anchor: marker,
                            options: {content: context.data}
                        }
                    });
                }
            }
        }
    }
});

//animate slicebox
$(function() {
    var Page = (function() {
        var $navArrows = $( '#nav-arrows' ).hide(),
            $shadow = $( '#shadow' ).hide(),
            slicebox = $( '#sb-slider' ).slicebox( {
                onReady : function() {
                    $navArrows.show();
                    $shadow.show();
                },
                orientation : 'r',
                cuboidsRandom : true,
                disperseFactor : 30,
                autoplay: true,
                interval: 6000
            } ),
            init = function() {
                initEvents();
            },
            initEvents = function() {
                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {
                    slicebox.next();
                    return false;
                } );
                $navArrows.children( ':last' ).on( 'click', function() {
                    slicebox.previous();
                    return false;
                } );
            };
            return { init : init };
    })();
    Page.init();
});

//gallery swipebox
$( '.swipebox' ).swipebox({
    removeBarsOnMobile : true,
    hideCloseButtonOnMobile : true,
});

