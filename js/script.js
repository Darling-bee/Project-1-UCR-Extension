$(document).ready(function () {
	console.log("ready!");

	//we need five buttons for spirits
	//each button would need an id that is the href
	$(".button").on("click", function () {
		document.location.href = $(this).attr("id");
	});
	$(".button").on("click", function () {
		document.location.href = $(this).attr("id");
	});
	$(".button").on("click", function () {
		document.location.href = $(this).attr("id");
	});
	$(".button").on("click", function () {
		document.location.href = $(this).attr("id");
	});
	$(".button").on("click", function () {
		document.location.href = $(this).attr("id");
	});
});
