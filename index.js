/*agregar animaciones*/

const bobEsponja = document.querySelector(".avatar");
const atacar = document.querySelector(".trampas");
const atacarup = document.querySelector(".trampas-2");
const starGame = document.querySelector("#btn_play");
const saltar = document.querySelector("#saltar");
const star = document.querySelector("#star");

mostrarAnimacion();
comenzarJuego();

function mostrarAnimacion(){
    saltar.addEventListener("click", ()=> {
        bobEsponja.classList.add("saltar"),
        bobEsponja.addEventListener("animationend", ()=> {
            bobEsponja.classList.remove("saltar");
        });
    });
}

function comenzarJuego() {
    star.addEventListener("click", ()=> {
        atacar.classList.add("atacar"),
        atacar.addEventListener("animationend", ()=> {
            atacar.classList.remove("atacar"),
            atacarup.classList.add("atacar");
        });
    });
}


