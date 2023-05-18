import React ,{useState} from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import Alert from 'react-bootstrap/Alert';
 

export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const errors = useSelector((state)=>state.AuthReducer.errors)
    const dispatch = useDispatch();
 return(
<div>
 <div className='login-page py-5 '>
    <div className='row'>
        <div className='col-12'>
        <div className='login-card'>
            <h3 className='text-center mb-3'>Connexion</h3>
            <form action='' method="post" className='d-flex flex-column gap-15'>
                <div>
                    <input type='email' name='email' className='form-control' placeholder='E-mail' required  onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <input type='password' name='password' placeholder='Mot de passe' className='form-control' required  onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {errors && <Alert key='danger' variant='danger'>
                    {errors[0].msg}
                    </Alert>} 
                </div>
                <div >
                   
                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button type="submit" className='button1 border-0' onClick={(e)=>{e.preventDefault();dispatch(login({email,password},navigate))} }>Connexion </button>
                        
                    </div>
                </div>
            </form>
            <p class="secondary">
                   <span className="create-account-question">Vous n'avez pas de compte?</span> 
                   <Link to="/inscription"> En créer un maintenant</Link>
                </p>

        </div>
        </div>
    </div>
   </div>
</div>
 )
}
