import recipeFactory from "./displayRecipes.js";
import { displayFilterList, filterTags, showTagList } from "./displayFilterList.js";
import { createBoxTags, removeTag } from "./displayTag.js";
import { filterRecipes, filterRecipeByTags } from "./research.js";

export default function displayRecipes(array) {
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

  // tri les elements par tags
  let tagsArray = [];

  $(document).on('click','.tags', function()
  {
    let targetClasses = event.target.classList[0];
    let targetValue = event.target.textContent;
    let targetClass = targetClasses.split('-');
    let category = targetClass[1];

    tagsArray.push(targetValue.toLowerCase());

    createBoxTags(category, targetValue);
    filterRecipeByTags(tagsArray);
  });

  $(document).on('click','.close-btn', function()
  {
    let tagValue = event.target.parentNode.parentNode.textContent.toLowerCase();
    tagsArray = removeTag(tagsArray, tagValue);
    filterRecipeByTags(tagsArray);
    event.target.parentNode.parentNode.remove();
  });
}

init();