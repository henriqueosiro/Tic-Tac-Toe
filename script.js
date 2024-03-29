let box = document.querySelectorAll("h1");
let click = 0;
let color = "";
let m = 0;
let player1 = "";
let player2 = "";
let point1 = 0;
let point2 = 0;
let s = 0;
do {
    player1 = prompt("Digite o nome do(a) primeiro(a) jogador(a):");
} while (player1.length == 0);
do {
    player2 = prompt("Digite o nome do(a) segundo(a) jogador(a):");
} while (player2.length == 0 || player2 == player1);
setInterval(count, 1000);
for (let boxs of box) {
    document.getElementById("player1").innerText = player1;
    document.getElementById("player2").innerText = player2;
    document.getElementById("point1").innerText = point1;
    document.getElementById("point2").innerText = point2;
    boxs.onclick = play;
    boxs.onmouseenter = on;
    boxs.onmouseleave = off;
}

function check() {
    if (match("X", "red") == true) {
        point1++;
        document.getElementById("point1").innerText = point1;
        setTimeout(function () { alert("O(A) jogador(a) " + player1 + " venceu!") }, 500);
        setTimeout(clear, 500);
    } else if (match("O", "blue") == true) {
        point2++;
        document.getElementById("point2").innerText = point2;
        setTimeout(function () { alert("O(A) jogador(a) " + player2 + " venceu!") }, 500);
        setTimeout(clear, 500);
    } else if (click == 9) {
        setTimeout(function () { alert("O jogo terminou empatado!") }, 500);
        setTimeout(clear, 500);
    }
}

function clear() {
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = "";
        box[i].style.backgroundColor = "";
    }
    click = 0;
}

function count() {
    s++;
    if (s == 60) {
        m++;
        s = 0;
    }
    if (s < 10) {
        document.getElementById("sec").innerText = "0" + s;
    } else {
        document.getElementById("sec").innerText = s;
    }
    if (m < 10) {
        document.getElementById("min").innerText = "0" + m;
    } else {
        document.getElementById("min").innerText = m;
    }
}

function match(letter, color) {
    if (box[0].innerText == letter && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) {
        box[0].style.backgroundColor = color;
        box[1].style.backgroundColor = color;
        box[2].style.backgroundColor = color;
        box[0].style.transition = "0.5s";
        box[1].style.transition = "0.5s";
        box[2].style.transition = "0.5s";
        return true;
    } else if (box[3].innerText == letter && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) {
        box[3].style.backgroundColor = color;
        box[4].style.backgroundColor = color;
        box[5].style.backgroundColor = color;
        box[3].style.transition = "0.5s";
        box[4].style.transition = "0.5s";
        box[5].style.transition = "0.5s";
        return true;
    } else if (box[6].innerText == letter && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) {
        box[6].style.backgroundColor = color;
        box[7].style.backgroundColor = color;
        box[8].style.backgroundColor = color;
        box[6].style.transition = "0.5s";
        box[7].style.transition = "0.5s";
        box[8].style.transition = "0.5s";
        return true;
    } else if (box[0].innerText == letter && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) {
        box[0].style.backgroundColor = color;
        box[3].style.backgroundColor = color;
        box[6].style.backgroundColor = color;
        box[0].style.transition = "0.5s";
        box[3].style.transition = "0.5s";
        box[6].style.transition = "0.5s";
        return true;
    } else if (box[1].innerText == letter && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) {
        box[1].style.backgroundColor = color;
        box[4].style.backgroundColor = color;
        box[7].style.backgroundColor = color;
        box[1].style.transition = "0.5s";
        box[4].style.transition = "0.5s";
        box[7].style.transition = "0.5s";
        return true;
    } else if (box[2].innerText == letter && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) {
        box[2].style.backgroundColor = color;
        box[5].style.backgroundColor = color;
        box[8].style.backgroundColor = color;
        box[2].style.transition = "0.5s";
        box[5].style.transition = "0.5s";
        box[8].style.transition = "0.5s";
        return true;
    } else if (box[0].innerText == letter && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) {
        box[0].style.backgroundColor = color;
        box[4].style.backgroundColor = color;
        box[8].style.backgroundColor = color;
        box[0].style.transition = "0.5s";
        box[4].style.transition = "0.5s";
        box[8].style.transition = "0.5s";
        return true;
    } else if (box[2].innerText == letter && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText) {
        box[2].style.backgroundColor = color;
        box[4].style.backgroundColor = color;
        box[6].style.backgroundColor = color;
        box[2].style.transition = "0.5s";
        box[4].style.transition = "0.5s";
        box[6].style.transition = "0.5s";
        return true;
    } else {
        return false;
    }
}

function off(event) {
    if (event.target.innerHTML == "X") {
        event.target.style.color = "";
    } else if (event.target.innerHTML == "O") {
        event.target.style.color = "";
    }
}

function on(event) {
    if (event.target.innerHTML == "X") {
        event.target.style.color = "red";
    } else if (event.target.innerHTML == "O") {
        event.target.style.color = "blue";
    }
}

function play(event) {
    if (event.target.innerHTML == "X" || event.target.innerHTML == "O") {
        alert("ERROR 404");
    } else {
        if (click % 2 == 0) {
            event.target.textContent = "X";
        } else {
            event.target.textContent = "O";
        }
        click++;
        check();
    }
}