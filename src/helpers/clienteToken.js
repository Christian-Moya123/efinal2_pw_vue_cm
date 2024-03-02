import axios from "axios"

export const obtenerTokenFachada = async (bodyToken) => {
    return await obtenerToken(bodyToken)
}

const obtenerToken = async (bodyToken) => {
    
    return axios.post(`http://localhost:8083/API/v1.0/Autorizacion/tokens/obtener/`, bodyToken) 

}