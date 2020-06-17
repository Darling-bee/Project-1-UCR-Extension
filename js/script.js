$(document).ready(function () {
	console.log("ready!");

	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		method: "GET",
	}).then(function (response) {
		console.log(response);
	});

	//we need five buttons for spirits
	//each button would need an id that is the href
	// $("button").on("click", function () {
	// 	document.location.href = $(this).attr("id");
	// });
	var vodkaList = $("<ul>");
	$("#vodka").append(vodkaList);
	var whiskeyList = $("<ul>");
	$("#whiskey").append();

	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("button").on("click", function () {
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				drinkList.text(response.drinks[i].strDrink);
				$(vodkaList).append(drinkList);
			}
		});
	});
	// $("button").on("click", function () {
	// 	document.location.href = $(this).attr("id");
	// });
	// $("button").on("click", function () {
	// 	document.location.href = $(this).attr("id");
	// });
	// $("button").on("click", function () {
	// 	document.location.href = $(this).attr("id");
	// });
});
