export default function recipeFactory(recipes) {
    const { id, name, ingredients, description, time } = recipes;

    function getCardDOM() {         

      const card = document.createElement('div');
      card.setAttribute('class', 'recipe');
      card.setAttribute('id', id);

      const cardPhoto = document.createElement('div');
      cardPhoto.setAttribute('class', 'recipe-photo');
      cardPhoto.setAttribute('alt', 'Photo de la recette');

      const cardInfo = document.createElement('div');
      cardInfo.setAttribute('class', 'recipe-info');

      const cardInfoHeader = document.createElement('div');
      cardInfoHeader.setAttribute('class', 'recipe-header');

      const cardHeaderTitle = document.createElement('h2');
      cardHeaderTitle.setAttribute('class', 'name');
      cardHeaderTitle.setAttribute('title', 'name');
      cardHeaderTitle.textContent = name;

      const timeLogo = document.createElement('span');
      timeLogo.innerHTML = '<i class="far fa-clock"></i>';

      const cardHeaderTime = document.createElement('span');
      cardHeaderTime.setAttribute('class', 'time');
      cardHeaderTime.textContent = time;

      const cardInfoDetails = document.createElement('div');
      cardInfoDetails.setAttribute('class', 'recipe-details');

      const cardDetailsIngr = document.createElement('div');
      cardDetailsIngr.setAttribute('class', 'ingredient');
      
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
        span.textContent = ingredient;
        cardDetailsIngr.appendChild(span);
      }
  
      return (card);
    }
    return { id, name, ingredients, description, time, getCardDOM };
  }