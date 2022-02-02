export default function recipeFactory(recipes, recipeCardTemplate) {
    const { id, name, ingredients, description, time } = recipes;

    function createCardRecipe() {         

      recipeCardTemplate += `
                                <div class="recipe ${id}" tabindex="1">
                                    <div alt="photo de la recette" class="recipe-photo">
                                        <div class="recipe-info">
                                            <div class="recipe-header">
                                                <h2 class="name" title="${name}" tabindex="1">${name}</h2>
                                                <span class="time" tabindex="1"><i class="far fa-clock"></i> ${time} min</span> 
                                            </div>
                                            <div class="recipe-details">
                                                <div class="ingredients" tabindex="1">
      
                              `;
  
      for (const ingredient of ingredients) {
        recipeCardTemplate += `<span class="bold" tabindex="1"> ${ingredient.ingredient}</span>`;
        if (ingredient.quantity) {
          recipeCardTemplate += `<span class="bold" tabindex="1">: ${ingredient.quantity}</span> `;
        }
        if (ingredient.unit) {
          recipeCardTemplate += ` ${ingredient.unit}`;
        }
        recipeCardTemplate += `<br>`;
      }
  
      recipeCardTemplate += `
                                                </div>
                                                  <div class="recipe-description" tabindex="1">${description}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
  
      return recipeCardTemplate;
    }
    return { createCardRecipe };
  }