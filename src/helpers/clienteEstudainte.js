import axios from 'axios';



export const obtenerEstudianteFachada = async  (bodyEstudiante, token) => {
    return await ingresarEstudiante(bodyEstudiante, token)
}


const ingresarEstudiante = async (bodyEstudiante, token) => {
    const headers = { Authorization: `Bearer ${token}` };


    console.log(headers)

    var response = await axios.post(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes`, bodyEstudiante, { headers: headers }) 
    console.log(response)
    return response.data

}


