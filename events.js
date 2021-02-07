const ul = document.querySelector("ul");

ul.addEventListener("click", handleClick);

function handleClick(event) {
    //console.log(this);
    //this.classList.add("red");
    //event.target.classList.add("red");
    event.target.style.color = "red";
}