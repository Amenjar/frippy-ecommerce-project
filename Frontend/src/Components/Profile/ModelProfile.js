import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./Profile.css"
import { useDispatch } from 'react-redux';
import { modifierUser } from '../../redux/actions/auth';
function ModelProfile({user}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name)
    const [cin, setCin] = useState(user.cin)
    const [email, setEmail] = useState(user.email)
    const [picture, setPicture] = useState(user.picture)
    const [phone, setPhone] = useState(user.phone);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        
        <input type="submit" style={{width:"100px"}} class="profile-edit-btn" name="edit profile" value="Edit Profile" onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier Compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(modifierUser(user._id,{name,picture,cin,email,phone}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    
  )
}

export default ModelProfile
