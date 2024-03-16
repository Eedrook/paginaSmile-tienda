const Change = document.getElementById('Change')

// Función para cerrar la ventana emergente
function cerrarVentana() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'none';
}

function cambio(){
    Change.src = './img/galeria2.jpg'
}
function cambio2(){
    Change.src = './img/galeria3.jpg'
}
function cambio3(){
    Change.src = './img/galeria1.jpg'
}


function descripción(titulo,mensaje){
    var Caja = document.getElementById('alertacaja')
    var Nombrealerta = document.getElementById('Nombrealerta')
    var alertainfo = document.getElementById('alertainfo')
    Nombrealerta.innerText = titulo;
    alertainfo.innerText = mensaje;
    Caja.style.display = 'flex'
}
function cerrar(){
   var Caja = document.getElementById('alertacaja')
   Caja.style.display = "none"
}