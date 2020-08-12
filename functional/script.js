$(document).ready(function () {
  // $.ajax({
  // 	url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
  // 	method: "GET",
  // }).then(function (response) {});
  // var vodkaList = $("<option>");
  // // vodkaList.addClass("browser-default");
  // $("#label").append(vodkaList);
  // var whiskeyList = $("<ul>");
  // $("#whiskeyInput").append(whiskeyList);
  // var rumList = $("<ul>");
  // $("#rumInput").append(rumList);
  // var tequilaList = $("<ul>");
  // $("#tequilaInput").append(tequilaList);
  // var ginList = $("<ul>");
  // $("#ginInput").append(ginList);

  // $("document").on("click", function () {
  // 	alert("Hi");
  // });
  //------------------------------------------------------------------------------------
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka",
    method: "GET"
  }).then(function (response) {
    $("#vodkaInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //---------------------------------------------------------------------------------
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey",
    method: "GET"
  }).then(function (response) {
    $("#whiskeyInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //-----------------------------------------------------------------------------------------
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin",
    method: "GET"
  }).then(function (response) {
    $("#ginInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //-----------------------------------------------------------------------------------------
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum",
    method: "GET"
  }).then(function (response) {
    $("#rumInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //-----------------------------------------------------------------------------------------
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila",
    method: "GET"
  }).then(function (response) {
    $("#tequilaInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //-----------------------------------------------------------------------------------------
  $("select").on("change", function () {
    // alert("hit");
    $("#alcoholDisplay").empty();
    drinkNum = $(this).val();
    console.log(drinkNum);

    $.ajax({
      url:
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkNum,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      //-----------------------------------------------------------------------------------------------------

      console.log(response);
      //start of drink name
      var randomDrinkName = $("<h2>");
      randomDrinkName.attr("id", "drinkName");
      randomDrinkName.text("Your drink is: " + response.drinks[0].strDrink);
      $("#alcoholDisplay").prepend(randomDrinkName);
      //end of drink name

      // start of image
      // var drinkPic = $("<img>");
      // drinkPic.attr("src", response.drinks[0].strDrinkThumb + "/preview");
      // drinkPic.addClass("center");
      // $("#alcoholDisplay").after(drinkPic);
      // console.log(response.drinks[0].strDrinkThumb);

      //Start of ingredients list
      var ing1 = $("<ul>");
      ing1.text(
        response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1
      );
      $("#alcoholDisplay").append(ing1);

      if (
        response.drinks[0].strMeasure2 === null &&
        response.drinks[0].strIngredient2 === null
      ) {
      } else {
        var ing2 = $("<ul>");
        ing2.text(
          response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2
        );
        $("#alcoholDisplay").append(ing2);
      }

      if (
        response.drinks[0].strMeasure3 === null &&
        response.drinks[0].strIngredient3 === null
      ) {
      } else {
        var ing3 = $("<ul>");
        ing3.text(
          response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3
        );
        $("#alcoholDisplay").append(ing3);
      }

      if (
        response.drinks[0].strMeasure4 === null &&
        response.drinks[0].strIngredient4 === null
      ) {
      } else {
        var ing4 = $("<ul>");
        ing4.text(
          response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4
        );
        $("#alcoholDisplay").append(ing4);
      }

      if (
        response.drinks[0].strMeasure5 === null &&
        response.drinks[0].strIngredient5 === null
      ) {
      } else {
        var ing5 = $("<ul>");
        ing5.text(
          response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5
        );
        $("#alcoholDisplay").append(ing5);
      }

      if (
        response.drinks[0].strMeasure6 === null &&
        response.drinks[0].strIngredient6 === null
      ) {
      } else {
        var ing6 = $("<ul>");
        ing6.text(
          response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6
        );
        $("#alcoholDisplay").append(ing6);
      }

      if (
        response.drinks[0].strMeasure7 === null &&
        response.drinks[0].strIngredient7 === null
      ) {
      } else {
        var ing7 = $("<ul>");
        ing7.text(
          response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7
        );
        $("#alcoholDisplay").append(ing7);
      }

      if (
        response.drinks[0].strMeasure8 === null &&
        response.drinks[0].strIngredient8 === null
      ) {
      } else {
        var ing8 = $("<ul>");
        ing8.text(
          response.drinks[0].strMeasure8 + response.drinks[0].strIngredient8
        );
        $("#alcoholDisplay").append(ing8);
      }

      if (
        response.drinks[0].strMeasure9 === null &&
        response.drinks[0].strIngredient9 === null
      ) {
      } else {
        var ing9 = $("<ul>");
        ing9.text(
          response.drinks[0].strMeasure9 + response.drinks[0].strIngredient9
        );
        $("#alcoholDisplay").append(ing9);
      }

      if (
        response.drinks[0].strMeasure10 === null &&
        response.drinks[0].strIngredient10 === null
      ) {
      } else {
        var ing10 = $("<ul>");
        ing10.text(
          response.drinks[0].strMeasure10 + response.drinks[0].strIngredient10
        );
        $("#alcoholDisplay").append(ing10);
      }

      if (
        response.drinks[0].strMeasure11 === null &&
        response.drinks[0].strIngredient11 === null
      ) {
      } else {
        var ing11 = $("<ul>");
        ing11.text(
          response.drinks[0].strMeasure11 + response.drinks[0].strIngredient11
        );
        $("#alcoholDisplay").append(ing11);
      }

      if (
        response.drinks[0].strMeasure12 === null &&
        response.drinks[0].strIngredient12 === null
      ) {
      } else {
        var ing12 = $("<ul>");
        ing12.text(
          response.drinks[0].strMeasure12 + response.drinks[0].strIngredient12
        );
        $("#alcoholDisplay").append(ing12);
      }

      if (
        response.drinks[0].strMeasure13 === null &&
        response.drinks[0].strIngredient13 === null
      ) {
      } else {
        var ing13 = $("<ul>");
        ing13.text(
          response.drinks[0].strMeasure13 + response.drinks[0].strIngredient13
        );
        $("#alcoholDisplay").append(ing13);
      }

      if (
        response.drinks[0].strMeasure14 === null &&
        response.drinks[0].strIngredient14 === null
      ) {
      } else {
        var ing14 = $("<ul>");
        ing14.text(
          response.drinks[0].strMeasure14 + response.drinks[0].strIngredient14
        );
        $("#alcoholDisplay").append(ing14);
      }

      if (
        response.drinks[0].strMeasure15 === null &&
        response.drinks[0].strIngredient15 === null
      ) {
      } else {
        var ing15 = $("<ul>");
        ing15.text(
          response.drinks[0].strMeasure15 + response.drinks[0].strIngredient15
        );
        $("#alcoholDisplay").append(ing15);
      }
      //end of ingredients list

      //start of instructions

      var instructions = $("<p>");
      instructions.attr("id", "ins");
      instructions.text(response.drinks[0].strInstructions);
      $("#alcoholDisplay").after(instructions);
      console.log(instructions);
      console.log(response.drinks[0].strInstructions);
      //end of instructions

      //start of serving instructions
      var serve = $("<p>");
      serve.text("Serve in a " + response.drinks[0].strGlass + ". Cheers!");
      $("#alcoholDisplay").append(serve);
      console.log(serve);
      console.log(response.drinks[0].strGlass);
      //end of instructions

      //-----------------------------------------------------------------------------------------------------
      var drinkRecipe = $("<div>");
      drinkRecipe.addClass("recipe");
      drinkRecipe.text(response.drinks[0].strIngredient2);
      $("#alcoholDisplay").append(drinkRecipe);
    });
  });

  //-------------------------------------------------------------------------------
});
