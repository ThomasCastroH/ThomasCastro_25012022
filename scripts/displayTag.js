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

  removeTag();
}

// Permet d'utiliser un seul addEventListener pour tous les tags
[...document.querySelectorAll(".tags")].forEach(function(item) {
  item.addEventListener("click", () => {
    var targetClasses = event.target.classList[0];
    var targetValue = event.target.textContent;
    var targetClass = targetClasses.split('-');
    var category = targetClass[1];

    createBoxTags(category, targetValue);
  })
});

function displayTag(value) {
    const container = document.createElement("span");
    container.setAttribute("class", "tag-box");
    container.textContent = value;
    return container;
}
  
function removeTag() {
    const removeTag = document.querySelectorAll(".tag-box");
        if (removeTag.length) {
            for (let x = 0; x < removeTag.length; x++)
                removeTag[x].addEventListener("click", () => {
                removeTag[x].remove();
        });
    }
}