let carrito = []; // Arreglo para almacenar los productos en el carrito

window.addEventListener('keydown', (e) => {
    if (e.key === "+") {
        incremento(); // Llama a la funcion incremento() si se presiona la tecla "+"
    } else if (e.key === "-") {
        decremento(); // Llama a la funcion decremento() si se presiona la tecla "-"
    }
});

const valor = document.getElementById("valor"); // Obtiene el elemento con el id "valor" del documento HTML

function actualizarValor() {
    let productosHTML = ""; // String para almacenar la presentacion de los productos

    let total = 0; // Variable para almacenar el valor total de los productos en el carrito
    carrito.forEach((producto) => {
        total += producto.valor * producto.cantidad; // Calcula el valor total sumando el valor del producto multiplicado por la cantidad
        productosHTML += `<p>${producto.nombre} x${producto.cantidad}: ${producto.valor * producto.cantidad} </p>`; // Agrega la presentacion de cada producto al string productosHTML
    });

    valor.innerHTML = `<div>${productosHTML}</div><p>Total: ${total}</p>`; // Muestra la cantidad y el total de cada producto en el documento HTML
}

function incremento() {
    const producto1 = { nombre: "El Coronel No Tiene Quien Le Escriba", valor: 200000, cantidad: 1 }; // Producto 1
    const producto2 = { nombre: "100 Años De Soledad", valor: 600000, cantidad: 1 }; // Producto 2

    const indexProducto1 = carrito.findIndex((p) => p.nombre === producto1.nombre); // Busca si el producto1 ya esta en el carrito
    const indexProducto2 = carrito.findIndex((p) => p.nombre === producto2.nombre); // Busca si el producto2 ya esta en el carrito

    if (indexProducto1 !== -1) { // Si el producto1 ya esta en el carrito
        carrito[indexProducto1].cantidad++; // Incrementa la cantidad del producto1 en el carrito
    } else {
        carrito.push(producto1); // Agrega el producto1 al carrito
    }

    if (indexProducto2 !== -1) { // Si el producto2 ya está en el carrito
        carrito[indexProducto2].cantidad++; // Incrementa la cantidad del producto2 en el carrito
    } else {
        carrito.push(producto2); // Agrega el producto2 al carrito
    }

    actualizarValor(); // Actualiza y muestra la cantidad y el valor total de los productos en el carrito
}

function decremento() {
    if (carrito.length > 0) { // Si hay productos en el carrito
        const ultimoProducto = carrito[carrito.length - 1]; // Obtiene el ultimo producto agregado al carrito

        if (ultimoProducto.cantidad > 1) { // Si la cantidad del ultimo producto es mayor a 1
            ultimoProducto.cantidad--; // Decrementa la cantidad del último producto en el carrito
        } else {
            carrito.pop(); // Quita el ultimo producto del carrito
        }

        actualizarValor(); // Actualiza y muestra la cantidad y el valor total de los productos en el carrito
    }
}

function resetear() {
    carrito = []; // Limpia el carrito

    actualizarValor(); // Actualiza y muestra la cantidad y el valor total de los productos en el carrito
}
