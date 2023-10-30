/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
 
 // Primera solucion que se me ocurrio
 for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log('fizzbuzz');
     } else if (i % 3 === 0) {
         console.log('fizz');  
     } else if (i % 5 === 0) {
        console.log('buzz'); 
     }
     else {
        console.log(i);   
     }
 }
 
// Busque y vi una con ternario
 for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log('fizzbuzz') : 
    i % 3 === 0 ? console.log('fizz') :
    i % 5 === 0 ? console.log('buzz') :
    console.log(i);   
 }