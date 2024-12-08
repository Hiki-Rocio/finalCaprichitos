function generarProducto(){
   const prod =[
    {
        id: 1,
        name: "Muñeca Barbie",
        description: "Muñeca Barbie con vestido de gala y accesorios.",
        amount: 17900
    },
    {
        id: 2,
        name: "Auto de Carrera",
        description: "Auto de carrera a control remoto con luces y sonidos.",
        amount: 25000
    },
    {
        id: 3,
        name: "Lego Star Wars",
        description: "Set de construcción Lego de la serie Star Wars.",
        amount: 35000
    },
    {
        id: 4,
        name: "Pelota de Fútbol",
        description: "Pelota de fútbol tamaño oficial, ideal para niños.",
        amount: 9900
    },
    {
        id: 5,
        name: "Rompecabezas 3D",
        description: "Rompecabezas 3D de 500 piezas con diseño de castillo.",
        amount: 34500
    }
   ];

   return prod; 
}


generarProducto();
localStorage.setItem("productos",JSON.stringify(generarProducto()));

function agregarParrafo(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Set de autitos a friccion de colores";
    let Autitos = document.getElementById("Autitos");

    Autitos.appendChild(parrafo);
 }

 function agregarParrafo2(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Auto loco con luz";
    let autitoconluz = document.getElementById("autitoconluz");

    autitoconluz.appendChild(parrafo);
 }
 function agregarParrafo4(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Pop it electronico con luz y sonido";
    let popit = document.getElementById("popit");

    popit.appendChild(parrafo);
 }

 function agregarParrafo5(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Dispenser de 23 cm hipopotamo";
    let dispenser = document.getElementById("dispenser");

    dispenser.appendChild(parrafo);
 }
 function agregarParrafo3(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Set de doctor con herramientas";
    let setdoctor = document.getElementById("setdoctor");

    setdoctor.appendChild(parrafo);
 }

 function agregarParrafo6(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Caballito de plastico con rueditas";
    let caballito = document.getElementById("caballito");

    caballito.appendChild(parrafo);
 }
 function agregarParrafo7(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Hacha de juguete de plastico";
    let hacha = document.getElementById("hacha");

    hacha.appendChild(parrafo);
 }

 function agregarParrafo8(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Letras imantadas, tamaño mediano";
    let letras = document.getElementById("letras");

    letras.appendChild(parrafo);
 }
 function agregarParrafo9(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Pelota numero 5 messi";
    let futbol = document.getElementById("futbol");

    futbol.appendChild(parrafo);
 }

 function agregarParrafo10(){
    const parrafo = document.createElement("p");
    parrafo.innerText = "Mascota virtual";
    let mascota = document.getElementById("mascota");

    mascota.appendChild(parrafo);
 }





 let productos = [];
 let total = 0;
 
 function agregarProducto(producto, precio) {
     let carrito = document.getElementById("carrito");
     let productoItem = document.createElement("p");
     productoItem.textContent = producto;
     carrito.appendChild(productoItem);

     productos.push({ nombre: producto, precio: precio });

     total += precio;
     document.getElementById("btnPagar").textContent = `Pagar: $${total}`;
 }
 
 function pagar() {

     localStorage.setItem('productos', JSON.stringify(productos));
     localStorage.setItem('total', total);
 
     alert("Total a pagar: $ " + total);
     window.location.href = "carrito.html"; 
 }
 
 function limpiarCarrito() {
     if (confirm("Vaciar carrito?")) {
         productos = [];
         total = 0;
         document.getElementById("carrito").innerHTML = ""; 
         document.getElementById("btnPagar").textContent = "Pagar";
 
   
         localStorage.removeItem('productos');
         localStorage.removeItem('total');
     }
 }