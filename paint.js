function drawTable() {
	let pixelSize = 32; // px
	document.write("<table border='1'>");
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

	$("table").click(function() {
		if(paint) {
			paint = false;
			$("body").removeClass('cursorActive');
		}
		else {
			paint = true;
			$("body").addClass('cursorActive');
		}
	})

	$("td").hover(function() {
		if(paint) {
			$(this).addClass('activeTD');
			$(this).addClass('hoverTD');
		}
	}, function() {
		$(this).removeClass('hoverTD')
	})
})