// Agrega un evento al escuchar las teclas presionadas en la ventana
window.addEventListener('keydown', (e) => {
    // Si la tecla presionada es "+", se llama a la función "incremento"
    if (e.key === '+') {
        incremento();
    } 
    // Si la tecla presionada es "-", se llama a la función "decremento"
    else if (e.key === '-') {
        decremento();
    }
    });
  
  // Establece el contador en 0 y obtiene el elemento HTML con el id "valor"
    let contador = 0;
    const valor = document.getElementById('valor');
  
  // Incrementa el contador en 1 y actualiza el valor mostrado en la página
    function incremento() {
    contador += 1;
    valor.innerHTML = contador;
    }
  
  // Disminuye el contador en 1 si es mayor que 0, de lo contrario, lo deja en 0 y actualiza el valor mostrado en la página
    function decremento() {
    if (contador > 0) {
        contador -= 1;
        valor.innerHTML = contador;
    } else {
        contador = 0;
        valor.innerHTML = contador;
    }
    }
  
  // Establece el contador en 0 y actualiza el valor mostrado en la página
    function resetear() {
    contador = 0;
    valor.innerHTML = contador;
    }
