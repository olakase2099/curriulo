// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra){
  for (var contador = 0; contador < noticias.length; contador++) {
    noticiaActual = noticias[contador];
    if (contienePalabra(noticiaActual,palabra)) {
      cambiarColor(noticiaActual,"rgb(255, 0, 0)");
    }
  }

}

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){
  for (var contador = 0; contador < noticias.length; contador++) {
    noticiasActual = noticias[contador];
    if (contienePalabra(noticiasActual,palabra)) {
      ocultarNoticia(noticiasActual);
    }
  }

}

function recortarNoticias(cantPalabras){
  for (var contador = 0 ; contador < noticias.length ; contador++) {
    noticiasActual = noticias[contador];
      recortarTexto(noticiasActual,cantPalabras);
    }
  }
recortarTexto(noticias[2],2);
// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()

resaltarNoticiasQueContengan("robots")
resaltarNoticiasQueContengan("Bill")
ocultarNoticiasQueContengan("Google")
ocultarNoticiasQueContengan("2.000")
recortarNoticias(20)
