import React from 'react'
import Comments from '../Profile/Products/comments'
import { useSelector } from 'react-redux';

function DetailsProduit() {
    const product = useSelector((state)=>state.ProductReducer.product);
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
        
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DetailsProduit