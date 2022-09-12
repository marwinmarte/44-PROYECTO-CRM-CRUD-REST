import {obtenerEstudiante, nuevaAsistencia } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {


    const nombreInput = document.querySelector('#nombre');
    const matriculaInput = document.querySelector('#matricula');
    const asistenciaInput = document.querySelector('#asistencia');
    const aulaInput = document.querySelector('#aula');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        // Verificar si el estudiante existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idEstudiante = parseInt( parametrosURL.get('id') );
        
        const estudiante = await obtenerEstudiante(idEstudiante)
        mostrarEstudiante(estudiante);
       
        // registra el formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarEstudiante);
       
    });

    function mostrarEstudiante(estudiante) {
        const { nombre, matricula, aula} = estudiante;

        nombreInput.value = nombre;
        matriculaInput.value = matricula;
        aulaInput.value = aula;
    }


    async function validarEstudiante(e) {
        e.preventDefault();
        const estudiante = {
            nombre: nombreInput.value, 
            asistencia: asistenciaInput.value,
            matricula: matriculaInput.value,
            aula: aulaInput.value
        }
        if( validar(estudiante) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await nuevaAsistencia(estudiante);
        window.location.href = 'asistencia-lista.html';
        
    }


    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }
})();