'use strict'

/* creamos un objeto donde podemos meter info relacionada con el usuario y las marcas de coches que nos
indicara haber tenido entrando datos en la ventanita de prompt. Ademas anadimos una funcion que nos muestra por pantalla
una frase rellenada con las variables que nos haya pasado. */

function coches () {
  var historiaDeCochesDelUsuario = {
    nombreUsuario: prompt('Tu nombre:'),
    marca1: prompt('Introduce la primera marca de coche que ya has tenido:'),
    marca2: prompt('Introduce la segunda marca de coche que ya has tenido:'),
    marca3: prompt('Introduce la tercera marca de coche que ya has tenido:'),
    mostrarDatos: function () {
      var resultado = `Tu nombre es ${this.nombreUsuario} y ya has tenido coches de marcas: ${this.marca1}, ${this.marca2} y ${this.marca3}.` 
      console.log(resultado)
      document.write(resultado)
    }
  }

  // aqui invocamos el metodo del objeto que hemos creado para que nos imprime la frase en la consola
  historiaDeCochesDelUsuario.mostrarDatos()
}

// esto sirve para lanzar la funccion al abrir la pagina
coches()
