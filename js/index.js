document.getElementById("titulo").innerHTML = "Calculadora";
function calcular() {
    var nota1 = document.getElementById("txtNumero1");
    var nota2 = document.getElementById("txtNumero2");

    // Realiza la suma y calcula el promedio de las dos notas
    var total = parseFloat(nota1.value) + parseFloat(nota2.value);

    // Muestra el resultado en el campo de salida
    document.getElementById("txtResultado").value = total;
}
