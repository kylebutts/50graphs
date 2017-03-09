// My Functions
$(function() {
    // Sticky Nav
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 64) {
            $('nav').addClass('nav--shrink')
            $('#content').addClass('content--shrink')
        } else {
			$('nav').removeClass('nav--shrink')
			$('#content').removeClass('content--shrink')
        }
    });

	// Toggle Code
	$(".code-toggle").click(function(){
		$(this).parent().children('pre').toggleClass('hidden')
		$(this).children('i').toggleClass('fa-angle-up').toggleClass('fa-angle-down')
	})

});
