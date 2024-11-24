import axios from "axios";

//? <!-- API Configuration -->
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

//? <!-- Users API Endpoints -->
export const createUsers = async (data: any) => {
    try{
        const response = await api.post("/users", data);
        console.log(response);
        return response;
    }catch(err){
        console.log(err);
        return err;
    }
};

export const getUserDNI = async (dni: string) => {
    try{
        const response = await api.get(`/users/${dni}`);
        return response;
    }catch(err){
        console.log(err);
    }
};

export const updateUser = async (dni: string, data: any) => {
    try{
        const response = await api.put(`/users/${dni}`, data);
        return response;
    }catch(err){
        console.log(err);
    }
}

export const deleteUser = async (dni: string) => {
    try{
        const response = await api.delete(`/users/${dni}`);
        return response
    }catch(err){
        console.log(err);
    }
}