//alert("Hi");
$(document).ready(function () {
  //console.log("ready!");
  $.ajax({
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //start of drink name
    var randomDrinkName = $("<h2>");
    randomDrinkName.attr("id", "drinkName");
    randomDrinkName.text(
      "Your drink is: " + response.drinks[0].strDrink
    );
    $("#ingList").prepend(randomDrinkName);
    //end of drink name

    //start of image
    var drinkPic = $("<img>");
    drinkPic.attr(
      "src",
      response.drinks[0].strDrinkThumb + "/preview"
    );
    drinkPic.addClass("center");
    $("#drinkName").after(drinkPic);
    console.log(response.drinks[0].strDrinkThumb);

    //Start of ingredients list
    var ing1 = $("<ul>");
    ing1.text(
      response.drinks[0].strMeasure1 +
        response.drinks[0].strIngredient1
    );
    $("#ingList").append(ing1);

    if (
      response.drinks[0].strMeasure2 === null &&
      response.drinks[0].strIngredient2 === null
    ) {
    } else {
      var ing2 = $("<ul>");
      ing2.text(
        response.drinks[0].strMeasure2 +
          response.drinks[0].strIngredient2
      );
      $("#ingList").append(ing2);
    }

    if (
      response.drinks[0].strMeasure3 === null &&
      response.drinks[0].strIngredient3 === null
    ) {
    } else {
      var ing3 = $("<ul>");
      ing3.text(
        response.drinks[0].strMeasure3 +
          response.drinks[0].strIngredient3
      );
      $("#ingList").append(ing3);
    }

    if (
      response.drinks[0].strMeasure4 === null &&
      response.drinks[0].strIngredient4 === null
    ) {
    } else {
      var ing4 = $("<ul>");
      ing4.text(
        response.drinks[0].strMeasure4 +
          response.drinks[0].strIngredient4
      );
      $("#ingList").append(ing4);
    }

    if (
      response.drinks[0].strMeasure5 === null &&
      response.drinks[0].strIngredient5 === null
    ) {
    } else {
      var ing5 = $("<ul>");
      ing5.text(
        response.drinks[0].strMeasure5 +
          response.drinks[0].strIngredient5
      );
      $("#ingList").append(ing5);
    }

    if (
      response.drinks[0].strMeasure6 === null &&
      response.drinks[0].strIngredient6 === null
    ) {
    } else {
      var ing6 = $("<ul>");
      ing6.text(
        response.drinks[0].strMeasure6 +
          response.drinks[0].strIngredient6
      );
      $("#ingList").append(ing6);
    }

    if (
      response.drinks[0].strMeasure7 === null &&
      response.drinks[0].strIngredient7 === null
    ) {
    } else {
      var ing7 = $("<ul>");
      ing7.text(
        response.drinks[0].strMeasure7 +
          response.drinks[0].strIngredient7
      );
      $("#ingList").append(ing7);
    }

    if (
      response.drinks[0].strMeasure8 === null &&
      response.drinks[0].strIngredient8 === null
    ) {
    } else {
      var ing8 = $("<ul>");
      ing8.text(
        response.drinks[0].strMeasure8 +
          response.drinks[0].strIngredient8
      );
      $("#ingList").append(ing8);
    }

    if (
      response.drinks[0].strMeasure9 === null &&
      response.drinks[0].strIngredient9 === null
    ) {
    } else {
      var ing9 = $("<ul>");
      ing9.text(
        response.drinks[0].strMeasure9 +
          response.drinks[0].strIngredient9
      );
      $("#ingList").append(ing9);
    }

    if (
      response.drinks[0].strMeasure10 === null &&
      response.drinks[0].strIngredient10 === null
    ) {
    } else {
      var ing10 = $("<ul>");
      ing10.text(
        response.drinks[0].strMeasure10 +
          response.drinks[0].strIngredient10
      );
      $("#ingList").append(ing10);
    }

    if (
      response.drinks[0].strMeasure11 === null &&
      response.drinks[0].strIngredient11 === null
    ) {
    } else {
      var ing11 = $("<ul>");
      ing11.text(
        response.drinks[0].strMeasure11 +
          response.drinks[0].strIngredient11
      );
      $("#ingList").append(ing11);
    }

    if (
      response.drinks[0].strMeasure12 === null &&
      response.drinks[0].strIngredient12 === null
    ) {
    } else {
      var ing12 = $("<ul>");
      ing12.text(
        response.drinks[0].strMeasure12 +
          response.drinks[0].strIngredient12
      );
      $("#ingList").append(ing12);
    }

    if (
      response.drinks[0].strMeasure13 === null &&
      response.drinks[0].strIngredient13 === null
    ) {
    } else {
      var ing13 = $("<ul>");
      ing13.text(
        response.drinks[0].strMeasure13 +
          response.drinks[0].strIngredient13
      );
      $("#ingList").append(ing13);
    }

    if (
      response.drinks[0].strMeasure14 === null &&
      response.drinks[0].strIngredient14 === null
    ) {
    } else {
      var ing14 = $("<ul>");
      ing14.text(
        response.drinks[0].strMeasure14 +
          response.drinks[0].strIngredient14
      );
      $("#ingList").append(ing14);
    }

    if (
      response.drinks[0].strMeasure15 === null &&
      response.drinks[0].strIngredient15 === null
    ) {
    } else {
      var ing15 = $("<ul>");
      ing15.text(
        response.drinks[0].strMeasure15 +
          response.drinks[0].strIngredient15
      );
      $("#ingList").append(ing15);
    }
    //end of ingredients list

    //start of instructions

    var instructions = $("<p>");
    instructions.attr("id", "ins");
    instructions.text(response.drinks[0].strInstructions);
    $("#insTitle").after(instructions);
    console.log(instructions);
    console.log(response.drinks[0].strInstructions);
    //end of instructions

    //start of serving instructions
    var serve = $("<p>");
    serve.text(
      "Serve in a " +
        response.drinks[0].strGlass +
        ". Cheers!"
    );
    $("#ins").append(serve);
    console.log(serve);
    console.log(response.drinks[0].strGlass);
    //end of instructions
  });
});