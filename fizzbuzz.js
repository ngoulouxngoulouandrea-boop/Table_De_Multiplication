// Boucle de 1 à 100
for (let i = 1; i <= 100; i++) {

    // Si le nombre est multiple de 3 et de 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    // Si le nombre est multiple de 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    // Si le nombre est multiple de 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    // Sinon afficher le nombre
    else {
        console.log(i);
    }
}