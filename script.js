const button = document.querySelector("button");

function handleClick(event) {
    const h1 = document.querySelector("h1");
    h1.classList.toggle("red");
}

// button.onclick = handleClick;

button.addEventListener("click",handleClick);