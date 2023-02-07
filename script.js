
const BUTTONS = document.querySelectorAll("button");
const CANVAS = document.querySelector(".canvas");

let pixel = '';
let gridSize = 50;

const DRAW_GRID = (canvasSize) => {
    for (let i = 0; i < canvasSize ** 2; i++) {
        pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = "white"; //initial color of each pixel drawn in the screen
        CANVAS.appendChild(pixel); //add each pixel div to the screen
    }

    CANVAS.style.gridTemplateColumns = `repeat(${canvasSize}, auto)`; //set number of columns in css
    CANVAS.style.gridTemplateRows = `repeat(${canvasSize}, auto)`; //set number of rows in css
};

DRAW_GRID(gridSize);


const CLEAR = (request) => {
    if(request === 'resize'){
        gridSize = prompt('please enter a new grid size of not more than 100', 50);
      if(gridSize > 100 || gridSize === null){
        gridSize = 100;
    }
    }

    CANVAS.innerHTML = '';
    DRAW_GRID(gridSize);
    ACTIVE();
  }


let currentMode = "black";
BUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "resize" || button.id === "clear") {
            CLEAR(button.id);
        } else {
            currentMode = button.id;
            CLEAR(button.id);
        }
    });
});


const ACTIVE = () => {
    let pixels = document.querySelectorAll(".pixel"); //asign pixels created to variable

    /* Every time the mouse moves over */
    pixels.forEach((pxl) => {
        pxl.addEventListener('mouseover', (e) => {
            //get the current color of pixel hovering over
            let crntClr = getComputedStyle(pxl, null).getPropertyValue(
                "background-color"
            );
            switch (currentMode) {
                case "black":
                    e.target.style.backgroundColor = "rgba(0,0,0)";
            }
        });
    });
}

ACTIVE();
