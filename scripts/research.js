export { filterRecipes, filterRecipeByTags };

function filterRecipes (recipes, string) {

    let input = string.toLowerCase();
    let filteredArray = [];

    if (input.length >= 3) {
        for (let i=0; i < recipes.length; i++) {
            if (recipes[i].name.toLowerCase().includes(input)) {
                filteredArray.push(recipes[i]);
            }
            for (let x=0; x < recipes[i].ingredients.length; x++) {
                if (recipes[i].ingredients[x].ingredient.toLowerCase().includes(input)) {
                    filteredArray.push(recipes[i]);                }
            }
            for (let y = 0; y < recipes[i].ustensils.length; y++) {
                if (recipes[i].ustensils[y].toLowerCase().includes(input)) {
                    filteredArray.push(recipes[i]);
                }
            }
            if (recipes[i].appliance.toLowerCase().includes(input)) {
                filteredArray.push(recipes[i]);
            }
            if (recipes[i].description.toLowerCase().includes(input)) {
                filteredArray.push(recipes[i]);
            }
        }
    } else {
        return recipes
    }
    console.log(filteredArray);
    let uniqueArray = [... new Set(filteredArray)];
    return uniqueArray;
}

function filterRecipeByTags (array) {

    let recipes = document.querySelectorAll('.recipe');
    if (array.length == 0) {
        recipes.forEach(recipe => {
            recipe.classList.remove("is-hidden");
            recipe.classList.add("is-displayed");
        });
    } else {
        array.forEach(item => {
            recipes.forEach(recipe => {
                if (recipe.innerText.toLowerCase().includes(item)) {
                    recipe.classList.remove("is-hidden");
                    recipe.classList.add("is-displayed");
                } else {
                    recipe.classList.add("is-hidden");
                    recipe.classList.remove("is-displayed");
                }
            });
        })
    }
}