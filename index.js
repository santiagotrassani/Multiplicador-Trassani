// CARRITO DE COMPRA DE FACULTAD

// Cambio el diseño del proyecto usando bootstrap, agregando una appi con mi array de objetos, tambien desde youtube vi el uso de template y fragment para no usar createElement y crear tantas cosas.

Swal.fire('Bienvenido, para ver el contenido de la pagina, debe aceptar nuestras cookies')

document.addEventListener(`DOMContentLoaded`,() => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch(`appi.json`)
        const data = await res.json()
        //console.log(data)
        pintarProductos(data)
        detectarBotones(data)
    }catch (error) {
        console.log(error)
    }
}

const contenedorProductos = document.querySelector(`#contenedor-productos`)
const pintarProductos = (data) => {
    const template = document.querySelector(`#template-productos`).content
    const fragment = new DocumentFragment()
    console.log(template)
    data.forEach(producto => {
        console.log(producto)
        template.querySelector(`img`).setAttribute(`src`, producto.librobiologia ) // arrglar el problema de imagenes
        template.querySelector(`h5`).textContent = producto.nombre
        template.querySelector(`span`).textContent = producto.precio
        template.querySelector(`button`).dataset.id = producto.id

        const clonacion = template.cloneNode(true)
        fragment.appendChild(clonacion)
    })
    contenedorProductos.appendChild(fragment)
}

// no utilice un array para probar nuevos metodos para hacer el carrito
let carrito = {}

const detectarBotones = (data) => {
    const botones = document.querySelectorAll(`.card button`)

    botones.forEach(btn => {
        btn.addEventListener(`click`, () => {
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            if(carrito.hasOwnProperty(producto.id)) {
                producto.cantidad = carrito[producto.id].cantidad + 1
            }
            carrito[producto.id] = {...producto}
            console.log(`carrito`, carrito)
            productosEnCarrito()
        })
    })
}

const items = document.querySelector(`#items`)

const productosEnCarrito = () => {

    items.innerHTML= ``

    const template = document.querySelector(`#template-carrito`).content
    const fragment = document.createDocumentFragment()
    Object.values(carrito).forEach(producto => {
        //console.log(`producto`,producto)
        template.querySelector(`th`).textContent = producto.id
        template.querySelectorAll(`td`)[0].textContent = producto.nombre
        template.querySelectorAll(`td`)[1].textContent = producto.cantidad
        template.querySelector(`span`).textContent = producto.precio * producto.cantidad

        //botones
        template.querySelector(`.btn-info`).dataset.id = producto.id
        template.querySelector(`.btn-danger`).dataset.id = producto.id

        const clon = template.cloneNode(true)
        fragment.appendChild(clon)

    })

    items.appendChild(fragment)

    productosFooter()
    accionBotones()
}

const footer = document.querySelector(`#footer-carrito`)
const productosFooter = () => {
    footer.innerHTML = ``

    const template = document.querySelector(`#template-footer`).content
    const fragment = document.createDocumentFragment()

    const numCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const numPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    

    template.querySelectorAll(`td`)[0].textContent = numCantidad
    template.querySelector(`span`).textContent = numPrecio

    const clon = template.cloneNode(true)
    fragment.appendChild(clon)

    footer.appendChild(fragment)

    const boton = document.querySelector(`#vaciar-carrito`)
    boton.addEventListener(`click`, () => {
        carrito = {}
        productosEnCarrito()
    })
}

const accionBotones = () => {
    const botonesAgregar = document.querySelectorAll(`#items .btn-info`)
    const botonesEliminar = document.querySelectorAll(`#items .btn-danger`)

    botonesAgregar.forEach(btn => {
        btn.addEventListener(`click`, () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad ++
            carrito[btn.dataset.id] = {...producto}
            productosEnCarrito()

        })
    })

    botonesEliminar.forEach(btn => {
        btn.addEventListener(`click`, () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad --
            if(producto.cantidad === 0) {
                delete carrito[btn.dataset.id]
            }else {
                carrito[btn.dataset.id] = {...producto}
                
            }
            productosEnCarrito()
        })
    })
}