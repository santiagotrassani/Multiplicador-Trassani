// CARRITO DE COMPRA DE FACULTAD

// Cambie a un carrito de compra de facultad porque se me complicaba mucho con el anterior codigo

let stockLibros = [
    {id: 1, nombre: "Libro Biologia", cantidad: 1, precio: 1200, img: "./img/librobiologia.jpg"},
    {id: 2, nombre: "Libro Quimica", cantidad: 1, precio: 1350, img: "./img/Libroquimica.jpg"},
    {id: 3, nombre: "Libro Anatomia", cantidad: 1, precio: 1150, img: "./img/libroanatomia.jpg"},
    {id: 4, nombre: "Libro Fisica", cantidad: 1, precio: 1080, img: "./img/librofisica.jpg"}
]

let carrito = []

const contenedorProductos = document.getElementById("contenedorProductos")

const contenedorCarrito = document.getElementById(`carritoContenedor`)

const botonVaciar = document.getElementById(`vaciarCarrito`)

const contadorCarrito= document.getElementById(`contadorCarrito`)

const precioTotal = document.getElementById(`precioTotal`)

document.addEventListener(`DomContentLoaded`, () => {
    if (localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))
        actualizarCarrito()
    }

})


botonVaciar.addEventListener(`click`,() => {
    carrito.length = 0 
    actualizarCarrito()
})

stockLibros.forEach((producto) => {
    let div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}}</h3>
    <p class = "precioProducto"> Precio: ${producto.precio}</p>
    <button id="agregar${producto.id}" class= "botonAgregar">Agregar <i class= fas-fa-shopping-cart></i></button>
    `
    contenedorProductos.appendChild(div)

    let boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener(`click`, () => {
        agregarAlCarrito(producto.id)
    })
})

let agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    }else {


    let item = stockLibros.find((prod) => prod.id === prodId)
    carrito.push(item)
    
    console.log(carrito)
}
actualizarCarrito()
}


eliminarCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.if === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class = "botonEliminar"><i class = "fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}