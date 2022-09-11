import { obtenerEstudiantes, eliminarEstudiante} from './API.js';

(function() {
    const listado = document.querySelector('#listado-estudiantes');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarEstudiantes);

    async function mostrarEstudiantes() {
        let estudiantes = await obtenerEstudiantes();

        
        estudiantes.forEach( estudiante => {
            const { nombre, matricula, asistencia, /*matematicas, sociales, naturales,*/ aula, id } = estudiante;
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
                        <a href="editar-estudiante.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-estudiante="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                        <a href="asistencia-nueva.html?id=${id}" class="text-teal-600 hover:text-teal-900 ml-5">Lista</a>
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

