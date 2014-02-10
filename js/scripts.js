/*  Supeers JS */
var page_var = {
	w_w: $(window).width(),
	w_h: $(window).height(),
	s_t: $("html, body").scrollTop()
}


$(function() {
	

});


window.onload = function() {
	
	
	$(window).resize();

	// load
};


$(window).resize(function() {
	page_var.w_w = $(window).width();
	page_var.w_h = $(window).height();

	// resize
});


$(window).scroll(function() {
	
	// scroll
});