function drawTable() {
	let pixelSize = 32; // px
	document.write("<table id='paint'>");
	let tableHeight = 0;
	while(tableHeight <= window.innerHeight-5) {
		document.write("<tr>");
		let trWidth = 0;
		while(trWidth <= window.innerWidth+pixelSize) {
			document.write("<td></td>");
			trWidth += pixelSize;
		}
		document.write("</tr>");
		tableHeight += pixelSize;
	}
	document.write("</table>");
}

drawTable();
let paint = false;

$(document).ready(function() {
	
	$("#accept").click(function() {
		$("#hello").fadeOut( "slow", function() {
			$("table").fadeIn("slow", function() {
				$("body").addClass('cursorActive');
			});
 		});
	})

	$("#paint td").mousedown(function() {
		$(this).removeClass();
		$(this).addClass(color);
	});
	$("#paint td").mousedown(function(){ 
	    paint = true;
	    $("#configIcon").fadeOut("fast");
	});
	$("#paint td").mouseup(function(){ 
	    paint = false;
	    $("#configIcon").fadeIn("fast");
	});

	$("#paint td").hover(function() {
		if(paint) {
			$(this).removeClass();
			$(this).addClass(color);
		}
		$(this).addClass('hoverTD');
	}, function() {
		$(this).removeClass('hoverTD')
	});
})