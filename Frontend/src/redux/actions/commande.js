import axios from "axios";
import { GET_COMMANDES, GET_ONE_COMMANDES } from "../types/commande";


export const getCommandes = () => async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {

        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get("/commandes/",config);   
           
        dispatch({type: GET_COMMANDES, payload: res.data})
        console.log(res.data); 
    } catch (error) {
        console.log(error);
    }

}

export const createCommande = (commande,navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
try {
    await axios.post(`/commandes/commande`,commande,config);
    dispatch(getCommandes());
    navigate('/user/commandes');
} catch (error) {
    console.log(error);
}
}
export const deleteCommandes = (id)=> async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.delete(`/commandes/delete/${id}`,config)
        dispatch(getCommandes())
    } catch (error) {
        
    }

}
export const editCommande = (id,commande)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
         await axios.put(`/commandes/update/${id}`,commande,config);
        dispatch(getCommandes())
    } catch (error) {
        console.log(error);
    }
}
export const getOneCommande = (id,navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get(`/commandes/commande/${id}`,config);        
        dispatch({type: GET_ONE_COMMANDES, payload: res.data})
        navigate(`/commande/${id}`)
    } catch (error) {
        console.log(error);
    }
}