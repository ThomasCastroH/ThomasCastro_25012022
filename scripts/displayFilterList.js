function elementsTag(recipes, elementTag) {
  let list = [];
  let listreduced = [];
  
  switch (elementTag) {
    case "ingredients":
      recipes.forEach((recipe) => {
        if (recipe.ingredients.length) {
          const ingredientsMap = recipe.ingredients.map((ingr) =>
            ingr.ingredient.toLowerCase()
          );
          list.push(...ingredientsMap);
        }
      });
      listreduced = [...new Set(list)];

      return listreduced;

    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance.length) {
          const appliancesMap = recipe.appliance.toLowerCase();

          list.push(appliancesMap);
        }
      });
      listreduced = [...new Set(list)];

      return listreduced;

    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils.length) {
          const ustensilsMap = recipe.ustensils.map((ustensil) =>
            ustensil.toLowerCase()
          );

          list.push(...ustensilsMap);
        }
      });
      listreduced = [...new Set(list)];
      return listreduced;
  }
}

// // display element in the box
function listTag(item, element) {
  const wrapper = document.createElement("li");
  wrapper.classList.add(`search-item-${element}`);
  wrapper.innerText = item.charAt(0).toUpperCase() + item.slice(1);

  return wrapper;
}

// add element ingredient in his box
const ingredientsTags = elementsTag(recipes, "ingredients");

ingredientsTags.forEach((element) => {
  ingredientsTags.splice(30);
  let ingredientsBoxList = document.querySelector("#sugg-ingr");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-ingr");
  const domIngredients = listTag(element, "ingredients");
  searchlistIngredients.append(domIngredients);
});

// add element appliance in his box
const applianceTags = elementsTag(recipes, "appliance");
applianceTags.forEach((element) => {
  let ingredientsBoxList = document.querySelector("#sugg-app");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-app");
  const domAppliances = listTag(element, "appliance");
  searchlistIngredients.append(domAppliances);
});

// add element ustensils in his box
const ustensilsTags = elementsTag(recipes, "ustensils");
ustensilsTags.forEach((element) => {
  let ingredientsBoxList = document.querySelector("#sugg-ust");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-ust");
  const domAppliances = listTag(element, "ustensils");
  searchlistIngredients.append(domAppliances);
});

// fonction filtre des tags ingredients
function filterTags(string) {
  let target = string;
  let input = document.getElementById(target);

  switch (target) {
    case "user-ingr":
      var filter = input.value.toUpperCase();
      var div = document.getElementById("sugg-ingr");
      var elem = div.getElementsByClassName("search-item-ingredients");
    
      for (i =0; i < elem.length; i++) {
        txtValue = elem[i].textContent || elem[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          elem[i].style.display = "";
        } else {
          elem[i].style.display = "none";
        }
      }
    case "user-app":
      var filter = input.value.toUpperCase();
      var div = document.getElementById("sugg-app");
      var elem = div.getElementsByClassName("search-item-appliance");
    
      for (i =0; i < elem.length; i++) {
        txtValue = elem[i].textContent || elem[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          elem[i].style.display = "";
        } else {
          elem[i].style.display = "none";
        }
      }
    case "user-ust":
      var filter = input.value.toUpperCase();
      var div = document.getElementById("sugg-ust");
      var elem = div.getElementsByClassName("search-item-ustensils");
    
      for (i =0; i < elem.length; i++) {
        txtValue = elem[i].textContent || elem[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          elem[i].style.display = "";
        } else {
          elem[i].style.display = "none";
        }
      }
  }
}

// fonction affichage des tags dans les filtres
function showTagList(string) {
  let target = string;

  switch (target) {

    case "user-ingr":  
      document.querySelector("#close-ingr").style.display = "block";
      document.querySelector("#open-ingr").style.display = "none";
      document.querySelector("#sugg-ingr").style.display = "grid";
      document.querySelector("#ingredient-filter").style.width = "667px";
    
      var input = document.getElementById("user-ingr");
      if (input.value.length == 0) {
        document.querySelector("#close-ingr").style.display = "none";
        document.querySelector("#open-ingr").style.display = "block";
        document.querySelector("#sugg-ingr").style.display = "none";
        document.querySelector("#ingredient-filter").style.width = "170px";
      }

    case "user-app":
      document.querySelector("#close-app").style.display = "block";
      document.querySelector("#open-app").style.display = "none";
      document.querySelector("#sugg-app").style.display = "grid";
      document.querySelector("#appliance-filter").style.width = "667px";
    
      var input = document.getElementById("user-app");
      if (input.value.length == 0) {
        document.querySelector("#close-app").style.display = "none";
        document.querySelector("#open-app").style.display = "block";
        document.querySelector("#sugg-app").style.display = "none";
        document.querySelector("#appliance-filter").style.width = "170px";
      }

    case "user-ust":
      document.querySelector("#close-ust").style.display = "block";
      document.querySelector("#open-ust").style.display = "none";
      document.querySelector("#sugg-ust").style.display = "grid";
      document.querySelector("#ustensils-filter").style.width = "667px";
    
      var input = document.getElementById("user-ust");
      if (input.value.length == 0) {
        document.querySelector("#close-ust").style.display = "none";
        document.querySelector("#open-ust").style.display = "block";
        document.querySelector("#sugg-ust").style.display = "none";
        document.querySelector("#ustensils-filter").style.width = "170px";
      }
  }
}

