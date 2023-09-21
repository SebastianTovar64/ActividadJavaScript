// Solicitar al usuario que ingrese una opción
var opc = parseInt(prompt("Ingresa la opción que quieras elegir:\n1. Area Cuadrado\n2. Area Rectangulo\n3. Area Triangulo\n4. Suma\n5. Resta\n6. Multiplicacion\n7. Division\n8. Cual es mayor\n9. Salir"));

// Utilizar un switch para manejar diferentes casos según la opción ingresada
switch (opc) {
    case 1:
        // Calcular el área de un cuadrado
        var lado = parseInt(prompt("Ingresa la longitud del lado del cuadrado"));
        var resultado = lado * lado;
        alert("El área del cuadrado es: " + resultado);
        if (lado != 0) {
            document.write("El área del cuadrado es: " + resultado);
        } else {
            alert("Error, ingrese un valor diferente de cero");
        }
        break;
    case 2:
        // Calcular el área de un rectángulo
        var base = parseInt(prompt("Ingresa la longitud de la base del rectángulo"));
        var altura = parseInt(prompt("Ingresa la altura del rectángulo"));
        var resultado = base * altura;
        alert("El área del rectángulo es: " + resultado);
        if (base != 0 && altura != 0) {
            document.write("El área del rectángulo es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;
    case 3:
        // Calcular el área de un triángulo
        var base = parseInt(prompt("Ingresa la longitud de la base del triángulo"));
        var altura = parseInt(prompt("Ingresa la altura del triángulo"));
        var resultado = (base * altura) / 2;
        alert("El área del triángulo es: " + resultado);
        if (base != 0 && altura != 0) {
            document.write("El área del triángulo es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;
    case 4:
        // Realizar una suma
        var suma1 = parseFloat(prompt("Ingresa el primer número a sumar"));
        var suma2 = parseFloat(prompt("Ingresa el segundo número a sumar"));
        var resultado = suma1 + suma2;
        alert("La suma es: " + resultado);
        if (suma1 != 0 && suma2 != 0) {
            document.write("El resultado de la suma es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;
    case 5:
        // Realizar una resta
        var resta1 = parseFloat(prompt("Ingresa el primer número a restar"));
        var resta2 = parseFloat(prompt("Ingresa el segundo número a restar"));
        var resultado = resta1 - resta2;
        alert("La resta es: " + resultado);
        if (resta1 != 0 && resta2 != 0) {
            document.write("El resultado de la resta es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;
    case 6:
        // Realizar una multiplicación
        var multiplicacion1 = parseFloat(prompt("Ingresa el primer número a multiplicar"));
        var multiplicacion2 = parseFloat(prompt("Ingresa el segundo número a multiplicar"));
        var resultado = multiplicacion1 * multiplicacion2;
        alert("La multiplicación es: " + resultado);
        if (multiplicacion1 != 0 && multiplicacion2 != 0) {
            document.write("El resultado de la multiplicación es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;
    case 7:
        // Realizar una división
        var division1 = parseFloat(prompt("Ingresa el dividendo"));
        var division2 = parseFloat(prompt("Ingresa el divisor"));
        var resultado = division1 / division2;
        alert("La división es: " + resultado);
        if (division2 != 0) {
            document.write("El resultado de la división es: " + resultado);
        } else {
            alert("Error, el divisor no puede ser cero");
        }
        break;
    case 8:
        // Comparar cuál de dos números es mayor
        var numero1 = parseFloat(prompt("Ingresa el primer número"));
        var numero2 = parseFloat(prompt("Ingresa el segundo número"));
        if (numero1 > numero2) {
            document.write("El número " + numero1 + " es mayor que " + numero2);
        } else if (numero2 > numero1) {
            document.write("El número " + numero2 + " es mayor que " + numero1);
        } else {
            alert("Los números son iguales");
        }
        break;
    case 9:
        // Salir del programa
        alert("Gracias por usar la calculadora. ¡Vuelve pronto!");
        break;
    default:
        // Opción no válida
        alert("Opción no válida");
}
