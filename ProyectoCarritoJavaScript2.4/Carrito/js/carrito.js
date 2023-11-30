// Definicion de una lista de productos con detalles como id, imagen, título y precio.
const products = [
    {
        id: 0,
        image: 'img/reyes.webp',
        title: 'Reyes Caidos',
        price: 150000,
    },
    {
        id: 1,
        image: 'img/todas.jpeg',
        title: 'Todas Las Hadas Del Reino',
        price: 90000,
    },
    {
        id: 2,
        image: 'img/codigo.jpg',
        title: 'Codigo De Ladrones',
        price: 130000,
    },
    {
        id: 3,
        image: 'img/atlantis.jpg',
        title: 'Atlantis Proyecto Tarsis',
        price: 100000,
    }
];

// Arreglo que almacenara los productos seleccionados por el usuario.
let cart = [];

// Funcion que genera el HTML para mostrar un producto en la interfaz.
function renderProduct(product) {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${product.image} alt=${product.title}></img>
            </div>
            <div class='bottom'>
                <p>${product.title}</p>
                <h2>$ ${product.price}</h2>
                <button onclick='addToCart(${product.id})'>Add to cart</button>
            </div>
        </div>`;
}

// Funcion que agrega un producto al carrito cuando el usuario hace clic en "Add to cart".
function addToCart(productId) {
    // Busca el producto en la lista de productos por su id.
    const productToAdd = products.find(product => product.id === productId);
    // Copia el producto y lo agrega al carrito.
    cart.push({ ...productToAdd });
    // Actualiza la visualización del carrito en la interfaz.
    displayCart();
}

// Funcion que elimina un elemento del carrito cuando el usuario hace clic en el ícono de la papelera.
function removeCartItem(index) {
    // Elimina el elemento en la posición 'index' del carrito.
    cart.splice(index, 1);
    // Actualiza la visualización del carrito en la interfaz.
    displayCart();
}

// Funcion que muestra el contenido del carrito en la interfaz.
function displayCart() {
    // Obtiene los elementos HTML donde se mostrará el carrito y el total.
    const cartContainer = document.getElementById("cartItem");
    const totalContainer = document.getElementById("total");

    // Verifica si el carrito esta vacio.
    if (cart.length === 0) {
        // Muestra un mensaje indicando que el carrito esta vacio.
        cartContainer.innerHTML = "Su carro está vacío";
        // Establece el total en $0.
        totalContainer.innerHTML = "$ 0";
    } else {
        let total = 0;

        // Genera el HTML para cada elemento del carrito.
        cartContainer.innerHTML = cart.map((item, index) => {
            // Suma el precio del producto al total.
            total += item.price;

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${item.image} alt=${item.title}>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}</h2>
                    <i class='fa-solid fa-trash' onclick='removeCartItem(${index})'></i>
                </div>`;
        }).join('');

        // Muestra el total acumulado en el carrito.
        totalContainer.innerHTML = `$ ${total}`;
    }

    // Actualiza el contador de elementos en el carrito.
    document.getElementById("count").innerHTML = cart.length;
}

// Obtiene los elementos HTML donde se mostrará el carrito y el total.
const cartContainer = document.getElementById("cartItem");
const totalContainer = document.getElementById("total");

// Verifica si el carrito está vacío.
if (cart.length === 0) {
    // Muestra un mensaje indicando que el carrito está vacío.
    cartContainer.innerHTML = "Su carro está vacío";
    // Establece el total en $0.
    totalContainer.innerHTML = "$ 0";
} else {
    // Variable para acumular el total de la compra.
    let total = 0;

    // Genera el HTML para cada elemento del carrito y actualiza el total.
    cartContainer.innerHTML = cart.map((item, index) => {
        // Suma el precio del producto al total.
        total += item.price;

        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${item.image} alt=${item.title}>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>$ ${item.price}</h2>
                <i class='fa-solid fa-trash' onclick='removeCartItem(${index})'></i>
            </div>`;
    }).join('');

    // Muestra el total acumulado en el carrito.
    totalContainer.innerHTML = `$ ${total}`;
}

// Actualiza el contador de elementos en el carrito.
document.getElementById("count").innerHTML = cart.length;

// Renderiza los productos en la interfaz al cargar la página.
document.getElementById('root').innerHTML = products.map(renderProduct).join('');
