export default function createBoxTags(category, content) {
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

function removeTag() {
    const removeTag = document.querySelectorAll(".tag-box");
        if (removeTag.length) {
            for (let x = 0; x < removeTag.length; x++)
                removeTag[x].addEventListener("click", () => {
                removeTag[x].remove();
        });
    }
}