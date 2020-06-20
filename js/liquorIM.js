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
	$("#whiskey").append(whiskeyList);
	var rumList = $("<ul>");
	$("#rum").append(rumList);
	var tequilaList = $("<ul>");
	$("#tequila").append(tequilaList);
	var ginList = $("<ul>");
	$("#gin").append(ginList);

	$("document").on("click", function () {
		alert("Hi");
	});

	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("#vodka").on("click", function () {
			console.log("working");
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				// drinkList.add("<a>");
				// drinkList.attr("href", "#");
				// drinkList.append("<a href='#'></a>");
				drinkList.append(
					"<a href='#'>" + response.drinks[i].strDrink + ":" + "</a>"
				);

				// drinkList.append(
				// 	"<button>" + response.drinks[i].strDrink + "</button>"
				// );
				// drinkList.addClass("button waves-effect waves-light btn");
				// link = $("<a>");
				// link.attr("href", "https://www.google.com");
				// drinkList.text(response.drinks[i].strDrink);
				// $(drinkList).append(link);
				$(vodkaList).append(drinkList);
				//
			}
		});
	});
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("#tequila").on("click", function () {
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				drinkList.append("<a href='#'>" + response.drinks[i].strDrink + "</a>");
				// drinkList.text(response.drinks[i].strDrink);
				$(tequilaList).append(drinkList);
			}
		});
	});
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("#gin").on("click", function () {
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				// drinkList.text(response.drinks[i].strDrink);
				drinkList.append("<a href='#'>" + response.drinks[i].strDrink + "</a>");
				$(ginList).append(drinkList);
			}
		});
	});
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("#whiskey").on("click", function () {
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				drinkList.append("<a href='#'>" + response.drinks[i].strDrink + "</a>");
				// drinkList.text(response.drinks[i].strDrink);
				$(whiskeyList).append(drinkList);
			}
		});
	});
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum",
		method: "GET",
	}).then(function (response) {
		console.log(response);

		$("#rum").on("click", function () {
			for (var i = 0; response.drinks.length; i++) {
				var drinkList = $("<li>");
				var drinkAnchor = $("<a>");
				$(drinkList).append(drinkAnchor);
				var drink = true;
				// drinkList.addClass("anchor");
				// drinkList.attr("id", "anchor");
				if (drink === true) {
					drinkAnchor.text(response.drinks[i].strDrink);
					drinkAnchor.attr("drinkId", response.drinks[i].idDrink);
					// drinkAnchor.attr("data-recipe", recipiArr[])
					$(rumList).append(drinkList);
					drink = false;
					// drinkList.text(response.drinks[i].strDrink);
				} else {
					drink = true;
					console.log("Hit");
				}
			}
		});
	});
	document.addEventListener("click", function (event) {
		if (event.target.matches("<a>")) {
			console.log("hit");
			drinkNum = this.drinkId;
		}
	});
	var drinkNum = "";
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkNum,
		method: "GET",
	}).then(function (response) {
		console.log(response);
		var drinkRecipie = $("<div>");
		drinkRecipie.text(response.drinks[0].strIngredient1);
		$("#recipe");
	});
});
