
// Tipos primitivos


let user: string = "alfonsisimo"


// 1.2

interface usuarioPosts {

    id: number,
    name: string,
    edad: number,
    cc: number,
    phone?: number
    // rol: string= "admin" | "editor"| "View",
}


// 2.2

let user2: usuarioPosts = {
    id: 0,
    name: "",
    edad: 0,
    cc: 0
}


// ejercicio typeescribe n 1



export type User = {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);







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

// 1. Ejercicio FizzBuzz en TypeScript

// function recorreme(): void {
//     for (let i: number = 1; i <= 50; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// recorreme();



// 2. Ejercicio usando `forEach`

const names: string[] = ["Ana", "Luis", "Carlos", "María"];

function saludar (): void {
 names.forEach ( n => {
    console.log ('Hola ${n}, bienvenido al sistem block ' )

 })

}


// 3. Ejercicio de filtrado en TypeScript



interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: "Ana", grade: 85 },
  { name: "Luis", grade: 45 },
  { name: "María", grade: 70 },
  { name: "Carlos", grade: 50 }
];

function estudiantesAprobados(students: Student[]){
    const aprobados = students.filter(student => student.grade >= 60);
    console.log("Los estudiantes aprobados fueron: \n", aprobados);
}

estudiantesAprobados(students);