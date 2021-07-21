// SNACK 1

// Inserisci un numero,

// var numero = parseInt(prompt("inserisci un numero"));

// se è pari stampa il numero,

// if (numero % 2 == 0) {
//   console.log(numero);

// se è dispari stampa il numero successivo

// } else {
//   console.log(numero + 1);
// }  

// SNACK 2

// Generatore di “nomi cognomi” casuali:
// prendendo una lista di nomi e una lista di cognomi,

// var names = ["Jim" , "Ted", "Ross", "Phil"]
//
// var surnames = ["Halpert" , "Mosby", "Geller", "Dunphy"]
//
// // Gatsby vuole generare una falsa lista di invitati.
//
//
//
// for (var i = 0; i < 4; i++) {
//   var guests = Math.floor(Math.random() * names.length);
//   var guests_2 = Math.floor(Math.random() * surnames.length);
//   console.log(names[guests] + " " + surnames[guests_2] );
//
// }


// SNACK 3

// Crea un array di numeri interi

// var array = [1, 2, 3, 4, 5];
// 
// var somma = 0;
// 
// for (var i = 0; i < array.length; i++) {
// 
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//     // e fai la somma di tutti gli elementi che sono in posizione dispari
//     somma = somma + array[i];
//     console.log(somma);
//   }
// 
// }

//..... Snack facoltativo.......

// // Crea due array che hanno un numero di elementi diversi

// var array_1 = ["a", "b", "c", "d"];

// var array_2 = ["x", "y", "z"];

//  // Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro


// var i = 0;


// while (array_1.length != array_2.length) {
    
//     if (array_1.length < array_2.length ) {
//         array_1.push(array_1[i]);
//     }
//     else if (array_2.length < array_1.length ) {
//         array_2.push(array_2[i]);
//     }
// }

// console.log(array_1, array_2);