// Permet d'utiliser un seul addEventListener pour les trois
[...document.querySelectorAll(".filter-text")].forEach(function(item) {
  item.addEventListener("keyup", () => {
    var target = event.target.id;
    filterTags(target);
    showTagList(target);
  })
});

// list + search display on click
// ingredients
document.querySelector("#open-ingr").addEventListener("click", () => {
    document.querySelector("#close-ingr").style.display = "block";
    document.querySelector("#open-ingr").style.display = "none";
    document.querySelector("#sugg-ingr").style.display = "grid";

    document.querySelector("#ingredient-filter").style.width = "667px";
    document.querySelector("#sugg-app").style.display = "none";
    document.querySelector("#appliance-filter").style.width = "170px";
    document.querySelector("#sugg-ust").style.display = "none";
    document.querySelector("#ustensils-filter").style.width = "170px";
    document.querySelector("#close-app").style.display = "none";
    document.querySelector("#open-app").style.display = "block";
    document.querySelector("#close-ust").style.display = "none";
    document.querySelector("#open-ust").style.display = "block";
});

document
  .querySelector("#close-ingr").addEventListener("click", () => {
    document.querySelector("#close-ingr").style.display = "none";
    document.querySelector("#open-ingr").style.display = "block";
    document.querySelector("#sugg-ingr").style.display = "none";
    document.querySelector("#ingredient-filter").style.width = "170px";
  });

// appliances
document.querySelector("#open-app").addEventListener("click", () => {
    document.querySelector("#close-app").style.display = "block";
    document.querySelector("#open-app").style.display = "none";
    document.querySelector("#sugg-app").style.display = "grid";

    document.querySelector("#appliance-filter").style.width = "667px";
    document.querySelector("#sugg-ingr").style.display = "none";
    document.querySelector("#ingredient-filter").style.width = "170px";
    document.querySelector("#sugg-ust").style.display = "none";
    document.querySelector("#ustensils-filter").style.width = "170px";
    document.querySelector("#close-ingr").style.display = "none";
    document.querySelector("#open-ingr").style.display = "block";
    document.querySelector("#close-ust").style.display = "none";
    document.querySelector("#open-ust").style.display = "block";
});

document.querySelector("#close-app").addEventListener("click", () => {
    document.querySelector("#close-app").style.display = "none";
    document.querySelector("#open-app").style.display = "block";
    document.querySelector("#sugg-app").style.display = "none";
    document.querySelector("#appliance-filter").style.width = "170px";
});

// ustensils
document.querySelector("#open-ust").addEventListener("click", () => {
    document.querySelector("#close-ust").style.display = "block";
    document.querySelector("#open-ust").style.display = "none";
    document.querySelector("#sugg-ust").style.display = "grid";

    document.querySelector("#ustensils-filter").style.width = "667px";
    document.querySelector("#sugg-app").style.display = "none";
    document.querySelector("#appliance-filter").style.width = "170px";
    document.querySelector("#sugg-ingr").style.display = "none";
    document.querySelector("#ingredient-filter").style.width = "170px";
    document.querySelector("#close-ingr").style.display = "none";
    document.querySelector("#open-ingr").style.display = "block";
    document.querySelector("#close-app").style.display = "none";
    document.querySelector("#open-app").style.display = "block";
});

document.querySelector("#close-ust").addEventListener("click", () => {
    document.querySelector("#close-ust").style.display = "none";
    document.querySelector("#open-ust").style.display = "block";
    document.querySelector("#sugg-ust").style.display = "none";
    document.querySelector("#ustensils-filter").style.width = "170px";
});