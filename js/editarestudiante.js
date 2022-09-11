import {obtenerEstudiante, editarEstudiante } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {


    const nombreInput = document.querySelector('#nombre');
    const matriculaInput = document.querySelector('#matricula');
    const asistenciaInput = document.querySelector('#asistencia');
    // const matematicasInput = document.querySelector('#matematicas');
    // const socialesInput = document.querySelector('#sociales');
    // const naturalesInput = document.querySelector('#naturales');
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
        const { nombre, matricula,asistencia, /*matematicas, sociales, naturales,*/ aula, id} = estudiante;

        nombreInput.value = nombre;
        matriculaInput.value = matricula;
        asistenciaInput.value = asistencia;
        // matematicasInput.value = matematicas;
        // socialesInput.value = sociales;
        // naturalesInput.value = naturales;
        aulaInput.value = aula;
        idInput.value = id;
    }


    async function validarEstudiante(e) {
        e.preventDefault();
        const estudiante = {
            nombre: nombreInput.value, 
            asistencia: asistenciaInput.value,
            // matematicas: matematicasInput.value,
            // sociales: socialesInput.value,
            // naturales: naturalesInput.value,
            aula: aulaInput.value,
            id: parseInt(idInput.value)
        }
        if( validar(estudiante) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await editarEstudiante(estudiante);
        window.location.href = 'index.html';
    }


    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }
})();