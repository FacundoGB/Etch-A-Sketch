const CONTAINER = document.querySelector(".container");
const BUTTONS = document.querySelector(".buttons");
const CANVAS = document.querySelector('.canvas');

let pixel = "";
let gridSize = 50;

const DRAW_GRID = (gridSize) => {

    for (let i = 0; i < gridSize ** 2; i++) {
        pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = 'white'; //initial color of each pixel drawn in the screen
        CANVAS.appendChild(pixel); //add each pixel div to the screen
    }

    CANVAS.style.gridTemplateColumns = 'repeat(${screenSize}, auto)'; //set number of columns in css
    CANVAS.style.gridTemplateRows = 'repeat(${screenSize}, auto)'; //set number of rows in css
}

DRAW_GRID(gridSize);


const CLEAR = (request) => {
    if(request === 'resize') {
        gridSize = prompt("enter a new pixel density of not more than 100", 50);
        if(gridSize > 100 || gridSize === null) {
            alert('input beyond accepted parameters or null');
            gridSize = 100;
        }
    }
    CANVAS.innerHTML = ''; //delete all divs 
    DRAW_GRID(gridSize) //creates grid with new density
}

let currentMode = 'black';
BUTTONS.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === 'resize' || button.id === 'clear') {
            CLEAR(button.id);
        }else {
            currentMode = button.id;
            CLEAR(button.id);
        }
    })
})