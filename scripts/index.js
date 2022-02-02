import recipeFactory from "./displayRecipes.js";
import createBoxTags from "./displayTag.js";

function displayRecipes() {
    const recipesContainer = document.getElementById("recipe-list");

    for (const recipe of recipes) {
      const recipeCard = new recipeFactory(recipe);
      const recipeDOM = recipeCard.getCardDOM();
      recipesContainer.appendChild(recipeDOM);    
    }
}

function init() {
  // Permet d'utiliser un seul addEventListener pour tous les tags
  [...document.querySelectorAll(".tags")].forEach(function(item) {
    item.addEventListener("click", () => {
      var targetClasses = event.target.classList[0];
      var targetValue = event.target.textContent;
      var targetClass = targetClasses.split('-');
      var category = targetClass[1];

      createBoxTags(category, targetValue);
    })
  });

  displayRecipes();
}

init();