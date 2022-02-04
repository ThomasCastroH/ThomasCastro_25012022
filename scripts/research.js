export default function filterRecipes (recipes, string) {

    let input = string.toLowerCase();

    let filteredArray = recipes.filter(function (e) {
        if (input.length >= 3) {
            return e.name.toLowerCase().includes(input) || e.description.toLowerCase().includes(input);
        } else {
            return recipes;
        }
    });
    

    if ( input.length >= 3){   
        recipes.forEach( recipe => {
            recipe.ingredients.map((ingr) => {
                if (ingr.ingredient.toLowerCase().includes(input)) {
                    filteredArray.push(recipe);
                }
            }
        )
    })};

    let uniqueArray = [... new Set(filteredArray)];

    return uniqueArray;
}