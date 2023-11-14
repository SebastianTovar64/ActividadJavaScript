// Funcion para sumar dos numeros
function sumar(n1, n2) {
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros ingresados no sean cero
    if (n1 != 0 && n2 != 0) {
        // Si no son cero, muestra el resultado de la suma en el elemento HTML "resultado"
        respuesta.style.display = "block";
        res.innerHTML = `Total de la suma: ${resultado}`;
        res.style.color = "black solid";
    } else {
        // Si algun numero es cero, muestra un mensaje de error en rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Funcion para restar dos numeros
function restar() {
    // Obtiene los valores de los elementos HTML con id "n1" y "n2"
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    resultado = n1 - n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros ingresados no sean cero
    if (n1 != 0 && n2 != 0) {
        // Si no son cero, muestra el resultado de la resta en el elemento HTML "resultado"
        respuesta.style.display = "block";
        res.innerHTML = `Total de la resta : ${resultado}`;
        res.style.color = "black solid";
    } else {
        // Si algun numero es cero, muestra un mensaje de error en rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Funcion para multiplicar dos numeros
function multiplicar() {
    // Obtiene los valores de los elementos HTML con id "n1" y "n2"
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    resultado = n1 * n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros ingresados no sean cero
    if (n1 != 0 && n2 != 0) {
        // Si no son cero, muestra el resultado de la multiplicacion en el elemento HTML "resultado"
        respuesta.style.display = "block";
        res.innerHTML = `Total de la multiplicacion : ${resultado}`;
        res.style.color = "black solid";
    } else {
        // Si algun numero es cero, muestra un mensaje de error en rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Funcion para dividir dos numeros
function dividir0() {
    // Obtiene los valores de los elementos HTML con id "n1" y "n2"
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    resultado = n1 / n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros ingresados no sean cero
    if (n1 != 0 && n2 != 0) {
        // Si no son cero, muestra el resultado de la division en el elemento HTML "resultado"
        respuesta.style.display = "block";
        res.innerHTML = `Total de la division : ${resultado}`;
        res.style.color = "black solid";
    } else {
        // Si algun numero es cero, muestra un mensaje de error en rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Funcion para calcular la potencia cuadrada de un numero
function potencia() {
    // Obtiene el valor del elemento HTML con id "n1"
    let n1 = parseInt(document.getElementById("n1").value);
    resultado = n1 * n1;
    var res = document.getElementById("resultado");

    // Verifica que el numero ingresado no sea cero
    if (n1 != 0) {
        // Si no es cero, muestra el resultado de la potencia en el elemento HTML "resultado"
        respuesta.style.display = "block";
        res.innerHTML = `Total de la potencia : ${resultado}`;
        res.style.color = "black solid";
    } else {
        // Si el numero es cero, muestra un mensaje de error en rojo
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Funcion principal que determina la operacion a realizar segun la opcion seleccionada
function mostrar() {
    // Obtiene los valores de los elementos HTML con id "n1", "n2" y "opc"
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Utiliza un switch para determinar que operacion realizar
    switch (opc) {
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar();
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            dividir0();
            break;
        case 5:
            potencia();
            break;
        default:
            // Muestra una alerta si la opcion ingresada no es valida
            alert("Opcion no valida");
    }
}
