const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const sun = document.querySelector('.sun');
const game = document.querySelector('.game');


let countH1 = document.getElementById('count');

let count = 0;


document.addEventListener("keydown", function (event){
    cactus.classList.add("cactusMove");
    jump();
})

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 300)
}

let cactusRight

let isAlive = setInterval(function () {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"))
    cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"))

    if (cactusRight > 540 && cactusRight < 600 && dinoBottom < 50) {
        alert("game over");
        cactus.classList.remove("cactusMove");
        count = 0;
        sun.classList.remove("sunAnim");
    }
}, 10) 

setInterval( () => {
    if (cactus.classList.contains('cactusMove')) {
        count++;
        countH1.innerHTML = count;
        if (count > 5) {
            document.getElementsByClassName('cactusMove')[0].style.animationDuration = "2s";
        }
        if (count < 5) {
            sun.classList.add("sunAnim")
        }
        if (count > 10) {
            document.getElementsByClassName('cactusMove')[0].style.animationDuration = "1.5s";
        }
        if (count > 20) {
            document.getElementsByClassName('cactusMove')[0].style.animationDuration = "1s";
            sun.setAttribute("src", "img/moon.png");
            document.body.style.backgroundColor = 'black';
            countH1.style.color = 'white';
            game.style.borderColor = 'white'
        }
    }
}, 1000)