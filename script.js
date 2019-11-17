let box = document.querySelectorAll("h1");
let click = 0;
let player1 = "";
let player2 = "";
do {
    player1 = prompt("Digite o nome do(a) primeiro(a) jogador(a):");
} while (player1.length == 0);
do {
    player2 = prompt("Digite o nome do(a) segundo(a) jogador(a):");
} while (player2.length == 0 || player2 == player1);
let point1 = 0;
let point2 = 0;
for (let boxs of box) {
    document.getElementById("player1").innerText = player1;
    document.getElementById("player2").innerText = player2;
    document.getElementById("point1").innerText = point1;
    document.getElementById("point2").innerText = point2;
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
    if (match("X") == true) {
        point1++;
        document.getElementById("point1").innerText = point1;
        setTimeout(function () { alert("O(A) jogador(a) " + player1 + " venceu!") }, 100);
        setTimeout(clear, 100);
    } else if (match("O") == true) {
        point2++;
        document.getElementById("point2").innerText = point2;
        setTimeout(function () { alert("O(A) jogador(a) " + player2 + " venceu!") }, 100);
        setTimeout(clear, 100);
    } else if (click == 9) {
        setTimeout(function () { alert("O jogo terminou empatado!") }, 1000);
        setTimeout(clear, 1000);
    }
}

function clear() {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = "";
    }
    click = 0;
}

function match(letter) {
    if ((box[0].innerText == letter && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) ||
        (box[3].innerText == letter && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) ||
        (box[6].innerText == letter && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) ||
        (box[0].innerText == letter && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) ||
        (box[1].innerText == letter && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) ||
        (box[2].innerText == letter && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) ||
        (box[0].innerText == letter && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) ||
        (box[2].innerText == letter && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText)) {
        return true;
    } else {
        return false;
    }
}