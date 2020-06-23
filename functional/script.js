$(document).ready(function () {
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		method: "GET",
	}).then(function (response) {});
	var vodkaList = $("<option>");
	// vodkaList.addClass("browser-default");
	$("#label").append(vodkaList);
	var whiskeyList = $("<ul>");
	$("#whiskeyInput").append(whiskeyList);
	var rumList = $("<ul>");
	$("#rumInput").append(rumList);
	var tequilaList = $("<ul>");
	$("#tequilaInput").append(tequilaList);
	var ginList = $("<ul>");
	$("#ginInput").append(ginList);

	$("document").on("click", function () {
		alert("Hi");
	});
	//------------------------------------------------------------------------------------
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka",
		method: "GET",
	}).then(function (response) {
		$("#vodkaInput").on("click", function () {
			$(vodkaList).empty();

			for (var i = 0; i < response.drinks.length; i++) {
				var drinkList = $("<option>");
				drinkList.attr("value", [i]);

				drinkList.text(response.drinks[i].strDrink);
				drinkList.attr("data-drinkId", response.drinks[i].idDrink);

				$("#select").append(drinkList);
			}
			$("#alcoholSubmit").on("click", function () {
				drinkNum = $(drinkList).attr("data-drinkId");
				console.log(drinkNum);

				$.ajax({
					url:
						"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
						drinkNum,
					method: "GET",
				}).then(function (response) {
					console.log(drinkNum);

					var drinkRecipe = $("<div>");
					drinkRecipe.text(response.drinks[0].strIngredient1);
					$("#alcoholDisplay").append(drinkRecipe);
				});
			});
		});
	});
	//-------------------------------------------------------------------------------
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila",
		method: "GET",
	}).then(function (response) {
		$("#tequila").on("click", function () {
			$(tequilaList).empty();

			for (var i = 0; i < response.drinks.length; i++) {
				var drinkList = $("<li>");
				var drinkAnchor = $("<a>");
				$(drinkList).append(drinkAnchor);
				drinkAnchor.text(response.drinks[i].strDrink);
				drinkAnchor.attr("data-drinkId", response.drinks[i].idDrink);
				drinkAnchor.attr("href", "#");
				$(tequilaList).append(drinkList);
			}
			$("a").on("click", function () {
				drinkNum = $(this).attr("data-drinkId");
			});
			$.ajax({
				url:
					"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
					drinkNum,
				method: "GET",
			}).then(function (response) {
				console.log(drinkNum);

				var drinkRecipe = $("<div>");
				drinkRecipe.text(response.drinks[0].strIngredient1);
				$("#recipe").append(drinkRecipe);
			});
		});
	});
	//------------------------------------------------------------------------------------
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin",
		method: "GET",
	}).then(function (response) {
		$("#gin").on("click", function () {
			$(ginList).empty();

			for (var i = 0; i < response.drinks.length; i++) {
				var drinkList = $("<li>");
				var drinkAnchor = $("<a>");
				$(drinkList).append(drinkAnchor);
				drinkAnchor.text(response.drinks[i].strDrink);
				drinkAnchor.attr("data-drinkId", response.drinks[i].idDrink);
				drinkAnchor.attr("href", "#");
				$(ginList).append(drinkList);
			}
			$("a").on("click", function () {
				drinkNum = $(this).attr("data-drinkId");
			});
			$.ajax({
				url:
					"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
					drinkNum,
				method: "GET",
			}).then(function (response) {
				console.log(drinkNum);

				var drinkRecipe = $("<div>");
				drinkRecipe.text(response.drinks[0].strIngredient1);
				$("#recipe").append(drinkRecipe);
			});
		});
	});
	//-------------------------------------------------------------------------------------
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey",
		method: "GET",
	}).then(function (response) {
		$("#whiskey").on("click", function () {
			$(whiskeyList).empty();

			for (var i = 0; i < response.drinks.length; i++) {
				var drinkList = $("<li>");
				var drinkAnchor = $("<a>");
				$(drinkList).append(drinkAnchor);
				drinkAnchor.text(response.drinks[i].strDrink);
				drinkAnchor.attr("data-drinkId", response.drinks[i].idDrink);
				drinkAnchor.attr("href", "#");
				$(whiskeyList).append(drinkList);
			}
			$("a").on("click", function () {
				drinkNum = $(this).attr("data-drinkId");
			});
			$.ajax({
				url:
					"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
					drinkNum,
				method: "GET",
			}).then(function (response) {
				console.log(drinkNum);

				var drinkRecipe = $("<div>");
				drinkRecipe.text(response.drinks[0].strIngredient1);
				$("#recipe").append(drinkRecipe);
			});
		});
	});
	//-------------------------------------------------------------------------------------
	$.ajax({
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum",
		method: "GET",
	}).then(function (response) {
		$("#rum").on("click", function () {
			$(rumList).empty();

			for (var i = 0; i < response.drinks.length; i++) {
				var drinkList = $("<li>");
				var drinkAnchor = $("<a>");
				$(drinkList).append(drinkAnchor);
				drinkAnchor.text(response.drinks[i].strDrink);
				drinkAnchor.attr("data-drinkId", response.drinks[i].idDrink);
				drinkAnchor.attr("href", "#");
				$(rumList).append(drinkList);
			}
			$("a").on("click", function () {
				drinkNum = $(this).attr("data-drinkId");
			});
			$.ajax({
				url:
					"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
					drinkNum,
				method: "GET",
			}).then(function (response) {
				console.log(drinkNum);

				var drinkRecipe = $("<div>");
				drinkRecipe.text(response.drinks[0].strIngredient1);
				$("#recipe").append(drinkRecipe);
			});
		});
	});

	$;
});
