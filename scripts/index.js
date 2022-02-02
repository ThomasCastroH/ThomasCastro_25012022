import recipeFactory from "./displayRecipes.js";

function displayRecipes() {
    const recipiesContainer = document.getElementById("recipe-list");
    recipiesContainer.innerHTML = "";
  
    let recipeCardTemplate = "";
    for (const recipe of recipes) {
      const recipeModel = new recipeFactory(recipe, recipeCardTemplate);
      recipeCardTemplate = recipeModel.createCardRecipe();
    }
    recipiesContainer.innerHTML = recipeCardTemplate;
}

function init() {
    displayRecipes();
}

init();