import ChatMessage from "@/models/ChatMessage";
import httpAxios from "./httpAxios";
import User from "@/models/User";

const v1Ai = (message) => {
    const url = `/api/v1/ai`;
    const body = {
        "message": message
    };
    return httpAxios.post(url, body)
    .then(response => {
        console.log(response);
        console.log(response.data);
        const data = response.data;
        const user = new User(data.sender.id, data.sender.name, data.sender.imageUrl);
        return new ChatMessage(user, data.message);
    })
};
const getInscricao = async (id) => {
    try {
        const response = await httpAxios.get(`/inscricoes/${id}`);
        const data = response.data;
        return new Inscricao(data.id, data.nome, data.email);
    } catch (error) {
        console.error('Erro ao buscar inscrição:', error);
        throw error; 
    }
};
const getInscricao2 = (id) => {
    return httpAxios.get(`/inscricoes/${id}`)
    .then(response => {
        const data = response.data;
        return new Inscricao(data.id, data.nome, data.email);
    })
    .catch(error => {
        console.error('Erro ao buscar inscrição:', error);
        throw error;
    });
};
export { v1Ai, getInscricao };