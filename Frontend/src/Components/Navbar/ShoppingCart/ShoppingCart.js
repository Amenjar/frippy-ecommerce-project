import { useDispatch, useSelector } from "react-redux"
import { getProducts, updateProduct } from "../../../redux/actions/product";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { IoMdTrash } from "react-icons/io";
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { createCommande } from "../../../redux/actions/commande";
import { useNavigate } from "react-router-dom";
import ModelCart from "./ModelCart";

   export default function Shoppingcart() {
    const [show, setShow] = useState(false);
    const [cart,setCart]=useState();
    const [exist,setExist] = useState(false);
    const [commander,setCommander]=useState(true);
    const [address,setAddress] = useState();
    const [numeroCart,setNumeroCart]=useState();
    const [etat,setEtat] = useState();
    const [prix,setPrix]=useState();
    const [product,setProduct]=useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
     const products = useSelector((state)=>state.ProductReducer.products) ;
     function calculeCommande(){
      try {
      setProduct(products.filter(el => el.cart === true));
      setPrix(product.map(el=> el.price.split("DT")[0]++).reduce((acc, valeur) => acc + valeur, 0));
      product.map(el => dispatch(updateProduct(el._id,{cart})));
      } catch (error) {
        console.log(error);
      }
      
     }
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    return (
       <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Shopping cart</h1>
                        <hr />
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                        {products && products.filter(product => product.cart === true).map(productItems => 
                        <Card style={{ width: '18rem',height:"300px",marginRight:'5px',marginTop:'5px'}} key={productItems._id}>
                        <Card.Img variant="top" src={productItems.picture} style={{ width: '18rem',height:"250px" }} />
                        <Card.Body style={{textAlign:'center', marginBottom:'8px',display:'flex',justifyContent:'space-around'}}>
                          <Card.Title>{productItems.price}</Card.Title>

                         {productItems.commander === false ? <IoMdTrash className="icon-heart" onClick={()=>{setCart(false);setExist(true);dispatch(updateProduct(productItems._id,{cart,exist}))}}></IoMdTrash>:<IoMdTrash className="icon-heart" onClick={()=>{setCart(false);dispatch(updateProduct(productItems._id,{cart}))}}></IoMdTrash>} 
                          </Card.Body>
                          
                        
                      </Card>)}
                      </div>
                    </div>
                </div>
            </div>
            <button style={{marginLeft:"700px"}} className="button-Product" onClick={()=>{products.filter(product => product.cart === true).map(el => dispatch(updateProduct(el._id,{commander})));handleShow()}}> commande </button>
            <Modal show={show} onHide={handleClose}>
                         <Modal.Header closeButton>
                         <Modal.Title>commande</Modal.Title>
                         </Modal.Header>
                    <Modal.Body>
                    <div style={{marginLeft:'150px'}}>
                    <div>
                                <input type='address' name='address' className='form-control' placeholder='address' required  onChange={(e)=>{setAddress(e.target.value)}} value={address}/>
                            </div>
                            <div>
                                <input type='numero cart' name='numeroCart' placeholder='numéro de carte' className='form-control' required onChange={(e)=>{setNumeroCart(e.target.value)}} value={numeroCart}/>
                            </div>    
                            </div>        
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={()=>{setProduct(products.filter(el => el.cart === true))}}>
                        Ajouter les produits
                      </Button>
                      {console.log(product)}
                      <Button variant="primary" onClick={()=>{setPrix(product.map(el=> el.price.split("DT")[0]++).reduce((acc, valeur) => acc + valeur, 0));product.map(el => dispatch(updateProduct(el._id,{cart})))}}>
                        calcule prix
                      </Button>
                      {console.log(prix)}
                      <ModelCart address={address} product={product} prix={prix} numeroCart={numeroCart}/>
                       
                    </Modal.Footer>
                  </Modal>          
    </div>
        
    )
    }

