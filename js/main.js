$(function () {
    //    smooth scroll of menu
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
    //    end of smooth scroll

    //    ==========bannar slider srart===========

    $(document).ready(function () {
        $('#bannar-full').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            nextArrow: '<i class="fas fa-chevron-right"></i>',
            fade: true,
            speed: 1600,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
            },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
        });

    })


    // ==========portfolio slider part Start ===========

//    $(document).ready(function () {
//        $('.portfolio-slider').slick({
//            dots: false,
//            infinite: true,
//            arrows: false,
//            speed: 600,
//            autoplay: true,
//            autoplaySpeed: 2000,
//            slidesToShow: 4,
//            slidesToScroll: 1,
//            responsive: [{
//                    breakpoint: 1024,
//                    settings: {
//                        slidesToShow: 3,
//                        slidesToScroll: 1,
//                        infinite: true,
//                    }
//            },
//                {
//                    breakpoint: 600,
//                    settings: {
//                        slidesToShow: 2,
//                        slidesToScroll: 1
//                    }
//            },
//                {
//                    breakpoint: 480,
//                    settings: {
//                        slidesToShow: 2,
//                        slidesToScroll: 1
//                    }
//            }
//        ]
//        });
//
//    });
//

    //    =======Gallery lightshot=========

    $(document).ready(function () {
        $('.venobox').venobox();
    });


    //   == counter plugin ==
    $(function () {
        $('.count-num').rCounter();
    });
    //    sticky menu and back to top
    var menudis = $(".nav-full").offset().top;
    //    alert(menudis);
    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        //        alert(scrolling);

        if (scrolling >= menudis) {
            $(".nav-full").addClass("sticky");
            $(".nav-full").fadeIn();
        } else {
            $(".nav-full").removeClass("sticky");
        }
        //        back to top button condition
        if (scrolling >= 200) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    })
    //    back to top button jquery
    $(".back-to-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })


    //   ========= smooth scroll==============

    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    window.location.hash = hash;
                });
            }
        });
    });

    //=========Datepicker start==============

    $(document).ready(function () {
        var minDate = new Date();

        $('#datepicker').datepicker({
            showAnim: 'drop',
            numberOfMonth: 1,
            dateFormat: 'dd/mm/yy',
            minDate: minDate,
            onclose: function (selectedDate) {
                $('#datepicker2').datepicker("option", "minDate", selectedDate);
            }

        });

        $('#datepicker2').datepicker({
            showAnim: 'drop',
            numberOfMonth: 1,
            dateFormat: 'dd/mm/yy',
            minDate: minDate,
            onclose: function (selectedDate) {
                $('#datepicker').datepicker("option", "minDate", selectedDate);
            }

        });
    })

    //    =======feedbaack slidder=========

    $(document).ready(function () {

        //    feedbaack slidder 1

        $('.feedback_slide').slick({
            focusOnSelect: true,
            infinite: true,
            arrows: false,
            dots: false,
            asNavFor: '.clients_slider',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
            },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
        });


        //    feedbaack slidder 2

        $('.clients_slider').slick({
            focusOnSelect: true,
            infinite: true,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: 0,
            asNavFor: '.feedback_slide',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
            },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }

        ]
        });

    });

    //=======mixitup filter=======

    $(document).ready(function () {
        var mixer = mixitup('.filter-img');
    });

    //    $(document).ready(function () {
    //        $( '#nav-full .navbar-nav a' ).on( 'click', function () {
    //	$( '#nav-full .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    //	$( this ).parent( 'li' ).addClass( 'active' );
    //    })
    //    
    //    
    //});

})
