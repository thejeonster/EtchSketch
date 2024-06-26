

// ----- Main Container ----- //

const container = document.createElement("div");
container.style.width = "800px";
container.style.height = "800px";
container.style.display = "flex";
container.style.flexGrow = "1";
container.style.border = "1px solid black";
document.body.appendChild(container)

// ----- Creates button asking for # of squares per side for new grid ----- // 

const popButton = document.createElement("button");
popButton.classList.add("gridButton");
popButton.textContent = "Click Me";
document.body.appendChild(popButton);

// ----- Click event for popButton ----- // 

const gridSize = document.querySelector('popButton')
popButton.addEventListener("click", () => {
    let gridRequest = parseInt(prompt("Please enter a grid size: "))
    if (gridRequest > 100) {
        alert("Your input has to be less than or equal to 100!");
    } else if (gridRequest < 0) {
        alert("Your input has to be greater than 0!");
    }   divRemover();
        divMaker(gridRequest, gridRequest);
})

// ----- Creates and styles div squares ----- //

function divMaker(x, y) {
    let i;
    let j;
    for (i=0; i < x; i++) {
        const subtainer = document.createElement("div");
        subtainer.classList.add("subtainer");
        subtainer.style.border = "1px solid black";
        subtainer.style.display = "flex";
        subtainer.style.flexGrow = "1";
        subtainer.style.flexDirection = "column";
        for (j=0; j < y; j++) {
            const divNum = document.createElement("div");
            divNum.classList.add("smallSquare")
            //divNum.style.height = "40px";
            //divNum.style.width = "40px";
            divNum.style.border = "1px solid black";
            divNum.style.flexGrow = "1";
            subtainer.appendChild(divNum);
        }   container.appendChild(subtainer);

        // ----- Hover effect for boxes ----- // 

        const squareButtons = document.querySelectorAll(".smallSquare");

        squareButtons.forEach((smallSquare) => {
        smallSquare.addEventListener("mouseover", (event) => {
        smallSquare.style.backgroundColor = `rgb(
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`});
        });
    }
} 

// ----- Removes existing board and replaces with new board when "Click Me" is activated ----- //

function divRemover() {
    const squareRemove = document.querySelectorAll(".subtainer");

    squareRemove.forEach((subtainer) => {
        container.removeChild(subtainer);
    })
}

container.style.display = "flex";
container.style.justifyContent = "center";
