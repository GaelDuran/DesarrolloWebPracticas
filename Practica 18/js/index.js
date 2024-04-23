let a = 10;
let b = 20;
let sumar = a + b;
console.log(sumar);
let resta = a - b;
console.log(resta);
let multiplicar = a * b;
console.log(multiplicar);
let dividir = a / b;
console.log(dividir);
let modulo = a % b;
console.log("El residuo de a%b es:", modulo);

let mayor = a > b;
console.log("a es mayor que b:", mayor);

let menor = a < b;
console.log("a es menor que b:", menor);

let mayorIgual = a >= b;
console.log("a es mayor o igual que b:", mayorIgual);

let menorIgual = a <= b;
console.log("a es menor o igual que b:", menorIgual);

let igual = a == b;
console.log("a es igual que b:", igual);

a = -50;
b = 10*(-1);

if(a != b){
    console.log("a es diferente de b");
}else{
    console.log("a es igual a b");
}

// Operadir ternario

let comparacion = a > b ? "a es mayor que b" : "a es menor o igual que b";
console.log(comparacion);

let x = 100;
let y = 200;

function multiplicarNumeros(x, y){
    return x * y;
}

let resultado = multiplicarNumeros(x, y);
console.log("El resultado de la multiplicacion es;", resultado);

function calcularAreaCirculo (radio) {
    //const PI = 3.1416;
    //let area = PI * (radio **2);
    let area = Math.PI * Math.pow(radio,);
    return area;
}

console.log("Area del circulo",calcularAreaCirculo(10));

function toCelsius(farenheit){
    return (5/9) * (farenheit - 32);
}

let temp = toCelsius(77);
console.log("Temperatura:" + temp);

let edad2 = (edad) => {
    return edad * 2;
}

console.log("La edad multiplicada x2:", edad2(20));

let hello = () => {
    return "Hello World! con funcion flecha";
}

console.log(hello());