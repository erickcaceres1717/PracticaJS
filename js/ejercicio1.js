const nota1 = document.getElementById("txtNota1");
const nota2 = document.getElementById("txtNota2");
const nota3 = document.getElementById("txtNota3");
const resultado = document.getElementById("txtResultado");

const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

function calcular() {

    if (nota1.value === "" || nota2.value === "" & nota3.value === "") {
        alert("Por favor, ingresa las notas.");
    }
    else {
        const total = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;
        resultado.value = total.toPrecision(2);
    }

}

function limpiar() {

    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    resultado.value = "";
}



btnCalcular.addEventListener("click", calcular);
btnLimpiar.addEventListener("click", limpiar);

