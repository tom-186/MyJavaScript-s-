const willError = "http://httpstat.us/400";
const willNotError = "https://api.va......";

function json(data){
    return JSON.parse(data)
}

function fetchData() {
    fetch(willError)
    .then((response) => {
        // console.log(response);
        // if(response.status > 400) throw Error
        if(!response.ok) throw Error(response.statusText);
        console.log(response);
        return response.json()
     })
    .then((json) => console.log(json))
    .catch((error)=> console.log(error.message))
    .finally(()=> console.log("Messaggio finale"))
}

const myButton = document.querySelector("button");
myButton.addEventListener("click", fetchData)