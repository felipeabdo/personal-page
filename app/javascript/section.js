// document.addEventListener("DOMContentLoaded", () => {
//   const listItems = document.querySelectorAll("ul li");
//   const pageContent = document.getElementById("page-content");

//   listItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.preventDefault();
//       const section = item.dataset.section;
//       loadPage(section);
//     });
//   });

//   function loadPage(section) {
//     const url = `/pages/${section}`;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         pageContent.innerHTML = html;
//       })
//       .catch((error) => console.error("Error:", error));
//   }
// });
