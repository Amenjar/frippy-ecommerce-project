const { REGISTER, GET_USERS, CURRENT, LOGOUT,FAIL,LOGIN, GET_ONE_USER } = require("../types/auth")


const initialState = {
    user : null,
    errors : null,
    auth:false,
    users:null,
    oneUser:null
}

const AuthReducer = (state = initialState,{type, payload})=>{
    switch(type){

        case REGISTER:
            return {
              ...state,
                user: payload.user,
                auth:false,
                errors: null
                }
        case LOGIN:
            localStorage.setItem("token", payload.token)
            localStorage.setItem("user",payload.user)
            return {
             ...state,
                user: payload.found,
                auth:true,
                errors: null
                }
        case GET_USERS:
            return {
              ...state,
                users: payload.listOfUsers
                }
        case CURRENT:
            return {...state,user:payload,auth:true}
        case GET_ONE_USER:
            return {...state,oneUser:payload.user}    
        case LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return {...state,user:null,auth:false}
        case FAIL:
            return {...state,errors:payload.errors}
        default:
            return state      
    }
}

export default AuthReducer;