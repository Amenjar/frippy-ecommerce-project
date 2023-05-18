import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { createComment, getComments } from '../../../redux/actions/comment';
import { Rating } from 'react-simple-star-rating'

import "./DetailsProduct.css";
import Comments from './comments';


function DetailsProduct() {
    const [body,setBody]=useState("");
    const [rate,setRate] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getComments());
    },[dispatch])

    const product = useSelector((state)=>state.ProductReducer.product);
    const handleRating = (rate) => {
      setRate(rate)
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
   // const comments = useSelector((state)=>state.CommentReducer.comments);

  return (
    <div>
      <div className='login-page py-5 '>
        <div className='row'>
        <div className='col-12'>
        <div style={{display:'flex'}}>  
        <div className='login-card'>          
           <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <img src={product.picture} alt="image"/>
            <div style={{marginTop:"70px"}}>
            <h6>Nom : {product.name}</h6>
            <br></br>
            <h6>Taille : {product.taille}</h6>
            <br></br>
            <h6>Prix : {product.price}</h6>
            <br></br>
            <h6>Genre : {product.genre}</h6>
            </div>
           </div> 
        </div>
        <div className='login-card'>          
           <div>
           <h6>Commentaires : </h6>
           <br></br>
           <Comments id={product._id}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <textarea className="form-control" placeholder="Commentaire" onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
            <Rating
            style={{marginLeft:"10px"}}
            size={15}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
        /* Available Props */
      />
       
          <div style={{marginTop:"25px"}}>                   
            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button type="submit" className='button3 border-0' onClick={()=>dispatch(createComment(product._id,{body,rate}))}>commenter</button>           
            </div>
        </div>
           </div>
        </div>
        </div>
        
      </div>  
    </div>
   </div>
    </div>
  )
}

export default DetailsProduct