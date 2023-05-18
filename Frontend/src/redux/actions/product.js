import axios from "axios";
import { GET_ONE_PRODUCT, GET_PRODUCTS } from "../types/product";
export const getProducts = ()=> async(dispatch)=>{
    try{
        const res = await axios.get("/product/products");
        dispatch({
            type:GET_PRODUCTS,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}


export const createProduct = (product,navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try{
        await axios.post("/product/ajouter",product,config);
        dispatch(getProducts())
        if(product.genre === "Man"){
            navigate("/admin/men's");
        }else{
            navigate("/admin/women's");
        }
        
    }catch(err){
        console.log(err)
    }
}



export const updateProduct = (id,product)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try{
        await axios.put(`/product/modifier/${id}`,product,config);
        console.log(product)
        dispatch(getProducts());
    }catch(err){
        console.log(err)
    }
}
export const deleteProduct = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers:{
            authorization : token,
        },
    };
    try {
        await axios.delete(`/product/delete/${id}`,config);
        dispatch(getProducts())
    } catch (error) {
        console.log(error);
    }
}
export const getOneProduct = (id,navigate) => async(dispatch) =>{

    try{
        const res = await axios.get(`/product/${id}`);
        dispatch({
            type:GET_ONE_PRODUCT,
            payload:res.data
        })
        navigate(`/product/${id}`)
    }catch(err){
        console.log(err)
    }
}
export const getOneProductHome = (id,navigate) => async(dispatch) =>{

    try{
        const res = await axios.get(`/product/${id}`);
        dispatch({
            type:GET_ONE_PRODUCT,
            payload:res.data
        })
        navigate(`/productHome/${id}`)
    }catch(err){
        console.log(err)
    }
}
export const getOneProductWish = (id) => async(dispatch) =>{

    try{
        const res = await axios.get(`/product/${id}`);
        dispatch({
            type:GET_ONE_PRODUCT,
            payload:res.data
        })
       
    }catch(err){
        console.log(err)
    }
}

