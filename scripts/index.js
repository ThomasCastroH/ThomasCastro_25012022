import recipeFactory from "./displayRecipes.js";
import { displayFilterList, filterTags, showTagList } from "./displayFilterList.js";
import createBoxTags from "./displayTag.js";
import filterRecipes from "./research.js";

function displayRecipes(array) {
    let recipes = array;
    const recipesContainer = document.getElementById("recipe-list");

    for (const recipe of recipes) {
      const recipeCard = new recipeFactory(recipe);
      const recipeDOM = recipeCard.getCardDOM();
      recipesContainer.appendChild(recipeDOM);    
    }
}

function init() {
  displayRecipes(recipes);
  displayFilterList(recipes);

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

  let input = document.querySelector('#search-bar');
  input.addEventListener('keyup', () => {
    let value = document.querySelector('#search-bar').value;
    let filteredRecipes = filterRecipes(recipes, value);

    // vide le container des recettes pour afficher les recettes correspondantes
    let container = document.querySelector("#recipe-list");
    container.innerHTML = "";

    // vide les containers pour afficher seulement les ingr,app,ust correspondants
    let ingrContainer = document.querySelector("#sugg-ingr");
    ingrContainer.innerHTML = "";
    let appContainer = document.querySelector("#sugg-app");
    appContainer.innerHTML = "";
    let ustContainer = document.querySelector("#sugg-ust");
    ustContainer.innerHTML = "";

    displayRecipes(filteredRecipes);
    displayFilterList(filteredRecipes);
  });

  // permet d'utiliser un seul addEventListener pour les trois tagList
  // tri les tags dans leurs contianers respectifs
  [...document.querySelectorAll(".filter-text")].forEach(function(item) {
    item.addEventListener("keyup", () => {
      var target = event.target.id;
      filterTags(target);
      showTagList(target);
    })
  });
}

init();