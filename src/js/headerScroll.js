(function () {
// Hide Header on on scroll down
    var didScroll;
    var st;
    var isOverThreshold;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.bar-header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
        st = $(this).scrollTop();
        if(st <= navbarHeight){
            isOverThreshold = false;
        }else{
            isOverThreshold = true;
        }
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 150);

    function hasScrolled() {
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight && isOverThreshold){
            // Scroll Down
            hideMenuBar();
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                showMenuBar();
            }
        }

        lastScrollTop = st;
    }

    function hideMenuBar(){
        $('.bar-header').animate({top:'-70px'}, 50, 'swing');
    }

    function showMenuBar(){
        $('.bar-header').animate({top:'0px'}, 10, 'swing');
    }
})();