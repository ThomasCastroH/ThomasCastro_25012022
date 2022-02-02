function filterList(recipes, category) {
  let list = [];
  let uniqueList;
  
  switch (category) {
    case "ingredients":
      recipes.forEach((recipe) => {
        if (recipe.ingredients) {
          const ingredientsMap = recipe.ingredients.map((ingr) =>
            ingr.ingredient.toLowerCase()
          );
          list.push(...ingredientsMap);
        }
      });
      uniqueList = list.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      return uniqueList;

    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance) {
          const appliancesMap = recipe.appliance;
          list.push(appliancesMap);
        }
      });
      uniqueList = list.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      return uniqueList;

    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils) {
          const ustensilsMap = recipe.ustensils.map((ustensil) =>
            ustensil
          );
          list.push(...ustensilsMap);
        }
      });
      uniqueList = list.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      return uniqueList;  }
}

// affiche les elements dans le conteneur
function listTag(item, category) {
  const container = document.createElement("li");
  container.setAttribute('class', `tag-${category} tags`);
  container.innerText = item[0].toUpperCase(0) + item.substring(1);

  return container;
}

// ajoute les element dans leurs conteneurs
const ingredientsTags = filterList(recipes, "ingredients");
ingredientsTags.forEach((element) => {
  let ingredientsBoxList = document.querySelector("#sugg-ingr");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-ingr");
  const domIngredients = listTag(element, "ingredients");
  searchlistIngredients.append(domIngredients);
});

const applianceTags = filterList(recipes, "appliance");
applianceTags.forEach((element) => {
  let ingredientsBoxList = document.querySelector("#sugg-app");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-app");
  const domAppliances = listTag(element, "appliance");
  searchlistIngredients.append(domAppliances);
});

const ustensilsTags = filterList(recipes, "ustensils");
ustensilsTags.forEach((element) => {
  let ingredientsBoxList = document.querySelector("#sugg-ust");
  ingredientsBoxList.style.display = "none";
  const searchlistIngredients = document.querySelector("#sugg-ust");
  const domAppliances = listTag(element, "ustensils");
  searchlistIngredients.append(domAppliances);
});

// fonction filtre des tags
function filterTags(string) {
  let target = string;
  let input = document.getElementById(target);

  switch (target) {
    case "user-ingr":
      var filter = input.value.toUpperCase();
      var div = document.getElementById("sugg-ingr");
      var elem = div.getElementsByClassName("tag-ingredients");
    
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
      var elem = div.getElementsByClassName("tag-appliance");
    
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
      var elem = div.getElementsByClassName("tag-ustensils");
    
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

// fonction affichage des filtres
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

// Affichage en cliquant
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