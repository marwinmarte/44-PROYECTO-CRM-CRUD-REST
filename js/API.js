// API para listado de estudiantes
const url = "http://localhost:3000/estudiantes"; 

// API para asistencia de estudiantes
const url2 = "http://localhost:3000/pase-lista"; 


// para crear un nuevo estudiante
export const nuevoEstudiante = async estudiante => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(estudiante), // data puede ser string o un objeto, asi que lo convertimos a string
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}
// para crear nueva asistencia
export const nuevaAsistencia = async estudiante => {
    try {
        await fetch(url2, {
            method: 'POST', 
            body: JSON.stringify(estudiante), // data puede ser string o un objeto, asi que lo convertimos a string
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// para obtener todos los estudiantes
export const obtenerEstudiantes = async () => {
    try {
        const resultado = await fetch(url);
        const estudiantes = await resultado.json();
        return estudiantes;
    } catch (error) {
        console.log(error);
    }
}
// para obtener la asistencia
export const obtenerAsistencia = async () => {
    try {
        const resultado = await fetch(url2);
        const estudiantes = await resultado.json();
        return estudiantes;
    } catch (error) {
        console.log(error);
    }
}

// Obtiene un estudiante por su ID para la edicion
export const obtenerEstudiante = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const estudiante = await resultado.json();
        return estudiante;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza un registro
export const editarEstudiante = async estudiante => {
    try {
        await fetch(`${url}/${estudiante.id}`, {
            method: 'PUT', 
            body: JSON.stringify(estudiante), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Elimina el estudiante
export const eliminarEstudiante = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export const eliminarLista = async id => {
    try {
        await fetch(`${url2}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}