"use strict"

let btns=document.querySelectorAll('.btn');
console.log(btns);
for(let i=0; i<btns.length; i++){
  
    btns[i].addEventListener('click', function(e){
        let texto = this.nextElementSibling;
        texto.classList.toggle("visible");
    });
}

