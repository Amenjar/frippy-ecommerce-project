import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/actions/product";
import React, { useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';

   export default function Nouveautes() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
     const products = useSelector((state)=>state.ProductReducer.products) ;
  
    return (
       <div >

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">NOS NOUVEAUTÉS</h1>
                        <hr />
                        <div style={{display:'flex',flexWrap:'wrap',marginLeft:"140px"}}>
                        {products && products.map(productItems => 
                        <Card style={{ width: '18rem',height:"300px",marginRight:'5px',marginTop:'5px'}} key={productItems._id}>
                        <Card.Img variant="top" src={productItems.picture} style={{ width: '18rem',height:"250px" }} />
                        <Card.Body style={{textAlign:'center'}}>
                          <Card.Title>{productItems.price}</Card.Title>
                        </Card.Body>
                      </Card>)}
                      </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                   
                </div>
            </div>




    </div>
        
    )
    }

