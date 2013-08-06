jQuery(document).ready(function() {
    // Navigation scrollTo
    jQuery("nav ul li a").click( function(event) {
	event.preventDefault();
        jQuery.scrollTo(
            jQuery(this).attr("href"), 700, {offset:-100}
        );
    });
    // Navigation Waypoints
    $('#content > div').waypoint(function(direction) {
        var prevSitePosition = jQuery(this).prev().attr("id");
        var currentSitePosition = jQuery(this).attr("id");
        if (direction === 'down' ) {
            $('#' + currentSitePosition + '-menu-item').addClass("navigation-active");
            $('#' + prevSitePosition + '-menu-item').removeClass("navigation-active");
            console.log("prev: "+prevSitePosition + " current:"+currentSitePosition);
        } else {
            $('#' + prevSitePosition + '-menu-item').addClass("navigation-active");
            $('#' + currentSitePosition + '-menu-item').removeClass("navigation-active");
        }
    }, { offset: 111 }); // Offset because of menu
});



