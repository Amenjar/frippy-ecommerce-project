import axios from "axios";
import { CURRENT, FAIL, GET_USERS, LOGIN, REGISTER,LOGOUT, GET_ONE_USER } from "../types/auth";


export const register = (user,navigate) => async (dispatch) => {
    try {
        
        const res = await axios.post("/auth/register", user);
        dispatch({type: REGISTER,payload: res.data});
        navigate("/login");
    } catch (error) {
        dispatch({type: FAIL, payload: error.response.data});
    }
}

export const login = (user,navigate) => async (dispatch) => {
    try {    
        const res = await axios.post("/auth/login", user);
        dispatch({type: LOGIN,payload: res.data});
        if(res.data.found.role === "admin") {
            navigate("/admin");
        }else 
        if(res.data.found.role === "livreur"){
            navigate("/ProfileLivreur");
        }else{
            navigate("/Profile");
        }
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data});
    }
}
export const getCurrent = ()=> async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get("/auth/current",config);
        console.log(res.data)
        dispatch({type: CURRENT,payload: res.data});
    } catch (error) {
        console.log(error);
    }
}
export const logout = (navigate) =>{
    navigate("/");
    return {
        type: LOGOUT,
    }
}
export const getUsers = (navigate) => async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get("/auth/users",config);
        dispatch({type: GET_USERS,payload: res.data});
        navigate("/admin/users");
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.delete(`/auth/delete/${id}`,config);
        dispatch(getUsers());
    } catch (error) {
        console.log(error);
    }
}
export const modifierUser = (id,user) => async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.put(`/auth/modifier/${id}`,user,config);
        dispatch(getUsers());  
        dispatch(getCurrent());
           
    } catch (error) {
        console.log(error);
    }

}
export const getOneUser =(id,navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        const res = await axios.get(`/auth/users/${id}`,config);
        dispatch({type: GET_ONE_USER,payload: res.data});
        navigate(`/admin/users/${id}`);
    } catch (error) {
        console.log(error);
    }
}
export const supprimerWishList = (id,user) => async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try { 
        user.wishList.pop();
        await axios.put(`/auth/modifier/${id}`,user,config);
        console.log(user.wishList)
        dispatch(getCurrent())      
    } catch (error) {
        console.log(error);
    }

}
export const ajouterProductWishList = (id,user) => async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.put(`/auth/modifier/${id}`,user,config);
        console.log(user.wishList);       
    } catch (error) {
        console.log(error);
    }

}
