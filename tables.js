// Fonction qui affiche une table
function tableMultiplication(nombre) {

    console.log("--------------------");
    console.log("Table de", nombre);

    // Boucle de 1 à 10
    for (let i = 1; i <= 10; i++) {
        console.log(nombre + " x " + i + " = " + (nombre * i));
    }
}

// Tests
// Afficher les tables de 1 à 9

for (let i = 1; i <= 9; i++) {

    tableMultiplication(i);

}