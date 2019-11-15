let box = document.querySelectorAll("h1");
let click = 0;
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let point1 = 0;
let point2 = 0;
for (let boxs of box) {
    p1.innerText = point1;
    p2.innerText = point2;
    boxs.onclick = play;
}

function play(event) {
    if (event.target.innerHTML == "X" || event.target.innerHTML == "O") {
        alert("ERROR 404");
    } else {
        if (click % 2 == 0) {
            event.target.textContent = "X";
        } else {
            event.target.textContent = "O"
        }
        click++;
        check();
    }
}

function check() {
    if ((box[0].innerText == "X" && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) ||
        (box[3].innerText == "X" && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) ||
        (box[6].innerText == "X" && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) ||
        (box[0].innerText == "X" && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) ||
        (box[1].innerText == "X" && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) ||
        (box[2].innerText == "X" && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) ||
        (box[0].innerText == "X" && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) ||
        (box[2].innerText == "X" && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText)) {
        point1++;
        p1.innerText = point1;
        alert("O jogador X ganhou!");
        clear();
    } else if ((box[0].innerText == "O" && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) ||
        (box[3].innerText == "O" && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) ||
        (box[6].innerText == "O" && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) ||
        (box[0].innerText == "O" && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) ||
        (box[1].innerText == "O" && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) ||
        (box[2].innerText == "O" && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) ||
        (box[0].innerText == "O" && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) ||
        (box[2].innerText == "O" && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText)) {
        point2++;
        p2.innerText = point2;
        alert("O jogador O ganhou!");
        clear();
    } else if (click == 9) {
        alert("O jogo terminou empatado!")
        clear();
    } else {
        console.log("O jogo ainda não acabou!")
    }
}

function clear() {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = "";
    }
    click = 0;
}