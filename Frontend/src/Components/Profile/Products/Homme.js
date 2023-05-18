import { useDispatch, useSelector } from "react-redux"
import { getOneProduct, getOneProductHome, getProducts, updateProduct } from "../../../redux/actions/product"
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

import "./Product.css";
import { useNavigate } from 'react-router-dom';
import { getComments } from "../../../redux/actions/comment";
import {  getCurrent } from "../../../redux/actions/auth";

import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";


   export default function ProductsHomme({search}) {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [cart,setCart] = useState(false);
    const [exist,setExist] = useState(true);
    const [wishListProduct,setWishListProduct]=useState()
    
    useEffect(() => {
    dispatch(getCurrent())}
    ,[])

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
     const user = useSelector((state)=>state.AuthReducer.user)
     const products = useSelector((state)=>state.ProductReducer.products) ;
     const token = localStorage.getItem('token');
     
     
     
    return (  
      <div>
        {user && token ?
            <div className="container my-3 ">
              
                <hr></hr>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                        {products && products.filter(product => product.genre === "Man").filter(el=> el.name.toUpperCase().includes(search.toUpperCase().trim()) || el.price.toUpperCase().includes(search.toUpperCase().trim())).map(productItems => 
                        <Card style={{ width: '18rem',height:"300px",marginRight:'5px',marginTop:'80px' }} key={productItems._id}>
                        <Card.Img variant="top" src={productItems.picture} style={{ width: '18rem',height:"250px" }} />
                        <Card.Body style={{textAlign:'center', marginBottom:'8px',display:'flex',justifyContent:"space-between"}}>
                          <Card.Title>{productItems.price}</Card.Title>
                          <div style={{display:'flex'}}>
                          <AiOutlineHeart className="icon-heart-men" onClick={()=>{setWishListProduct("true");dispatch(updateProduct(productItems._id,{wishListProduct}))}}/>
{}
                          {productItems.exist === true ? <CgShoppingCart className="icon-bag" onClick={()=>{setCart(true);setExist(false);dispatch(updateProduct(productItems._id,{cart,exist}))}}/>:<div></div>}
                          </div>
                        </Card.Body>
                        <button className="button-Product" onClick={()=>{dispatch(getOneProduct(productItems._id,navigate))}}>details</button>
                      </Card>)}
                      </div>
                    </div>
        :<div></div>}
      </div>
    )
    }

