import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import "./Register.css";
import { register } from "../../redux/actions/auth";
import Form from 'react-bootstrap/Form';
import {  useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

export default function Inscription() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [cin, setCin] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const errors = useSelector((state)=>state.AuthReducer.errors)
 return(
    <div>
   <div className='register-page py-5 '>
    <div className='row'>
        <div className='col-12'>
        <div className='register-card'>
            <h3 className='text-center mb-3'>Créer un compte</h3>

            <form action='' method="post" className='d-flex flex-column gap-15'>
                
                <div>
                    <input type='name' name='name' placeholder='name' id="name" className='form-control' required onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <input type='picture' name='picture' id="picture"  className='form-control' placeholder='Picture' required onChange={(e)=>setPicture(e.target.value)} value={picture}/>
                </div>
                <div>
                    <input type='cin' name='cin' id="cin" placeholder='Cin' className='form-control' required onChange={(e)=>setCin(e.target.value)} value={cin}/>
                </div>
                  <div>
                    <input type='email' name='email' id="email" placeholder='E-mail' className='form-control' required onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <input type='phone' name='phone' id="phone" placeholder='phone' className='form-control' required onChange={(e)=>setPhone(e.target.value)} value={phone} />
                </div>
                  <div>
                    <input type="password" id="password" name="password" required  className='form-control'  placeholder='Mot de passe' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <div style={{marginLeft:'150px'}}>
                  <Form.Select aria-label="Default select example" onChange={(e)=>setRole(e.target.value)} value={role}>
                        <option>select role</option>
                        <option value="user">user</option>
                        <option value="livreur">livreur</option>
                        </Form.Select>                
                </div>
                {errors && <Alert key='danger' variant='danger'>
                    {errors[0].msg}
                    </Alert>} 
                <div >
                   
                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button type="submit" className='button2 border-0' onClick={(e)=>{e.preventDefault();dispatch(register({name,cin,email,picture,password,role,phone},navigate))}}>S'inscrire</button>
                        
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