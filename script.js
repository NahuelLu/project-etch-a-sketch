function createDivsInside(number){
    for(let i=0; i < number*number;i++){
        let newDiv= document.createElement("div");
        let sizeSquare=600/number; //Change 600 to divparent's width.
        newDiv.classList.add("square");
        newDiv.style.width=sizeSquare.toString() + "px";
        gridContainer.appendChild(newDiv);
    }
    let squares=document.querySelectorAll(".square");
    squares.forEach(square => {
    square.addEventListener("mouseover",putBackgroundColor);
    square.addEventListener("mouseout",removeBackgroundColor);
});
}
function showPromptToUser(){
    let numberOfDivsForSide= prompt("Please put some number:");
    if(numberOfDivsForSide>100){
        alert("Sorry please put some number less to 100");
        showPromptToUser();
    }else{
        gridContainer.replaceChildren();
        createDivsInside(numberOfDivsForSide);
    }
}

function putBackgroundColor(){
    this.classList.add("changeColor");
}
function removeBackgroundColor(){
    this.classList.remove("changeColor");
}
const gridContainer = document.querySelector(".grid-container");
createDivsInside(16);
let button =document.querySelector(".button");
button.addEventListener("click",showPromptToUser);
