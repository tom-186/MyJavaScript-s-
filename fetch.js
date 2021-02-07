fetch("https://api.valentinog.com/api/link/").then(function(response){
    return response.json();
}).then(function(json){
    console.log(json);
})