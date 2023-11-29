"use strict"
console.log("aca");
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('comprar').addEventListener('click', function(event) {
  const button = this;
  console.log(this);
  const circleContainer = button.parentElement.querySelector('.circle-container');
  const circle = document.createElement('div');
  circle.classList.add('circle');
console.log("entre al clik");
  const buttonRect = button.getBoundingClientRect();
  const x = event.clientX - buttonRect.left;
  const y = event.clientY - buttonRect.top;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';

  circleContainer.appendChild(circle);

  // Forzar una nueva lectura del estilo para activar la animación
  circle.offsetWidth; 

  circle.style.transform = 'translate(-50%, -50%) scale(2)';

  circle.addEventListener('transitionend', function() {
    this.remove();
  });
});
});