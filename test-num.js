function isOdd(num) {
    if (num % 2 === 0) {
        return console.log("fizz");
    }

    console.log("buzz")
}

isOdd(8);

setTimeout(() => isOdd(5), 5000);