/* Funcion menu */
const menu = document.getElementById('nav-bar');

function toggleMenuBackground() {
  const menuHeight = menu.offsetHeight;

  const headerOutOfView = window.pageYOffset > menuHeight;

  if(headerOutOfView){
    menu.classList.add('newBackground');
  }else {
    menu.classList.remove('newBackground');
  }
}
window.addEventListener('scroll', toggleMenuBackground);







/* Funcion Boton browser */
const buttons = document.querySelectorAll('.boton-browse');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
  });
});

/* Funcion categorias de browser */
function filterCards(category) {
  const cards = document.querySelectorAll('#cards .card');

  cards.forEach(card => {
      card.style.display = 'none'; 
      if (card.classList.contains(category)) {
          card.style.display = 'flex';
      }
  });
}

filterCards('design');







/* Funcion scroll animation */
function processScroll(){
  let section = document.getElementById("work");

  // Obtenemos la altura de la seccion
  let sectionTop = section.offsetTop;
  let sectionHeight = section.offsetHeight;

  // Obtén la posición de scroll actual (distancia desde la parte superior de la página)
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Calcula el porcentaje de la sección que ha sido desplazada
  let scrollBottom = sectionTop + sectionHeight;
  let scrollPercent = ( scrollTop - (sectionTop - 300)) / (sectionHeight - 300) * 100;

  // Verifica que el porcentaje esté entre 0 y 100
  if (scrollPercent < 0) scrollPercent = 0;
  if (scrollPercent > 100) scrollPercent = 100;

  //console.log(scrollTop + ' / ' + sectionTop + ' / ' + sectionHeight + ' / ' + scrollPercent);

  let searchIcon = document.querySelector('.search-icon');
  let bookmarkIcon = document.querySelector('.bookmark-icon');
  let bookIcon = document.querySelector('.book-icon');
  
  let targetSearch = 10;
  let targetBookmark = 50;
  let targetBook = 90;

  if (scrollPercent >= targetSearch) {
    searchIcon.classList.add('active');
  } else {
    searchIcon.classList.remove('active');
  }

  if (scrollPercent >= targetBookmark) {
    bookmarkIcon.classList.add('active');
  } else {
    bookmarkIcon.classList.remove('active');
  }

  if (scrollPercent >= targetBook) {
    bookIcon.classList.add('active');
  } else {
    bookIcon.classList.remove('active');
  }

  // Aplica el porcentaje calculado a la barra de progreso
  document.getElementById("inner-bar").style.setProperty("--scrollAmount", scrollPercent + '%');
}

document.addEventListener('scroll', processScroll);






/* Funcion del acordeon-preguntas frecuntes */
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-button');

  header.addEventListener('click', () => {
    // Si quieres que solo un elemento esté abierto, cierra los demás
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Alterna la clase 'active' en el elemento clicado
    item.classList.toggle('active');
  });
});





/* Funcion del menu para pantallas medianas y pequeñas */
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.ul-menu-toogle');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});


