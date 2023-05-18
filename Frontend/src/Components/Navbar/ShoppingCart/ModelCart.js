import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdTrash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {  getOneProductWish, updateProduct } from '../../../redux/actions/product';
import { modifierUser } from '../../../redux/actions/auth';
import { createCommande } from '../../../redux/actions/commande';
import { useNavigate } from 'react-router-dom';
function ModelCart({address,numeroCart,prix,product}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [cart,setCart] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
  return (
    <div>
     <Button variant="primary" onClick={()=>{product.map(el => dispatch(updateProduct(el._id,{cart})));handleShow()}}>passer</Button>                          
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>es-tu sûr</Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={()=>{handleClose()}}>
        No
        </Button>
        <Button variant="success" onClick={()=>{dispatch(createCommande({address,numeroCart,prix,product},navigate))}}>
         Ok
        </Button>
        </Modal.Footer>
       </Modal>
    </div>
  )
}

export default ModelCart