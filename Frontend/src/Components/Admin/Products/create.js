import React, { useState } from "react";
import {useDispatch} from "react-redux"
import Form from 'react-bootstrap/Form';
import "./create.css";
import {  useNavigate } from "react-router-dom";
import { createProduct } from "../../../redux/actions/product";

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [price, setPrice] = useState("")
    const [taille,setTaille] = useState("");
    const [genre, setGenre] = useState("")
    
 return(
    <div>
   <div className='register-page py-5 '>
    <div className='row'>
        <div className='col-12'>
        <div className='register-card'>
            <h3 className='text-center mb-3'>Créer un Produit</h3>

            <form action='' method="post" className='d-flex flex-column gap-15'>
                
                <div>
                    <input type='name' name='name' placeholder='name' id="name" className='form-control' required onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <input type='picture' name='picture' id="picture"  className='form-control' placeholder='Picture' required onChange={(e)=>setPicture(e.target.value)} value={picture}/>
                </div>
                <div>
                    <input type='price' name='price' id="price" placeholder='price' className='form-control' required onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <input type='taille' name='taille' id="taille" placeholder='taille' className='form-control' required onChange={(e)=>setTaille(e.target.value)} value={taille}/>
                </div>
                  <div style={{marginLeft:'150px'}}>
                  <Form.Select aria-label="Default select example" onChange={(e)=>setGenre(e.target.value)} value={genre}>
                        <option>Open this select menu</option>
                        <option value="Man">Man</option>
                        <option value="Women">Woman</option>
                        </Form.Select>                
                </div>
                   
                <div >
                   
                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button type="submit" className='button2 border-0' onClick={(e)=>{e.preventDefault();dispatch(createProduct({name,picture,price,taille,genre},navigate))}}>Ajouter Produit</button>
                        
                    </div>
                </div>
            </form>           
        </div>
        </div>
    </div>
   </div>
    </div>
 )

}