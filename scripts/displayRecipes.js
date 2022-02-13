export default function recipeFactory(recipes) {
    const { id, name, ingredients, description, time } = recipes;

    function getCardDOM() {         

      const card = document.createElement('div');
      card.setAttribute('class', 'recipe is-displayed');
      card.setAttribute('id', id);

      const cardPhoto = document.createElement('div');
      cardPhoto.setAttribute('class', 'recipe-photo');
      cardPhoto.setAttribute('alt', 'Photo de la recette');

      const cardInfo = document.createElement('div');
      cardInfo.setAttribute('class', 'recipe-info');

      const cardInfoHeader = document.createElement('div');
      cardInfoHeader.setAttribute('class', 'recipe-header');

      const cardHeaderTitle = document.createElement('h2');
      cardHeaderTitle.setAttribute('class', 'recipe-name');
      cardHeaderTitle.textContent = name;

      const timeLogo = document.createElement('span');
      timeLogo.innerHTML = '<i class="far fa-clock"></i>';

      const cardHeaderTime = document.createElement('span');
      cardHeaderTime.setAttribute('class', 'recipe-time');
      cardHeaderTime.textContent = time +"min";

      const cardInfoDetails = document.createElement('div');
      cardInfoDetails.setAttribute('class', 'recipe-details');

      const cardDetailsIngr = document.createElement('div');
      cardDetailsIngr.setAttribute('class', 'recipe-ingredient');
      
      const cardDetailsDesc = document.createElement('div');
      cardDetailsDesc.setAttribute('class', 'recipe-description');
      cardDetailsDesc.textContent = description;

      card.appendChild(cardPhoto);
      card.appendChild(cardInfo);

      cardInfo.appendChild(cardInfoHeader);
      cardInfoHeader.appendChild(cardHeaderTitle);
      cardInfoHeader.appendChild(timeLogo);
      cardInfoHeader.appendChild(cardHeaderTime);

      cardInfo.appendChild(cardInfoDetails);
      cardInfoDetails.appendChild(cardDetailsIngr);
      cardInfoDetails.appendChild(cardDetailsDesc);


      for (const ingredient of ingredients) {
        const span = document.createElement('span');
        span.setAttribute('class', 'ingredients');

        if (ingredient.unit) {
          span.textContent = ingredient.ingredient + ": " + ingredient.quantity + " " + ingredient.unit;
        } else if (ingredient.quantity) {
          span.textContent = ingredient.ingredient + ": " + ingredient.quantity;
        } else {
          span.textContent = ingredient.ingredient;
        }

        cardDetailsIngr.appendChild(span);
      }
  
      return (card);
    }
    return { id, name, ingredients, description, time, getCardDOM };
  }