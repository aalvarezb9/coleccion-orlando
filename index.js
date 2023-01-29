// Películas
// Libros
// Personas

/**
 * agregar, ver, actualizar, eliminar
 * 
 */

class Pelicula {
  constructor() {
    this.peliculas = [
      {
        titulo: 'Batman',
        duracion: '1h 50m',
        descripcion: 'asdkjashdkjaskhdhakd',
        clasificacion: 'C',
        anio: 2022
      },
      {
        titulo: 'Superman',
        duracion: '1h 50m',
        descripcion: 'asdkjashdkjaskhdhakd',
        clasificacion: 'C',
        anio: 2022
      },
    ];
  }

  agregarPelicula(titulo, duracion, descripcion, clasificacion, anio) {
    this.peliculas.push({
      titulo: titulo,
      duracion: duracion,
      descripcion: descripcion,
      clasificacion: clasificacion,
      anio: anio
    });
  }

  verPelicula(titulo) {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (titulo === this.peliculas[i].titulo) {
        return this.peliculas[i];
      }
    }

    return null;
  }

  verPeliculas() {
    return this.peliculas;
  }

  borrarPelicula(titulo) {
    const peliculasTemporal = [];
    for (let i = 0; i < this.peliculas.length; i++) {
      if (titulo !== this.peliculas[i].titulo) {
        peliculasTemporal.push(this.peliculas[i]);
      }
    }

    this.peliculas = peliculasTemporal;
  }
}

class Libro {}

class Persona {}

const pelicula = new Pelicula();
const libro = new Libro();

function agregarPelicula() {
  let titulo = document.getElementById('titulo').value;
  let duracion = document.getElementById('duracion').value;
  let descripcion = document.getElementById('descripcion').value;
  let clasificacion = document.getElementById('clasificacion').value;
  let anio = document.getElementById('anio').value;
  pelicula.agregarPelicula(titulo, duracion, descripcion, clasificacion, anio);
  document.getElementById('titulo').value = '';
  document.getElementById('duracion').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('clasificacion').value = '';
  document.getElementById('anio').value = '';
}

function verPelicula() {
  const titulo = document.getElementById('ver-pelicula').value;
  const peliculaEncontrada = pelicula.verPelicula(titulo);
  if (peliculaEncontrada) {
    document.getElementById('titulo-encontrado').innerHTML = peliculaEncontrada.titulo;
    document.getElementById('descripcion-encontrada').innerHTML = peliculaEncontrada.descripcion;
    document.getElementById('anio-encontrado').innerHTML = peliculaEncontrada.anio;
    document.getElementById('duracion-encontrada').innerHTML = peliculaEncontrada.duracion;
    document.getElementById('clasificacion-encontrada').innerHTML = peliculaEncontrada.clasificacion;
  } else {
    document.getElementById('titulo-encontrado').innerHTML = '';
    document.getElementById('descripcion-encontrada').innerHTML = '';
    document.getElementById('anio-encontrado').innerHTML = '';
    document.getElementById('duracion-encontrada').innerHTML = '';
    document.getElementById('clasificacion-encontrada').innerHTML = '';
  }
}

function borrarPelicula() {
  const titulo = document.getElementById('titulo-pelicula-borrar').value;
  pelicula.borrarPelicula(titulo);
  document.getElementById('titulo-pelicula-borrar').value = '';
}