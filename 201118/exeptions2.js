function sum(num0, num1){
    if (typeof num0 !== "number" | typeof num1!=="number"){
        throw Error("Uno degli input non è un numero")
    }
    return num0 + num1;
}

try {
console.log(sum(7,"gio"));
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("Almeno qui ci sei arrivato")
};