const listItems = document.querySelectorAll("li");

function removeActive(element) {
  element.target.classList.remove("active");
}

function mouseOverMe(element) {
  console.log(element);
  element.target.classList.add("active");
}

listItems.forEach(li => {
  li.addEventListener("mouseover", mouseOverMe);
});

listItems.forEach(li => {
  li.addEventListener("mouseout", removeActive);
});
