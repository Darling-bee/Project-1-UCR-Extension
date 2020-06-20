//alert("Hi");
$(document).ready(function () {
  //console.log("ready!");
  $.ajax({
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var randomDrinkName = $("<h2>");
    randomDrinkName.attr("id", "drinkName");
    randomDrinkName.text(
      "Your drink is: " + response.drinks[0].strDrink
    );
    $("#random").append(randomDrinkName);

    //var ingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // var ingList = $("<ul>");
    // ingList.attr("id", "ingredients");

    // $(".section").append(ingList);

    // var ing1 = $("<li>");
    // ing1.text(response.drinks[0].strIngredient1);

    // $("#ingredients").append(ing1);
    // console.log(ingList);
    // console.log(ing1);

    var instructions = $("<p>");
    instructions.attr("id", "ins");
    instructions.text(response.drinks[0].strInstructions);
    $("#drinkName").append(instructions);
    console.log(instructions);
    console.log(response.drinks[0].strInstructions);

    var serve = $("<p>");
    serve.text(
      "Serve in a " +
        response.drinks[0].strGlass +
        ". Cheers!"
    );
    $("#ins").append(serve);
    console.log(serve);
    console.log(response.drinks[0].strGlass);
  });
});
