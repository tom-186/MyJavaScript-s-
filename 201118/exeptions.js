function convertName(name){
     if (typeof name !== "string"){
        throw Error("Devi passare una stringa, non un numero");
    } 
    return name.toUpperCase();
}

// TypeError: name.toUpperCase() is not a function
// 1. Personalizzazione dell'errore
// 2. Gestione delle eccezioni

try {
    //HAPPY PATH
    convertName(8);
    convertName("lorenzo");
    
} catch(error){
    // cattura l'errore
console.log(error);
} finally {
    //gira a prescindere del risultato ottenuto
    console.log(convertName("lorenzo"));
console.log("Complimenti, hai superato l'errore")};




