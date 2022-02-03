export default function filterRecipes (recipes, string) {
    let input = string.toLowerCase();

    let filteredArray = recipes.filter(function (e) {
        if (input.length >= 3) {
            console.log(e.ingredients);
            return e.name.toLowerCase().includes(input) || e.description.toLowerCase().includes(input);
        } else {
            return recipes;
        }
    });

    return filteredArray;
}