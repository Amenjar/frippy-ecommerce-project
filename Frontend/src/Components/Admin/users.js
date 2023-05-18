import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getCurrent, getOneUser, getUsers, modifierUser } from '../../redux/actions/auth';
import { IoMdCreate, IoMdTrash } from "react-icons/io"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function ListOfUsers({search}) {
    const [show, setShow] = useState(false);
    const [demande,setDemande] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const naviagte = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCurrent())
    },[dispatch])
    useEffect(()=>{
        dispatch(getUsers());
        
    },[])
    const users = useSelector((state)=>state.AuthReducer.users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>email</th>
          <th>cin</th>
          <th>role</th>
          <th>demande</th>
          <th></th>
          <th>details</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users && users.filter(user => user.role !=='admin').filter(el=> el.name.toUpperCase().includes(search.toUpperCase().trim()) || el.role.toUpperCase().includes(search.toUpperCase().trim())).map(user => 
        <tr key={user._id}>
        <td><img src={user.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} /></td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.cin}</td>
        <td>{user.role}</td>
        <td>{user.demande} </td>
        <td><IoMdCreate className='icon-heart' onClick={handleShow}></IoMdCreate></td>
         
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{marginLeft:'150px'}}>
                  <Form.Select aria-label="Default select example" onChange={(e)=>setDemande(e.target.value)} value={demande}>
                        <option>Accepter/non</option>
                        <option value="accepter">accepter</option>
                        <option value="non accepter">non accepter</option>
                        </Form.Select>                
                </div>        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(modifierUser(user._id,{demande}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <td><button className="button-Product" onClick={()=>{dispatch(getOneUser(user._id,naviagte))}}>details</button></td>

        <td><IoMdTrash className="icon-heart" onClick={()=>dispatch(deleteUser(user._id))}></IoMdTrash></td>
        
        </tr>       
        )}
       
        
      </tbody>
    </Table>
  );
}

export default ListOfUsers;