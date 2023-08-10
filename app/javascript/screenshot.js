// function renderizarPaginaExterna(url, divId) {
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       var divExterna = document.createElement('div');
//       divExterna.innerHTML = this.responseText;

//       var minhaDiv = document.getElementById(divId);
//       minhaDiv.innerHTML = divExterna.innerHTML;
//     }
//   };

//   xhttp.open('GET', url, true);
//   xhttp.send();
// }
