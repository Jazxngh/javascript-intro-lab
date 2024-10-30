console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Jazz Singh";
document.querySelector('nav ul li').setAttribute("class", "currentPage");
//document
//document.querySelector("nav ul li a")
//.setAttribute("href", "https://www.google.co.uk/")

let colourButtons = document.querySelectorAll(".colpicker");
console.dir(colourButtons);

for(let i=0; i<colourButtons.length; i++){
    colourButtons[i].addEventListener("click", changeColour);
}

function changeColour(){
    console.info(ev.target.classList[0]);
    let colourClass = ev.target.classList[0] + "Back";
    document.body.setAttribute("class", colourClass);
}

document.getElementById("myTestBtn").addEventListener("click", function() { ("Hi I was clicked"); });

let redBtn = document.querySelector(".red"); 
redBtn.addEventListener("click", function() {
    document.body.setAttribute("class","redBack");
})

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function() {
    document.body.setAttribute("class", "greenBack");

})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function() {
    document.body.setAttribute("class", "blueBack");

})

// The colour is based of a class in html, there can be multiple classes, so because in html
// it says "green colPicker" with a space, its a seperate class so, .green would work

let defaultBtn = document.querySelector(".default");
defaultBtn.addEventListener("click", function() {
    document.body.removeAttribute("class");

})