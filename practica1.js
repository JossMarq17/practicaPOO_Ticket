/*Instrucciones: Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.
*/

let productos = {
    producto1: {
        nombre : "chachitos",
        descripcion : "cereal a base de trigo muy delicioso",
        precio : 16,
        cantidad : 250,
        foto : "https://tenor.com/es/ver/john-cena-chachitos-cereal-gif-19932615"},

    producto2: {
        nombre : "nutrileche",
        descripcion : "leche muy deliciosa",
        precio : 10,
        cantidad : 1,
        foto : "https://m.media-amazon.com/images/I/719v5gI5teL._AC_SL1500_.jpg"},

    producto3: {
        nombre : "chocoTavo de fresa",
        descripcion : "chocomilk muy delicioso",
        precio : 18.50,
        cantidad : 500,
        foto : "https://http2.mlstatic.com/D_NQ_NP_875348-MLM43826141959_102020-V.jpg"}
}

let venta = {
    articulos: function(){
        return (`Ticket: ${productos.producto1.nombre}, ${productos.producto2.nombre}, ${productos.producto3.nombre}`); 
    },
    total: function (){
        return productos.producto1.precio + productos.producto2.precio + productos.producto3.precio;
    },
    idCliente: 123456,
    correoCliente: "andrea.marquezvivaldo@gmail.com"
}

document.getElementById("ticket1").innerHTML = venta.articulos();
document.getElementById("ticket2").innerHTML = "Total: " + venta.total();
document.getElementById("ticket3").innerHTML = "Id: " + venta.idCliente;
document.getElementById("ticket4").innerHTML = "Correo: " + venta.correoCliente;