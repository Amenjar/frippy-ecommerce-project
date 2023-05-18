import { GET_COMMANDES, GET_ONE_COMMANDES } from "../types/commande";



const initialState = {
    commandes:null,
    commande:null
}

const CartReducer = (state = initialState,{type, payload})=>{

    switch(type){

        case GET_COMMANDES:
            return {...state, commandes: payload.commandes}
        case GET_ONE_COMMANDES:
            return {...state, commande: payload.commande}    
        default:
            return state      
    }
}

export default CartReducer;