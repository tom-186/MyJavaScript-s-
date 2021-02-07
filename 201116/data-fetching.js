// https://jsonplaceholder.typicode.com/posts

const myUrl = "https://jsonplaceholder.typicode.com/users";
const myButton = document.querySelector('button');

// 500 internal server error
function fetchData(){
    fetch(myUrl).then(response=>{
        if (!response.ok) throw Error (response.statusText);
        return response.json();
    }).then((postList)=>{
        const ul = document.createElement('ul');

        const li = document.createElement("li");
        
        for (let index = 0; index < postList.length; index++){
            // OBJECT DESTRUCTURING
            const {name, email} = postList[index];
    const text = document.createTextNode(`${name} - ${email}`); 
         const li = document.createElement("li");
            li.appendChild(text);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);

    });

}

myButton.addEventListener("click", fetchData);

