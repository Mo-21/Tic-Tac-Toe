// To make the "Start Game" button only clickable for one time
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
let _length = _game.length;


function _addingChar(content) { 
    _game.push(content);    
};


function roundsManager(){
    const slots = document.querySelectorAll(".slot");
    slots.forEach(slot => {slot.addEventListener('click', () => {

    // To avoid clicking on already clicked slot
    if(slot.hasAttribute("data-attribute")){
        return;

    } else if(_length <= 9) {
        slot.innerText = "X";
        const content = slot.innerText;
         _addingChar(content);
        _length += 1;
        slot.setAttribute("data-attribute", `${_length}`);
        if(_length < 8) _computerEntry();
        return _winnerDetermination();
}});
})};

function _computerEntry() {
    const slot1 = document.querySelector(".slot1");
    const slot2 = document.querySelector(".slot2");
    const slot3 = document.querySelector(".slot3");
    const slot4 = document.querySelector(".slot4");
    const slot5 = document.querySelector(".slot5");
    const slot6 = document.querySelector(".slot6");
    const slot7 = document.querySelector(".slot7");
    const slot8 = document.querySelector(".slot8");
    const slot9 = document.querySelector(".slot9");

    const randomSlot = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9];
    
    const randomIndex = Math.floor(Math.random() * randomSlot.length);
    const randomlySelectedSlot = randomSlot[randomIndex];

    if(randomlySelectedSlot.hasAttribute("data-attribute")){
        return _computerEntry()

    } else if(_length < 8) {
        randomlySelectedSlot.innerText = "O";
        const content = randomlySelectedSlot.innerText;
        _addingChar(content);
        _length += 1;
        randomlySelectedSlot.setAttribute("data-attribute", `${_length}`);
        
    } else if(_length === 8) {
        return roundsManager();
    };
};

function _winnerDetermination() {
    const slot1 = document.querySelector(".slot1");
    const slot2 = document.querySelector(".slot2");
    const slot3 = document.querySelector(".slot3");
    const slot4 = document.querySelector(".slot4");
    const slot5 = document.querySelector(".slot5");
    const slot6 = document.querySelector(".slot6");
    const slot7 = document.querySelector(".slot7");
    const slot8 = document.querySelector(".slot8");
    const slot9 = document.querySelector(".slot9");
    const winnerScreen = document.querySelector(".winnerScreen");
    const display = document.querySelector(".display");
    const closeButton = document.querySelector(".close");

    if(slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
        const winningChar = slot1.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot4.textContent === slot5.textContent && slot5.textContent === slot6.textContent) {
        const winningChar = slot4.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot7.textContent === slot8.textContent && slot8.textContent === slot9.textContent) {
        const winningChar = slot7.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot1.textContent === slot4.textContent && slot4.textContent === slot7.textContent) {
        const winningChar = slot1.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot2.textContent === slot5.textContent && slot5.textContent === slot8.textContent) {
        const winningChar = slot2.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot3.textContent === slot6.textContent && slot6.textContent === slot9.textContent) {
        const winningChar = slot3.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };
        
    } else if(slot1.textContent === slot5.textContent && slot5.textContent === slot9.textContent) {
        const winningChar = slot1.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(slot3.textContent === slot5.textContent && slot5.textContent === slot7.textContent) {
        const winningChar = slot3.textContent;
        if(winningChar === "X") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Human X wins >> "
            closeButton.addEventListener('click', () => location.reload());
        } else if(winningChar === "O") {
            winnerScreen.style.display = 'flex';
            display.textContent = "The Computer O wins >> "
            closeButton.addEventListener('click', () => location.reload());
        };

    } else if(_length === 9) {
        winnerScreen.style.display = 'flex';
        display.textContent = "TIE! G#$ DAMN >> "
        closeButton.addEventListener('click', () => location.reload());
    }
}

return {
    roundsManager: roundsManager
};

})();

// Constructor for two players
function Players(name, char) {
    this.name = name;
    this.char = char;

    playersInfo = [];
}
