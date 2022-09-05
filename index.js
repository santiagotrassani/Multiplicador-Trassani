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
    let item = stockLibros.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}