document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("ul li");

  let selectedItem = document.querySelector(".nav-item");

  selectedItem.classList.add("active");

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
    
      if (selectedItem !== null) {
        selectedItem.classList.remove("active");
        selectedItem.style.zIndex = ""; // Remover z-index da li anteriormente selecionada

      }
      selectedItem = item;
      selectedItem.classList.add("active");
      selectedItem.style.zIndex = "1"; // Atribuir z-index à li selecionada
      listItems.forEach((li) => {
        if (li !== selectedItem) {
          li.classList.remove("active");
          li.style.zIndex = ""; // Remover z-index das outras li's
        }
      });
    });
  });
});
