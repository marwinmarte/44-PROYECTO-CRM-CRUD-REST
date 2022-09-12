import { nuevoEstudiante } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarEstudiante);

    async function validarEstudiante(e) {
        e.preventDefault();

        // Leer todos los campos del form
        const nombre = document.querySelector('#nombre').value;
        const matricula = document.querySelector('#matricula').value; 
        const lenguaje = document.querySelector('#lenguaje').value;
        const matematicas = document.querySelector('#matematicas').value;
        const sociales = document.querySelector('#sociales').value;
        const naturales = document.querySelector('#naturales').value; 
        const aula = document.querySelector('#aula').value;  

        // usando Object Literal Enhancement
        //combina todas las variables en un Objeto estudiante
        const estudiante = {
            nombre, 
            matricula,
            lenguaje,
            matematicas,
            sociales,
            naturales,
            aula
        }

        if( validar(estudiante) ) {
            // Mostrar Mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        await nuevoEstudiante(estudiante);
        window.location.href = 'index.html';
    }


   
    // Validando que no haya un campo vacio en el objeto estudiante
    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }

   
})();