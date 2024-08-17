// 1. Seleccionamos los elementos del DOM que necesitamos
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");

// 2. Seleccionamos los botones de sumar y restar
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

// 3. Añadimos el evento de clic al botón de sumar
btnSumar.addEventListener("click", function() {
    // 4. Convertimos los valores de los inputs a números y sumamos
    let suma = parseFloat(valor1.value) + parseFloat(valor2.value);
    
    // 5. Mostramos el resultado en el span con la clase "resultado"
    resultado.textContent = suma;
});

// 6. Añadimos el evento de clic al botón de restar
btnRestar.addEventListener("click", function() {
    // 7. Convertimos los valores de los inputs a números y restamos
    let resta = parseFloat(valor1.value) - parseFloat(valor2.value);
    
    // 8. Mostramos el resultado en el span con la clase "resultado"
    resultado.textContent = resta;
});
