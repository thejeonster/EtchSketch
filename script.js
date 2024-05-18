
// ----- Main Container ----- //

const container = document.createElement("div");
document.body.appendChild(container)

// ----- Creates 16 divs ----- //

function divMaker(x) {
    let i;
    for (i=0; i < x; i++) {
        const divNum = document.createElement("div");
        container.appendChild(divNum);
    } 
} divMaker(16);

