import axios from "axios";
import { GET_COMMENTS } from "../types/comments";


export const getComments = () => async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get("/comments/",config);        
        dispatch({type: GET_COMMENTS, payload: res.data})
    } catch (error) {
        console.log(error);
    }

}

export const createComment = (id,comment)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
try {
    await axios.post(`/comments/${id}`,comment,config);
    dispatch(getComments());
} catch (error) {
    console.log(error);
}
}
export const deleteComments = (id)=> async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.delete(`/comments/delete/${id}`,config)
        dispatch(getComments())
    } catch (error) {
        
    }

}
export const editComment = (id,comment)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
         await axios.put(`/comments/update/${id}`,comment,config);
        dispatch(getComments())
    } catch (error) {
        console.log(error);
    }
}