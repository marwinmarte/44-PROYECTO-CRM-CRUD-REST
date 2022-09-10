import { obtenerEstudiantes, eliminarEstudiante} from './API.js';

(function() {
    const listado = document.querySelector('#listado-estudiantes');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarEstudiantes);

    async function mostrarEstudiantes() {
        const estudiantes = await obtenerEstudiantes();
        
        estudiantes.forEach( estudiante => {
            const { nombre, matricula,lenguaje, matematicas, sociales, naturales, aula, id } = estudiante;
            const row = document.createElement('tr');

            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
               <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
               <p class="text-sm leading-10 text-gray-700"> ${matricula} </p>
            </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${lenguaje}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${matematicas}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${sociales}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${naturales}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${aula}</p>
                </td>

                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-estudiante.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-estudiante="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
            `;

            listado.appendChild(row);
        })
    }

   async function confirmarEliminar(e) {
        if( e.target.classList.contains('eliminar') ) {
            const estudianteId = parseInt( e.target.dataset.estudiante)
            console.log(estudianteId);
            const confirmar = confirm('¿Deseas eliminar este estudiante?');

            if(confirmar) {
                await eliminarEstudiante(estudianteId)
            }

        }
    }

})();

