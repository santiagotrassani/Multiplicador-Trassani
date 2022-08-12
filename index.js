
let numero = parseInt(prompt("Ingrese un numero del 1 a 12: "));
let multiplicacion

console.log("Tabla de multiplicar:" + "\n" + "==========================")
for(let i = 1; i <= 10 ; i++) {
    multiplicacion = numero * i
    console.log(numero + "X" + i + "=" + multiplicacion )
};