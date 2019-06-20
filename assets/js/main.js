/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});
	//open links of sites in new tab instead

	jQuery("a").attr("target","_blank");
	});

	// sidebar

	function openNav() {
	document.getElementById("mySidenav").style.width = "350px";
	//document.getElementById("main").style.marginRight = "275px";
	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  	 }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	//document.getElementById("main").style.marginRight= "0";
	//document.body.style.backgroundColor = "white";
 	 }