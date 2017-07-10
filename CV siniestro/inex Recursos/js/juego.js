// Representación de la grilla. Cada nro representa a una pieza.
// El 9 es la posición vacía
var grilla = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var grillaGanadoraReLoca = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];



// Ac&aacute;1 vamos a ir guardando la posición vacía
var posicionVacia = {
  fila:2,
  columna:2
};

// Esta función va a chequear si el Rompecabezas est&aacute; en la posición ganadora
function chequearSiGano(){
  for (var f = 0; f < 3; f++) {
    for (var c = 0; c <3; c++) {
      if (grilla[f][c]!=grillaGanadoraReLoca[f][c]) {
        return false;
      }
    }
  }
  return true;
}
// la hacen los alumnos, pueden mostrar el cartel como prefieran. Pero es importante que usen
// esta función
function mostrarCartelGanador(){
alert("felicidades !!!AH GANADO¡¡¡");
}

// Intercambia posiciones grilla y en el DOM
function intercambiarPosiciones(fila1, columna1, fila2, columna2){
var numero1 = grilla[fila1][columna1];
var numero2 = grilla[fila2][columna2];

grilla[fila1][columna1] =numero2;
grilla[fila2][columna2]=numero1;

var pieza1 = document.getElementById("pieza"+numero1);
var pieza2 = document.getElementById("pieza"+numero2);
var piezaClonada1 = pieza1.cloneNode(true);
var piezaClonada2 = pieza2.cloneNode(true);
var juego=pieza2.parentNode
juego.replaceChild(piezaClonada1,pieza2);
juego.replaceChild(piezaClonada2,pieza1);

}
// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila,nuevaColumna){
 posicionVacia.fila = nuevaFila;
 posicionVacia.columna =nuevaColumna;
}

// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna){
if(fila >=0 &&fila <=2&&columna >=0&&columna <=2){
return true;
}else {
  return false;
}
}

// Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando
// su posición con otro elemento
function moverEnDireccion(direccion){

  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Intercambia pieza blanca con la pieza que está arriba suyo
  if(direccion == 40){
    nuevaFilaPiezaVacia = posicionVacia.fila-1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;
  }
  // Intercambia pieza blanca con la pieza que está abajo suyo
  else if (direccion == 38) {
    nuevaFilaPiezaVacia = posicionVacia.fila+1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;

  }
  // Intercambia pieza blanca con la pieza que está a su izq
  else if (direccion == 39) {
   nuevaFilaPiezaVacia = posicionVacia.fila;
   nuevaColumnaPiezaVacia = posicionVacia.columna-1;

  }
  // Intercambia pieza blanca con la pieza que está a su der
  else if (direccion == 37) {
nuevaFilaPiezaVacia = posicionVacia.fila;
nuevaColumnaPiezaVacia = posicionVacia.columna+1
  }

  // Se chequea si la nueva posición es válida, si lo es, se intercambia
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    intercambiarPosiciones(posicionVacia.fila, posicionVacia.columna,
    nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }

}



// Extras, ya vienen dadas

function mezclarPiezas(veces){
  if(veces<=0){return;}
  var direcciones = [40, 38, 39, 37];
  var direccion = direcciones[Math.floor(Math.random()*direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function(){
    mezclarPiezas(veces-1);
  },100);
}

function capturarTeclas(){
  document.body.onkeydown = (function(evento) {
    moverEnDireccion(evento.which);

    var gano = chequearSiGano();
    if(gano){
      setTimeout(function(){
        mostrarCartelGanador();
      },500);
    }
    evento.preventDefault();
  })
}

function iniciar(){
  mezclarPiezas(5);
  capturarTeclas();
}


iniciar();
