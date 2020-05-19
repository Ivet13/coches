'use strict'

// para poder crear objetos de tipo Coche, nos creamos un constructor de este objeto
function Coche (marca, ano, color) {
  this.marca = marca,
  this.ano = ano,
  this.color = color
}

// tambien nos preparamos un array que acojera las instancias de nuestros coches
var cochesDelUsuario = []

// esta es la funcion principal
function insertarCocheEnHistorial () {
  // variable auxiliar para poder evaluar si continuar creando coches o si el usuario ha escrito "no" en el prompt o le ha dado al cancel
  var para = false

  // hasta que el usuario quiera crear coches
  while (!para) {
    var cocheNuevo = new Coche(
      // directamente populamos la instancia nueva del objeto con valores que nos pasa el usuario mediante los prompts
      prompt('Introduce la marca de coche que ya has tenido:'),
      prompt('Cual fue el ano de su lanzamiento:'),
      prompt('De que color era?')
    )
    console.log('creando coche')

    // populamos el array con el coche que acabamos de crear
    cochesDelUsuario.push(cocheNuevo)

    console.log(cochesDelUsuario)

    // despues de la creacion de una instancia del objeto vamos a preguntar si seguimos con otro coche o si paramos el programa
    var quiereInsertarCocheNuevo = prompt('Quieres insertar un coche nuevo?')
    if (quiereInsertarCocheNuevo === null || quiereInsertarCocheNuevo === 'no') {
      para = true
    } else {
      para = false
    }
  }
  // esta funcion sirve para anadir un nuevo elemento HTML, concretamente un parrafo y llenarlo con los valores de las propiedades de
  // los objetos creados
  crearNuevaCaja(cochesDelUsuario)
  console.log('fin del codigo')
}

// esto sirve para arrancar la funcion principal
insertarCocheEnHistorial()

// aqui he empezado a probar como podriamos anadir datos de los objetos creados a parrafos nuevos en nuestra pagina index
function crearNuevaCaja (coches) {
  for (let i = 0; i < coches.length; i++) {
    const cochesArticulo = document.getElementById('coches')
    const nuevoParrafo = document.createElement('p')
    cochesArticulo.appendChild(nuevoParrafo)
    nuevoParrafo.innerHTML = `Marca: ${coches[i].marca} Ano: ${coches[i].ano} Color: ${coches[i].color}`
  }
}
