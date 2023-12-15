// querySelector

const heading = document.querySelector('.header__texto h2'); // 0 a 1 Elemento
heading.textContent = 'Nuevo heading';
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a'); // 0 a n Elementos
enlaces[0].textContent = 'Nuevo Enlace'
console.log(enlaces);

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);