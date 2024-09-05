var productos = [
    { nombre: "Laptop", precio: "1200.99" },
    { nombre: "Smartphone", precio: "799.49" },
    { nombre: "Tablet", precio: "450.00" },
    { nombre: "Auriculares", precio: "99.99" },
    { nombre: "Monitor", precio: "299.95" },
    { nombre: "Teclado", precio: "45.00" },
    { nombre: "Raton", precio: "25.99" },
    { nombre: "Camara", precio: "550.30" },
    { nombre: "Impresora", precio: "150.75" },
    { nombre: "Disco Duro", precio: "120.85" }
];

for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "  <td>" + productos[i].nombre + "</td>";
    html += "  <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProductos").innerHTML += html;
}
