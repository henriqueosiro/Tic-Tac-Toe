let click = 0;
let box = document.querySelectorAll("h1");

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
    if ((box[0].innerText != "" && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) ||
        (box[3].innerText != "" && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) ||
        (box[6].innerText != "" && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) ||
        (box[0].innerText != "" && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) ||
        (box[1].innerText != "" && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) ||
        (box[2].innerText != "" && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) ||
        (box[0].innerText != "" && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) ||
        (box[2].innerText != "" && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText)) {
        alert("Parabéns, você ganhou!");
    } else if (click == 9) {
        alert("O jogo terminou empatado!")
    } else {
        console.log("O jogo ainda não acabou!")
    }
}

for (let boxs of box) {
    boxs.onclick = play;
}
