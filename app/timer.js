document.querySelector("#calculate").addEventListener("click", printAge)

function printAge() {
    let userInput = document.querySelector("input").value;
    console.log(userInput);

    // Remove Elements
    let container = document.querySelector(".container");

    let bryan = document.createElement("div");
    let milf = document.createTextNode(userInput)
    bryan.appendChild(milf);
    container.replaceChildren(bryan)
    /*
    document.querySelector(“#something”) returns an ELEMENT with the ID named something

document.querySelector(“.something”) returns an ELEMENT with the CLASS named something
    */
}