//Create Game Object
const game_instance = new Game(3);



function selectCell(idn) {
    obj = document.getElementById(idn);
    obj.style.background = "red";
}