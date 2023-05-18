import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";

import Card from 'react-bootstrap/Card';


import { getProducts, updateProduct } from "../../../redux/actions/product";
import { IoMdTrash } from "react-icons/io";



export default function Wishlist() {
const dispatch = useDispatch();
useEffect(()=>{
 getProducts();
},[dispatch])
const [wishListProduct,setWishListProduct] = useState("");
const products = useSelector((state)=>state.ProductReducer.products);

 
 return(
    <div>
       <h2>MA WISHLIST</h2>
       {console.log(products)}
       <div className="container my-3 ">
                <hr></hr>
                        <div style={{display:'flex',flexWrap:'wrap'}}>                        
                        {products && products.filter(product => product.wishListProduct === "true").map(productItems => 
                        <Card style={{ width: '18rem',height:"300px",marginRight:'5px',marginTop:'5px' }} key={productItems._id}>
                        <Card.Img variant="top" src={productItems.picture} style={{ width: '18rem',height:"250px" }} />
                        <Card.Body style={{textAlign:'center', marginBottom:'8px',display:'flex',justifyContent:"space-between"}}>
                          <Card.Title>{productItems.price}</Card.Title>
                          <div>
                          <IoMdTrash className="icon-heart" onClick={()=>{setWishListProduct("false");dispatch(updateProduct(productItems._id,{wishListProduct}))}}></IoMdTrash>
                           </div>
                           {console.log(wishListProduct)}
                        </Card.Body>                        
                       
                      </Card>)}
                      </div>
                    </div>

       </div>

   
 )

}