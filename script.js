let slotsValue = "";
let clicked = false;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector(".start-game");
    button.addEventListener('click', () => {
        if(!clicked) {
            const human = new Players("Human", "X");
            const computer = new Players("AI", "O");
            playersInfo.push(human, computer);
            gameBoard.roundsManager();
            clicked = true;
        }
        button.id = "clicked";
    });
});

//Game Board Module
const gameBoard = (function() {
'use strict';

const _game = [];

function addingChar() { 
    const slots = document.querySelectorAll(".slot");
    slots.forEach(slot => {slot.addEventListener('click', () => {
    if(slot.innerText === "") {
        slot.innerText = "X";
        _game.push("X");
        console.log(_game);
    } else {
        return;
    };  
}); 
});        
};

function roundsManager(){
    
};

    return {
        addingChar: addingChar,
        roundsManager: roundsManager
    };

})();

// Constructor for two players
function Players(name, char) {
    this.name = name;
    this.char = char;

    playersInfo = [];
}
