let menuHam = document.querySelector(".eixoCont");
let menuHam2 = document.querySelector(".eixoSome");
let menuHam1 = document.querySelector(".eixoDir");
let acaoMenu = document.querySelector("div");
let navbarMenu= document.querySelector("nav");

function menuX(){
    menuHam.classList.toggle("movimento");
    menuHam1.classList.toggle("movimentoDois");
    menuHam2.classList.toggle("some");
    navbarMenu.classList.toggle("movContent");
}

acaoMenu.onclick= menuX;