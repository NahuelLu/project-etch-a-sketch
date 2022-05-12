"use strict"
function createDivsInside(number){
    const gridContainer = document.querySelector(".grid-container");
    for(let i=0; i < number*number;i++){
        let newDiv= document.createElement("div");
        let sizeSquare=600/number; //Change 600 to divparent's width.
        newDiv.classList.add("square");
        newDiv.style.width=sizeSquare.toString() + "px";
        gridContainer.appendChild(newDiv);
    }
}
createDivsInside(16);
let squares=document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover",putBackgroundColor);
    square.addEventListener("mouseout",removeBackgroundColor);
});
function putBackgroundColor(){
    this.classList.add("changeColor");
}
function removeBackgroundColor(){
    this.classList.remove("changeColor");
}
