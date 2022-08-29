// CALCULADOR DE PROMEDIO

// Cambie a un carrito de compra de facultad porque se me complicaba mucho con el anterior codigo

let productos = [
    {nombre: "Biologia", precio: 900},
    {nombre: "Anatomia", precio: 1050},
    {nombre: "Fisica", precio: 1200},
    {nombre: "Quimica", precio: 1200},
];

function multiplicacion(a,b) {
    let resultado = a * b
    return resultado
}

let carrito = []

let seleccion = prompt("Buenas, si desea comprar algun producto comente si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor, vuelva a escribir si o no")
    seleccion = prompt("Ingrese si o no si desea comprar algo")
}

if (seleccion == "si") {
    let todosLosLibros = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert("Lista de libros:\n" + todosLosLibros.join(" - "))
}else if(seleccion == "no") {
    alert("Gracias por su visita, hasta luego.")
}

while(seleccion != "no") {
    let producto = prompt("Agrega el producto deseado al carrito")
    let precio = 0

    if(producto == "Biologia" || producto == "Anatomia" || producto == "Fisica" || producto == "Quimica") {
        if(producto == "Biologia") {
            precio = 900
        }else if(producto == "Anatomia") {
            precio = 1050
        }else if(producto == "Fisica") {
            precio = 1200
        }else if(producto == "Quimica") {
            precio = 1200
        }else {
            break
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion == "no") {
        alert("Gracias por su compra, hasta luego.")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto},\n Unidades: ${carritoFinal.unidades},\n Total a pagar por producto ${multiplicacion(carritoFinal.unidades, carritoFinal.precio )}`)
        })
        break
    }
}

let total = carrito.reduce((acc, libros) => acc + libros.precio * libros.unidades, 0)
console.log(`El total a pagar es: ${total} $`)