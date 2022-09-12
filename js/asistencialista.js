import { obtenerAsistencia, eliminarLista} from './API.js';

(function() {
    const listado = document.querySelector('#listado-asistencia');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarAsistencia);

    async function mostrarAsistencia() {
        let estudiantes = await obtenerAsistencia();
        
        estudiantes.forEach( estudianteLista => {
            const { nombre, matricula, asistencia, /*matematicas, sociales, naturales,*/ aula, id } = estudianteLista;
            const row = document.createElement('tr');

            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
               <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
               <p class="text-sm leading-10 text-gray-700"> ${matricula} </p>
            </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${asistencia}</p>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${aula}</p>
                </td>

                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="#" data-listado="${id}" class="text-red-600 hover:text-red-900 eliminado">Eliminar</a>
                        <a href="index.html" class="text-teal-600 hover:text-teal-900 ml-5">Ver Estudiante</a>
                    </td>
            `;

            listado.appendChild(row);
        })
    }

    

   async function confirmarEliminar(e) {
        if( e.target.classList.contains('eliminado') ) {
            const estudianteId = parseInt( e.target.dataset.listado)
            console.log(estudianteId);
            const confirmar = confirm('¿Deseas eliminar la asistencia?');

            if(confirmar) {
                await eliminarLista(estudianteId)
            }

        }
    }

})();
