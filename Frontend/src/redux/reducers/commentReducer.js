import { GET_COMMENTS, GET_ONE_COMMENTS } from "../types/comments";



const initialState = {
    comments:null,
    comment:null
}

const CommentReducer = (state = initialState,{type, payload})=>{

    switch(type){

        case GET_COMMENTS:
            return {...state,comments:payload.comments}
        case GET_ONE_COMMENTS:
            return {...state,comment:payload.comment}    
        default:
            return state      
    }
}

export default CommentReducer;