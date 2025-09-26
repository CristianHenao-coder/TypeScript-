// "use strict";
// // Tipos primitivos
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.users = void 0;
// exports.logPerson = logPerson;
// var user = "alfonsisimo";
// // 2.2
// var user2 = {
//     id: 0,
//     name: "",
//     edad: 0,
//     cc: 0
// };
// exports.users = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
// function logPerson(user) {
//     console.log(" - ".concat(user.name, ", ").concat(user.age));
// }
// console.log('Users:');
// exports.users.forEach(logPerson);
// 1. Ejercicio FizzBuzz en TypeScript
// function FizzBuzz(maxNum: number): void {
//     for (let number: number = 1; number <= maxNum; number++) {
//         // Esta condición debe ir primero porque si un número es múltiplo de 3 y 5, este if lo atrapará antes.
//         if (number % 3 === 0 && number % 5 === 0) {
//             console.log("FizzBuzz");
//             // Divisible por 3
//         } else if (number % 3 === 0) {
//             console.log("Fizz");
//             // Divisible por 5
//         } else if (number % 5 === 0) {
//             console.log("Buzz");
//             // Si no es divisible por ninguno, que me muestre solo el número
//         } else {
//             console.log(number);
//         }
//     }
// };
function recorreme() {
    for (var i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
recorreme();
