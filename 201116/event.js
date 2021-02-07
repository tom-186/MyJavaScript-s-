/* const thirdElement = document.querySelectorAll("li")[2];
const thirdElement = document.querySelectorAll("li");
console.log(thirdElement);


const baseUrl = "https://jsonplaceholder.typicode.com"
//Promise
const requestConfig = {
    method:"POST",
    body: data,
}

fetch('${baseUrl}/users/').then((response) =>{
    if (!response.ok) throw Error(response.statusText);
    return response.json();
})
.then((json)=>{
    console.log(json);
}); */


const form = document.querySelector("form");
// const form = document.forms[0]

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // RACCOLTA DEGLI INPUT
  const data = new FormData(this);
  console.log(data);
  // INVIO DEI DATI

  const baseUrl = "https://jsonplaceholder.typicode.com";
  // Promise
  // () => {} ARROW FUNCTION
  const requestConfig = {
    method: "POST",
    body: data,
  };

  fetch(`${baseUrl}/users/`, requestConfig) // GET List()
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      // JSON: JavaScript Object Notation
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

// MVC - MONOLITICA
// REST API <-> SINGLE-PAGE APP

/*
GET - 
POST - 
PUT - 
PATCH -
DELETE - 
*/

// CUSTOMER /customers/

// https://jsonplaceholder.typicode.com/users/
// Event default

/*
PROTOCOL/SCHEME
https://localhost:5000 // ORIGIN

// DOMAIN:PORT
localhost:5000/

PATH
index.html

PARAM name="name"
?name=Christian

PARAM name="surname"
&

surname=Shoraj
*/
