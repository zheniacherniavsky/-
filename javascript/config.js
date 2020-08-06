let color = "Black"
let grid = true;

$(document).ready(function() {

	$("#configIcon").hover(function() {
		$(this).fadeOut("fast");
		$("#config").fadeIn("slow");
	})

	$("#config").hover(function() {/* ^.^ hello bro B) */},function() {
		$(this).fadeOut("slow");
		$("#configIcon").fadeIn("slow");
	})


	$(".Black").click(function() {
		color = "Black";
		$(".brush").css('background-color', 'Black');
	})
	$(".Gray").click(function() {
		color = "Gray";
		$(".brush").css('background-color', 'Gray');
	})
	$(".Silver").click(function() {
		color = "Silver";
		$(".brush").css('background-color', 'Silver');
	})
	$(".White").click(function() {
		color = "White";
		$(".brush").css('background-color', 'White');
	})
	$(".Magenta").click(function() {
		color = "Magenta";
		$(".brush").css('background-color', 'Magenta');
	})
	$(".Purple").click(function() {
		color = "Purple";
		$(".brush").css('background-color', 'Purple');
	})
	$(".Red").click(function() {
		color = "Red";
		$(".brush").css('background-color', 'Red');
	})
	$(".Maroon").click(function() {
		color = "Maroon";
		$(".brush").css('background-color', 'Maroon');
	})
	$(".Olive").click(function() {
		color = "Olive";
		$(".brush").css('background-color', 'Olive');
	})
	$(".Lime").click(function() {
		color = "Lime";
		$(".brush").css('background-color', 'Lime');
	})
	$(".Green").click(function() {
		color = "Green";
		$(".brush").css('background-color', 'Green');
	})
	$(".Aqua").click(function() {
		color = "Aqua";
		$(".brush").css('background-color', 'Aqua');
	})
	$(".Teal").click(function() {
		color = "Teal";
		$(".brush").css('background-color', 'Teal');
	})
	$(".Blue").click(function() {
		color = "Blue";
		$(".brush").css('background-color', 'Blue');
	})
	$(".Navy").click(function() {
		color = "Navy";
		$(".brush").css('background-color', 'Navy');
	})
	$(".Yellow").click(function() {
		color = "Yellow";
		$(".brush").css('background-color', 'Yellow');
	})
	$(".Eraser").click(function() {
		color = "rgb(235, 255, 255)";
		$(".brush").css('background-color', 'rgb(235, 255, 255)');
	})

	$("#grid").click(function() {
		if(grid) {
			grid = false
			document.getElementById('grid').innerHTML = "Сетка ❌";
			$("#paint td").css('border', '1px solid rgb(0,0,0,0)');
		}
		else {
			grid = true;
			document.getElementById('grid').innerHTML = "Сетка ✅";
			$("#paint td").css('border', '1px solid rgb(0,0,0,0.1)');
		}
	})

	$("#clean").click(function() {
		$("#paint td").removeClass();
	})
})