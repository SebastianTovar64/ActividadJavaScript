let carrito = [];

window.addEventListener('keydown', (e) => {
    if (e.key === "+") {
        incremento();
    } else if (e.key === "-") {
        decremento();
    }
});

const valor = document.getElementById("valor");

function actualizarValor() {
    // Crear un string para almacenar la presentación de los productos
    let productosHTML = "";

    // Calcular el total y presentar cada producto
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.valor * producto.cantidad;
        productosHTML += `<p>${producto.nombre} x${producto.cantidad}: ${producto.valor * producto.cantidad} </p>`;
    });

    // Mostrar la cantidad y el total de cada producto
    valor.innerHTML = `<div>${productosHTML}</div><p>Total: ${total}</p>`;
}

function incremento() {
    // Buscar si el producto ya está en el carrito
    const producto1 = { nombre: "Hamburguesa", valor: 20000, cantidad: 1 };
    const producto2 = { nombre: "Cotel", valor: 60000, cantidad: 1 };

    const indexProducto1 = carrito.findIndex((p) => p.nombre === producto1.nombre);
    const indexProducto2 = carrito.findIndex((p) => p.nombre === producto2.nombre);

    // Incrementar la cantidad si el producto ya está en el carrito, de lo contrario, agregarlo
    if (indexProducto1 !== -1) {
        carrito[indexProducto1].cantidad++;
    } else {
        carrito.push(producto1);
    }

    if (indexProducto2 !== -1) {
        carrito[indexProducto2].cantidad++;
    } else {
        carrito.push(producto2);
    }

    actualizarValor();
}

function decremento() {
    // Quitar un producto del carrito
    if (carrito.length > 0) {
        const ultimoProducto = carrito[carrito.length - 1];
        if (ultimoProducto.cantidad > 1) {
            ultimoProducto.cantidad--;
        } else {
            carrito.pop();
        }

        actualizarValor();
    }
}

function resetear() {
    // Limpiar el carrito
    carrito = [];
    actualizarValor();
}

