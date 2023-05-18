
import './Mens.css'
import { useDispatch, useSelector } from "react-redux"
import { getOneProductHome, getProducts } from "../../redux/actions/product";
import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {  AiOutlineHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function Mens({search}) {
  

 const navigate = useNavigate()
  
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
     const products = useSelector((state)=>state.ProductReducer.products) ;
 return(
<div style={{display:'flex',flexWrap:'wrap',marginLeft:'25px', marginTop:'15px'}}>
  <hr></hr>
      {products && products.filter(product => product.genre === "Man").filter(el=> el.name.toUpperCase().includes(search.toUpperCase().trim())).map(product => 
      <div style={{marginRight:'5px',marginTop:'10px'}} key={product._id}>
        <Card style={{ width: '18rem',height:"300px" }}>
                        <Card.Img variant="top" src={product.picture} style={{ width: '18rem',height:"250px" }} />
                        <Card.Body style={{textAlign:'center', marginBottom:'8px',display:'flex',justifyContent:'space-around'}}>
                          <Card.Title>{product.price}</Card.Title>
                          <Link to="/login"><AiOutlineHeart className="icon-heart-men"></AiOutlineHeart></Link>
                        </Card.Body> 
                        <button className="button-Product" onClick={()=>{dispatch(getOneProductHome(product._id,navigate))}}>details</button>                 
                       
                        </Card>
        </div>)}   
  </div>
     
   )
  }