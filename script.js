//Creating initial grid
const container = document.querySelector("#container");

const DEFAULT_GRID_SIZE = 630;
let gridSize = DEFAULT_GRID_SIZE;

let grid = document.createElement("div");
grid.style.cssText = "display: flex; border: solid black";
grid.style.flexDirection = "column";
grid.style.alignSelf = "flex-start";
grid.style.width = "" + gridSize + "px";
grid.style.height = "" + gridSize + "px";
grid.classList.add("grid");
container.appendChild(grid);

createGrid(16);

//RBG randomizer
function getRandomRBG () {
    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`; 
    return rgb;
}

//Button to change value
let button1 = document.querySelector("#button1");
let humanAnswer = 0;
let rbgRandomMode = "off";

button0.addEventListener ("click", () => {
    let tempGridSize = window.prompt("Please Enter Grid Size (300-1200)");
    if (tempGridSize >= 300 && tempGridSize <= 1200) {
        gridSize = tempGridSize;
        grid.remove();
        grid = document.createElement("div");
        grid.style.cssText = "display: flex; border: solid black";
        grid.style.alignSelf = "flex-start";
        grid.style.flexDirection = "column";
        grid.style.width = "" + gridSize + "px";
        grid.style.height = "" + gridSize + "px"
        grid.classList.add("grid");
        container.appendChild(grid);
        if (humanAnswer > 0 && humanAnswer < 101) {
            createGrid(humanAnswer);
        }
        else {
            createGrid(16);
        }
        
    }
    else {
        window.alert("invalid answer");
    }
})

button1.addEventListener ("click", () => {
    let tempHumanAnswer = window.prompt("Please Enter Pixel Amount (1-100)", 16);
    if (tempHumanAnswer > 0 && tempHumanAnswer < 101) {
        humanAnswer = tempHumanAnswer;
        grid.remove();
        grid = document.createElement("div");
        grid.style.cssText = "display: flex; border: solid black";
        grid.style.alignSelf = "flex-start";
        grid.style.flexDirection = "column";
        grid.style.width = "" + gridSize + "px";
        grid.style.height = "" + gridSize + "px"
        grid.classList.add("grid");
        container.appendChild(grid);
        createGrid(humanAnswer);
    }
    else {
        window.alert("invalid answer");
    }
})

button2.addEventListener ("click", () => {
    if (rbgRandomMode == "off") {
        rbgRandomMode = "on";
        button2.style.cssText = "background-color: #1CB0F6"
        return;
    }
    else {
        rbgRandomMode = "off";
        button2.style.cssText = "background-color: white"
        return;
    }
})

button3.addEventListener ("click", () => {
    grid.remove();
    grid = document.createElement("div");
    grid.style.cssText = "display: flex; border: solid black";
    grid.style.alignSelf = "flex-start";
    grid.style.flexDirection = "column";
    grid.style.width = "" + gridSize + "px";
    grid.style.height = "" + gridSize + "px"
    grid.classList.add("grid");
    container.appendChild(grid);
    if (humanAnswer > 0 && humanAnswer < 101) {
        createGrid(humanAnswer);
    }
    else {
        createGrid(16);
    }
})

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridRow.style.cssText  = "display: flex; flex-grow: 1";
        grid.appendChild(gridRow);
        for (let j = 0; j < size; j++) {
            let gridSquares = document.createElement("div");
            gridSquares.classList.add("squares");
            gridSquares.style.cssText = "display: flex; flex-grow: 1";
            gridRow.appendChild(gridSquares);
            gridSquares.addEventListener ("mouseover", () => {
                if (rbgRandomMode == "off") {
                    event.target.style.backgroundColor = "black"
                }
                else if (rbgRandomMode == "on") {
                    event.target.style.backgroundColor = getRandomRBG();
                }
            })
        }
    }
}



