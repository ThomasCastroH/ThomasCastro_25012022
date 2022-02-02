import recipeFactory from "./displayRecipes.js";

function displayRecipes() {
    const recipesContainer = document.getElementById("recipe-list");

    for (const recipe of recipes) {
      const recipeCard = new recipeFactory(recipe);
      const recipeDOM = recipeCard.getCardDOM();
      recipesContainer.appendChild(recipeDOM);    
    }
}

function init() {
    displayRecipes();
}

init();