
const lampImg = document.getElementById("image");
const bton = document.getElementById("btn");
let acceso = false;

bton.addEventListener("click", function () {

    if (acceso) {
        acceso = false;
        lampImg.src = "./img/white_lamp1.png"
        bton.innerText = "Accendi luce"

    } else {
        lampImg.src = "./img/yellow_lamp1.png"
        acceso = true;
        bton.innerText = "Spegni luce"

    }


})

console.log(lampImg)