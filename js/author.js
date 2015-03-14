function tab_click(event) {
				event.preventDefault(); //we will take it from here.
			// manage the chosen link
			$('#tabbed .tabs a').removeClass('theOne');/*blanket remove*/
			$(this).addClass('theOne');/*add to the one they just clicked.*/
			// manage sections
			var theHref = $(this).attr('href'); /*grab the id label in the link href*/
			console.log(theHref); /*test it*/
			$('#tabbed section').hide(); /*hide all - blanket hide*/
			$(theHref).show(); /*show the chosen section off of href id*/
		}
		$('#tabbed .tabs a').click(tab_click);
		$('#tabbed .tabs a:first').trigger('click')

		
// other stuff

// initialize some variables
var next;
var prev;

function light_on() {
	// update next and prev
	next = $(this).parent().next().find('img');
	prev = $(this).parent().prev().find('img');

	// update the image in the lightbox
	var newSrc = $(this).attr('src');
	$('#dark .light img')
		.attr('src',newSrc)
		.stop(true)
		.css({'opacity':'0'});

	// manage the height off the new dims
	$('#dark .light img').load(function(){
		var newHeight = $('#dark .light img').height();
		console.log(newHeight);

		// $('#dark .light').height(newHeight);
		$('#dark .light')
			.stop(true)
			.animate({'height':newHeight},1000, function() {
				$('#dark .light img').animate({'opacity':'1'},500);
			});

	});




// show the lightbox
	$('#dark').show();
}

$('#gallery img').click(light_on);

function light_off() {
	$('#dark').hide();
}

$('#dark .light .glyphicon').click(light_off);

function arrow_next() {
	console.log(next);
	next.trigger('click');
}
function arrow_prev() {
	console.log(prev);
	prev.trigger('click');
}

$('.light .iglyphicon-chevron-left').click(arrow_prev);
$('.light .glyphicon-chevron-right').click(arrow_next);


// This is the plugin javascript


window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}

window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
    alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
}

window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(info) {
    // Handle the battery low event
    alert("Battery Level Low " + info.level + "%");
}
