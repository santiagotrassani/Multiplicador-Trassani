// CALCULADOR DE PROMEDIO

let notaUno = parseInt(prompt("Ingrese nota de su primer cuatrimestre: "));
let notaDos = parseInt(prompt("Ingrese nota de su segundo cuatrimestre"));
let notaTres = parseInt(prompt("Ingrese nota de su tercer cuatrimestre"));


function promedio(notaUno,notaDos,notaTres) {
    while(notaUno, notaDos, notaTres) {
        if(notaUno > 10 && notaDos > 10 && notaTres > 10) {
            alert("Los numeros de sus notas son demasiados altos, apriete f5 para volver a iniciar")
            break
        }else {
            let suma = notaUno + notaDos + notaTres
            let division = suma / 3
            console.log("Su promedio total es: "+ division)
    
            if(division >= 6) {
                return("Esta aprobado")
            }else {
                return("Esta desaprobado")
            }
        }
        
    }
};

let resultado = promedio(notaUno, notaDos, notaTres);
console.log(resultado);
