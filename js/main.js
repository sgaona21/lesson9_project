/*
Steven Gaona STE2342585
Date: 3/17/25
*/

// Event 1: Click Event:
const event1 = document.getElementById("event1");
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightgray";
}
event1.addEventListener("click", changeBackgroundColor);

//Event 2: Double click
const event2 = document.getElementById("event2");
function addBorder() {
    document.body.style.border = "10px solid red";
}
event2.addEventListener("dblclick", addBorder);

//Event 3: Mouseover
const event3 = document.getElementById("event3");
function expandButton() {
    event3.style.fontSize = "2rem";
}
event3.addEventListener("mouseover", expandButton);

//Event 4: Keyup 
const event4 = document.getElementById("event4");
function disappear() {
    if (event4.value == "disappear") {
    event4.style.display = "none";
    };
}
event4.addEventListener("keyup", disappear);

//Event 5: Input 
const event5 = document.getElementById("event5");
function typeName() {
   let nameType = document.getElementById("p5");
   nameType.innerText = event5.value;
}
event5.addEventListener("input", typeName);

//Event 6: Copy  
const event6 = document.getElementById("event6");
function copyMe() {
   let copyconfirmation = document.getElementById("p6")
   copyconfirmation.innerText = "COPIED!";
   copyconfirmation.style.color = "green";
}
event6.addEventListener("copy", copyMe);

//Event 7: Keydown  
const event7 = document.getElementById("event7");
function keydownEvent() {
   event7.style.width = "75px";
   event7.style.height = "75px"
   event7.style.borderRadius = "50%"
   event7.style.backgroundColor = "yellow";
}
event7.addEventListener("keydown", keydownEvent);

//Event 8: Paste  
const event8 = document.getElementById("event8");
function pasteEvent() {
   alert("successfully pasted! way to go!")
}
event8.addEventListener("paste", pasteEvent);

//Event 9: Cut  
const event9 = document.getElementById("event9");
function cutEvent() {
    let p9 = document.getElementById("p9")
   p9.innerText = "LOL you cant cut that text";
}
event9.addEventListener("cut", cutEvent);

//Event 10: Mousedown  
const event10 = document.getElementById("event10");
function terminateProgram() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block"
}
event10.addEventListener("mousedown", terminateProgram);



