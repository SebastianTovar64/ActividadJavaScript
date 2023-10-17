document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", function () {
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        const dishPrice = calculateDishPrice(dish) * dishQuantity;
        const drinkPrice = calculateDrinkPrice(drink) * drinkQuantity;
        const subtotal = dishPrice + drinkPrice;

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        orderSummary.appendChild(orderItem);

        total += subtotal;
        totalPrice.textContent = total.toFixed(2);
    });

    function calculateDishPrice(dish) {
        // Define los precios de los platos
        let hamburguesa = 10000;
        let pizza = 8000;
        let mazorcada = 15000;
        let pataconas = 14000;
        let alitas = 8000;
        let costillas = 15000;
        let nachos = 12000;

        switch (dish) {
            case "hamburguesa":
                return hamburguesa;
            case "pizza":
                return pizza;
            case "mazorcada":
                return mazorcada;
            case "pataconas":
                return pataconas;
            case "alitas":
                return alitas;
            case "costillas":
                return costillas;
            case "nachos":
                return nachos;
            default:
                return 0; // Devuelve 0 si el plato no se encuentra en la lista.
        }
    }

    function calculateDrinkPrice(drink) {
        // Define los precios de las bebidas
        let agua = 2500;
        let refresco = 3500;
        let cerveza = 5000;
        let limonada = 4000;

        switch (drink) {
            case "agua":
                return agua;
            case "refresco":
                return refresco;
            case "cerveza":
                return cerveza;
            case "limonada":
                return limonada;
            default:
                return 0; // Devuelve 0 si la bebida no se encuentra en la lista.
        }
    }
});
