$( document ).ready(function() {
  // Handler for .ready() called.
  // put everything here
  // you need the dom ready before you do anything

	// function readMore(){
	// 	$("p").css({color: "blue", "font-family": "Georgia"});
	// }

	// $(".readmore").click(readMore);



	function readMore(){
		console.log('clicked');
		// how do I slide something down?
		$("#show-this-on-click").slideDown( "slow" );
		// how do I make it stay there?
		$(".readless").show("show-this-on-click");
		$(".readmore").hide(".readmore");
	}

	$(".readmore").click(readMore);



	function readLess(){
		$("#show-this-on-click").slideUp( "slow" );
		$(".readless").hide("show-this-on-click");
		$(".readmore").show(".readmore");
	}

	$(".readless").click(readLess);




	function learnMore(){
		$("#learnmoretext").slideDown( "slow" );
		$(".learnmore").hide(".learnmore");
		
	}

	$(".learnmore").click(learnMore);












});// end of .ready











//  if ( $( ".readless" ).is( ":hidden" ) ) {
//     $( "p div:show-this-on-click" ).slideDown( "slow" );
//     $(".readless").slideDown( "slow");
//   } else {
//     $( ".readless" ).hide();


//     have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()