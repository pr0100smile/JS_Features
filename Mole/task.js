let beatMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

(function click() {
    for(let i = 1; i < 10; i++) {
        let hole = document.getElementById(`hole${i}`);
        hole.onclick = function() {
            let check = hole.className.includes("hole_has-mole");
            if (check === true) {
                beatMole.textContent = parseInt(beatMole.textContent) + 1;
            } else {
                lostMole.textContent = parseInt(lostMole.textContent) + 1;
            }
            
            if (lostMole.textContent == 5) {
                alert("Ты проиграл! Игра окончена!");
                restart();
            } else if (beatMole.textContent == 10) {
                alert("Ты победил!");
                restart();
            }
        }
    }
})();

function restart() {
    lostMole.textContent = 0;
    beatMole.textContent = 0;
}