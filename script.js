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
    }
}

for (let boxs of box) {
    boxs.onclick = play;
}
