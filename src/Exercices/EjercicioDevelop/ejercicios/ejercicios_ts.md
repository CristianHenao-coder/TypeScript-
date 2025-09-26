# Ejercicios en TypeScript

Aquí tienes tres ejercicios prácticos en TypeScript para trabajar con
condicionales, bucles y métodos de arrays.

------------------------------------------------------------------------

## 1. Ejercicio FizzBuzz en TypeScript

**Enunciado:**\
Crea una función en TypeScript que recorra los números del 1 al 50.

-   Si el número es divisible por 3, imprime `"Fizz"`.\
-   Si el número es divisible por 5, imprime `"Buzz"`.\
-   Si es divisible por ambos, imprime `"FizzBuzz"`.\
-   En caso contrario, imprime el número.

**Tip extra:** tipa el parámetro de entrada como `number` y asegúrate de
que la función no retorne nada (`void`).

------------------------------------------------------------------------

## 2. Ejercicio usando `forEach`

**Enunciado:**\
Dado el siguiente arreglo de nombres en TypeScript:

``` ts
const names: string[] = ["Ana", "Luis", "Carlos", "María"];
```

Crea una función que recorra el arreglo usando **`forEach`** e imprima
en consola un mensaje personalizado para cada nombre, por ejemplo:

    Hola Ana, bienvenido/a al sistema.

**Tip extra:** tipa correctamente el arreglo y el parámetro de la
función que recibe cada nombre.

------------------------------------------------------------------------

## 3. Ejercicio de filtrado en TypeScript

**Enunciado:**\
Tienes un arreglo de objetos que representan estudiantes con su nombre y
su nota:

``` ts
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
```

Crea una función que use el método **`filter`** para obtener solo los
estudiantes que aprobaron (nota mayor o igual a 60) y retorne un nuevo
arreglo con esos estudiantes.

------------------------------------------------------------------------
