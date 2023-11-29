"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    var portadaTitulo = document.querySelector(".portadaTitulo");
var spideyNav= document.querySelector(".spidey");

    window.addEventListener("scroll", function () {
        var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        
        if (scrollPos > 90) {
            nav.classList.add("sticky");
            portadaTitulo.classList.add("pequeno");
           
            spideyNav.classList.remove("oculto");
        } else {
            nav.classList.remove("sticky");
            portadaTitulo.classList.remove("pequeno");
            spideyNav.classList.add("oculto");
        }
    });
});