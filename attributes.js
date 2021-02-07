const a = document.getElementById("link");

const text = document.createTextNode("Click Me!");

a.appendChild(text);

a.setAttribute("href", "https://www.repubblica.it");

a.setAttribute("target", "_blank");

function handleClick(event){
   //console.log("cliccato!");
   a.style.color = "red";
   //a.classList.add("red");
}

a.addEventListener("click", handleClick);