/**Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos. */


const array1: number[] = [2, 4, 5, 6, 8];
const array2: number[] = [1, 1, -2, -3];

//-----------------MULTIPLICAR -------------------------//

function multiplicarElementos(array: number[]): number[] {
  return array.map(num => num * 2);
}

console.log(multiplicarElementos(array1)); 
console.log(multiplicarElementos(array2)); 

//-----------------SUMAR -------------------------//

function sumarElementos(array: number[]): number[] {
  return array.map(num => num + 2);
}
console.log(sumarElementos(array1)); 
console.log(sumarElementos(array2)); 
