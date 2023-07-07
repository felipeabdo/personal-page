// // Função para ocultar todas as partials
// function hideAllPartials() {
//   const partials = document.querySelectorAll('#content-container > div');
//   partials.forEach((partial) => {
//     partial.style.display = 'none';
//   });
// }

// // Função para adicionar classe "active" ao item da navbar clicado
// function setActiveNavItem(navItem) {
//   const navbarItems = document.querySelectorAll('#left ul li.nav-item');
//   navbarItems.forEach((item) => {
//     item.classList.remove('active');
//   });
//   navItem.classList.add('active');
// }

// // Função para exibir a partial correspondente ao item da navbar clicado
// function showPartial(partialId) {
//   const partialToShow = document.getElementById(partialId);
//   partialToShow.style.display = 'block';
// }

// // Event listener para clique nos itens da navbar
// const navbarItems = document.querySelectorAll('#left ul li.nav-item');
// navbarItems.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     const clickedNavItem = event.target.closest('li.nav-item');
//     const partialId = clickedNavItem.classList[1];

//     hideAllPartials();
//     setActiveNavItem(clickedNavItem);
//     showPartial(partialId);
//   });
// });

// // Exibir apenas a primeira partial inicialmente
// const firstPartial = document.querySelector('#content-container > div');
// firstPartial.style.display = 'block';
