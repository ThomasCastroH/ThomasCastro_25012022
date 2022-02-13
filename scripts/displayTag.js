import { filterRecipes, filterRecipeByTags } from "./research.js";
export {createBoxTags, removeTag};

function createBoxTags(category, content) {
  const tagContainer = document.querySelector(".tagContainer");

  const tagBox = document.createElement("div");
  tagBox.classList.add("tag-box")
  tagBox.classList.add(`tag-${category}`);
  tagBox.textContent = content;

  const closeBtn = document.createElement("span")
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = `<i class="far fa-times-circle"></i>`;

  tagContainer.appendChild(tagBox);
  tagBox.appendChild(closeBtn);
}

function removeTag (array, string) {
    
    let filteredTagArray = array.filter( i => {
        return i !== string
    })

    return filteredTagArray
}