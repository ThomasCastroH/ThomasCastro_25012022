export { displayFilterList, showTagList, filterTags};

function displayFilterList (recipes) {

  const ingrTagBox = document.querySelector('#sugg-ingr');
  const appTagBox = document.querySelector('#sugg-app');
  const ustTagBox = document.querySelector('#sugg-ust');

  let ingrArray = [];
  let appArray = [];
  let ustArray = [];

  // construit 3 listes contenant ingredient, appareils, ustensils
  for (const recipe of recipes) {

    for (const ingredient of recipe.ingredients) {
      ingrArray.push(ingredient.ingredient);
    }

    appArray.push(recipe.appliance);

    for ( let i = 0; i < recipe.ustensils.length; i++ ) {
      ustArray.push(recipe.ustensils[i]);
    }
  }

  // retrait des doublons dans les listes
  let uniqueIngrArray = [... new Set(ingrArray)];
  let uniqueAppArray = [... new Set(appArray)];
  let uniqueUstArray = [... new Set(ustArray)];

  uniqueIngrArray.forEach( function(ingr) {
    const ingrList = document.createElement('li');
    ingrList.classList.add('tag-ingredients');
    ingrList.classList.add('tags');
    ingrList.textContent = ingr;

    ingrTagBox.appendChild(ingrList);
  })

  uniqueAppArray.forEach( function(app) {
    const appList = document.createElement('li');
    appList.classList.add('tag-appliance');
    appList.classList.add('tags');
    appList.textContent = app;

    appTagBox.appendChild(appList);
  })

  uniqueUstArray.forEach( function(ust) {
    const ustList = document.createElement('li');
    ustList.classList.add('tag-ustensils');
    ustList.classList.add('tags');
    ustList.textContent = ust[0].toUpperCase()+ust.substring(1);

    ustTagBox.appendChild(ustList);
  })
}

// fonction filtre des tags
function filterTags(string) {
  let target = string;
  let input = document.getElementById(target);

  switch (target) {
    case "user-ingr":
      var filter = input.value.toUpperCase();
      var div = document.getElementById("sugg-ingr");
      var elem = div.getElementsByClassName("tag-ingredients");
    
      for (let i = 0; i < elem.length; i++) {
        let txtValue = elem[i].textContent || elem[i].innerText;
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
    
      for (let i =0; i < elem.length; i++) {
        let txtValue = elem[i].textContent || elem[i].innerText;
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
    
      for (let i =0; i < elem.length; i++) {
        let txtValue = elem[i].textContent || elem[i].innerText;
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