const myButton = document.createElement("button");
myButton.innerText = "Clicca qui?";
document.body.appendChild(myButton);

function handleClick() {
  const element = document.createElement("p");
  element.innerText = "Complimenti hai cliccato un bottone";
  document.body.appendChild(element);
}

// GLI ELEMENTI HTML EMETTONO EVENTI
myButton.addEventListener("click", handleClick);