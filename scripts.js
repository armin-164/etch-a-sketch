const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let gridcontainer = document.createElement("div");
gridcontainer.className = "gridcontainer";
container.appendChild(gridcontainer);

// Creates a container, rows and blocks
function createBlockRows (sideLength) {
    // Declaring allsquares here allows recreating the block with changeBlockNumber()
    let allsquares = document.createElement("div");
    allsquares.className = "squarecontainer";
    allsquares.setAttribute("id", "thesquarecontainer");
    gridcontainer.appendChild(allsquares);

    // This loop will create rows inside the grid
    for (let i = 0; i < sideLength; i++) {
        let rows = document.createElement("div");
        rows.className = "blockrows";
        allsquares.appendChild(rows);
        
        // This nested loop will create squaredivs and put them inside the rows
        // And allow for change of color whilst hovering over blocks
        for (let i = 0; i < sideLength; i++) {
            let blocks = document.createElement("div");
        blocks.className = "squaredivs";
        rows.appendChild(blocks);
        blocks.addEventListener("mouseover", () => {
            blocks.style.background = "purple";
        })
        }
    }
}
createBlockRows(16);

// Creating a button, inserting in HTML and activating function below on click
const button = document.createElement("button");
button.innerText = "Change amount of blocks";
container.insertBefore(button, gridcontainer);
button.addEventListener("click", changeBlockNumber);

// This function will let you choose the amount of blocks you
// want on the sides by first removing thesquarecontainer and calling
// the function that creates the rows and blocks.
function changeBlockNumber() {
    let blocknumber = parseInt(prompt("How many blocks do you want in the grid? Only write a number that should be 100 or less"));

    let integer = (typeof blocknumber === "number") && (blocknumber <= 100);
    let selectAllSquares = document.getElementById("thesquarecontainer");

    if (integer) {
        selectAllSquares.remove();
        createBlockRows(blocknumber);
    }
    
    else {
        alert("Hey! I said 100 or less");
    }
}
