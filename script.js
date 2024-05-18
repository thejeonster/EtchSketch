
// ----- Main Container ----- //

const container = document.createElement("div");
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
    } 
})

// ----- Creates and styles 16 x 16 divs ----- //

function divMaker(x, y) {
    let i;
    let j;
    for (i=0; i < x; i++) {
        const subtainer = document.createElement("div");
        for (j=0; j < y; j++) {
            const divNum = document.createElement("div");
            divNum.classList.add("smallSquare")
            divNum.style.height = "40px";
            divNum.style.width = "40px";
            divNum.style.border = "1px solid black";
            subtainer.appendChild(divNum);
        }   container.appendChild(subtainer);
    }
} divMaker(16, 16);

container.style.display = "flex";
container.style.justifyContent = "center";

// ----- Hover effect for boxes ----- // 

const squareButtons = document.querySelectorAll(".smallSquare");

squareButtons.forEach((smallSquare) => {
    smallSquare.addEventListener("mouseover", (event) => {
        smallSquare.style.backgroundColor = "green"
    });
});


