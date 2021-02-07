/* const name = "Marco";
const age = 34;
const city = "Arezzo";
const occupation = "Software developer";
const married = false;
let children = void 0;  oppure null */

/*const vanessa = { 
name : "Vanessa",
age : 22,
city : "Arezzo",
occupation : "Software developer",
married : false,
children : void 0, 
} */

"use strict";

/* const giovanni = { 
name : "Giovanni",
age : 34,
city : "Arezzo",
occupation : "Software developer",
married : false,
children : void 0, 
};


console.log(giovanni.name); */

var num0 = 5;
var num1 = 9;

/* function sum(){
    return num0 ** num1;
}

console.log(sum());  */

/* const person = {
    name: "Pico",
    age:50,
};

const element = document.getElementById("par");
element.innerText = person.name */ 

/* function selectElement(selector: keyof HTMLElementDeprecatedTagNameMap) {
    //
}

selectElement("body")  */



/* const button = document.querySelector("button");
const me = {
    name: "Vale",
    age: 22,
}

function handleClick(){
    const element = document.createElement("p");
    element.innerText = me.name;
    document.body.appendChild(element);
}

button.addEventListener("click", handleClick); */

 const select = document.querySelector("select");

function appendToPage(event){
    const value = event.target.selectedOptions[0].value;
    //console.log(value);
    const h1Element = document.querySelector("h1");

    if (h1Element) {
        h1Element.remove();
    }
    const element = document.createElement("h1");
    element.innerText = value;
    document.body.appendChild(element);
}

select.addEventListener("change", appendToPage)
 