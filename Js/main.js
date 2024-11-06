let fruits = ["Apple","Bananna","Cherry"];
console.log(fruits)



console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Jazz Singh";
document.querySelector('nav ul li').setAttribute("class", "currentPage");
//document
//document.querySelector("nav ul li a")
//.setAttribute("href", "https://www.google.co.uk/")

//Explaination:
// get all elements with class 'colPicker' from current page. returns as an Array [] also called a nodeList
let colourButtons = document.querySelectorAll('.colPicker');

// For Each element 'button' in the Array 'colourButtons' add an event listener to the 'button' 
colourButtons.forEach(button=>{
    
    // Add an on 'click' event listener to the selected button which passes the Event Object 'ev' to the anonomouse function
    button.addEventListener("click", (ev) => {
        // console.log(ev)
        // console.log(ev.target)
        // console.log(ev.target.textContent)
        // console.log(ev.target.textContent.toLowerCase())
        // console.log(`\n\n\nCLASS: ${ev.target.textContent.toLowerCase()}Back`)

        // sets the class of the background to the colour box clicked. 
        //  `${ev.target.textContent.toLowerCase()}Back` <- Template Literal. a method to insert dynamic values into a variable or element
        document.body.setAttribute("class",`${ev.target.textContent.toLowerCase()}Back`);
    })
})

//Explanation: ends, dark blue is declared variable (not used), light it is, yellow method


// for(let i=0; i<colourButtons.length; i++){
//     colourButtons[i].addEventListener("click", changeColour);
// }

// function changeColour(){
//     console.info(ev.target.classList[0]);
//     let colourClass = ev.target.classList[0] + "Back";
//     document.body.setAttribute("class", colourClass);
// }

// document.getElementById("myTestBtn").addEventListener("click", function() { ("Hi I was clicked"); });

// let redBtn = document.querySelector(".red"); 
// redBtn.addEventListener("click", function() {
//     document.body.setAttribute("class","redBack");
// })

// let greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "greenBack");

// })

// let blueBtn = document.querySelector(".blue");
// blueBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "blueBack");

// })

// The colour is based of a class in html, there can be multiple classes, so because in html
// it says "green colPicker" with a space, its a seperate class so, .green would work

// let defaultBtn = document.querySelector(".reset");
// defaultBtn.addEventListener("click", function() {
//     document.body.removeAttribute("class");

// })

