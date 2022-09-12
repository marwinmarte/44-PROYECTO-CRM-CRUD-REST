import { obtenerEstudiantes, eliminarEstudiante} from './API.js';

(function() {
    const listado = document.querySelector('#listado-estudiantes');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarEstudiantes);

    async function mostrarEstudiantes() {
        const estudiantes = await obtenerEstudiantes();
        
        estudiantes.forEach( estudiante => {
            const { nombre, matricula, lenguaje, matematicas, sociales, naturales, aula, id } = estudiante;
            

            

// // calculo de la nota de lenguaje a literal

//         let notaLeng = lenguaje;
//         if(notaLeng >= 90){
//             notaLeng = 'A' 
//           }
//           else if(notaLeng >= 80){
//             notaLeng = 'B'
//           }
//           else if(notaLeng >= 70){
//             notaLeng = 'C'
//           }
//           else if(notaLeng <= 69){
//             notaLeng = 'F'
//           }
//         console.log(notaLeng);

//         // calculo de la nota de matematicas a literal

//         let notaMat = matematicas;
//         if(notaMat >= 90){
//             notaMat = 'A'  
//           }
//           else if(notaMat >= 80){
//             notaMat = 'B'
//           }
//           else if(notaMat >= 70){
//             notaMat = 'C'
//           }
//           else if(notaMat <= 69){
//             notaMat = 'F'
//           }
//         console.log( notaMat);

//         // calculo de la nota de sociales a literal

//         let notaSoc = sociales;
//         if(notaSoc >= 90){
//             notaSoc = 'A' 
//           }
//           else if(notaSoc >= 80){
//             notaSoc = 'B'
//           }
//           else if(notaSoc >= 70){
//             notaSoc = 'C'
//           }
//           else if(notaSoc <= 69){
//             notaSoc = 'F'
//           }
//         console.log( notaSoc);

//         // calculo de la nota de naturales a literal

//         let notaNat = naturales;
//         if(notaNat >= 90){
//             notaNat = 'A' 
//           }
//           else if(notaNat >= 80){
//             notaNat = 'B'
//           }
//           else if(notaNat >= 70){
//             notaNat = 'C'
//           }
//           else if(notaNat <= 69){
//             notaNat = 'F'
//           }
//         console.log( notaNat);

            const row = document.createElement('tr');
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
               <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
               <p class="text-sm leading-10 text-gray-700"> ${matricula} </p>
            </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${notaLeng}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${notaMat}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${notaSoc}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${notaNat}</p>
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

