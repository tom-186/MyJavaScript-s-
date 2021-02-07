const form = document.forms[0];

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const value = event.target[0].value;
    console.log(value);

    const text = document.createTextNode(event.target[0].value);
    
}

document.text


// createElement()
// createTextNode (value)
// document.body.appendChild()
// OPPURE
// element.innerText = value