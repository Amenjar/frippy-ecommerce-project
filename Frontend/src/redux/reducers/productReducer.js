import { GET_ONE_PRODUCT, GET_PRODUCTS } from "../types/product";



const initialState = {
    product:null,
    products:null,
    productsMan:null,
    productsWoman:null
}
const ProductReducer = (state = initialState,{type, payload})=>{

    switch(type){

        case GET_PRODUCTS:
            return {...state,products:payload.products,productsMan:payload.productsMan,productsWoman:payload.productsWoman}
        case GET_ONE_PRODUCT:
            return {...state,product:payload.product}
        default:
            return state      
    }
}

export default ProductReducer;