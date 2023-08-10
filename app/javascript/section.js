 // Obtenha todos os elementos <li> dentro da <ul>
 var liItems = document.querySelectorAll('ul li');

 // Adicione um manipulador de eventos de clique para cada <li>
 liItems.forEach(function(li) {
   li.addEventListener('click', function() {
     // Remova a classe 'active' de todos os elementos <li>
     liItems.forEach(function(li) {
       li.classList.remove('activa');
     });

     // Adicione a classe 'active' apenas ao elemento <li> clicado
     li.classList.add('activa');

     // Obtenha o link <a> correspondente
     var link = li.querySelector('a');

     // Ative o link
     link.click();
   });
 });
