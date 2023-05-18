import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IoIosCheckboxOutline, IoIosCloseCircle, IoIosDoneAll, IoIosMore, IoIosPaperPlane, IoMdCreate } from "react-icons/io"
import {  editCommande, getCommandes, getOneCommande } from '../../redux/actions/commande';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from '../../redux/actions/auth';

function ListOfCommandesLivreur() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [etat,setEtat] = useState("");
    const naviagte = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
      dispatch(getCurrent());
    },[dispatch])
    useEffect(()=>{
        dispatch(getCommandes());
    },[dispatch])
    const commandes = useSelector((state)=>state.CartReducer.commandes);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>addresse</th>
          <th>numero de carte</th>
          <th>prix</th>
          <th>etat</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {commandes && commandes.map(commande => 
        <tr key={commande._id}>
        <td><img src={commande.user.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} /></td>
        <td>{commande.user.name}</td>
        <td>{commande.address}</td>
        <td>{commande.numeroCart}</td>
        <td>{commande.prix} DT</td>
        <td>{commande.etat === "en attente" ? <IoIosMore></IoIosMore>: commande.etat === "confirmer" ? <IoIosCheckboxOutline style={{color:'green'}}/>: commande.etat === "annuler"? <IoIosCloseCircle style={{color:'red'}}/>: commande.etat === "en livraison"? <IoIosPaperPlane/>: commande.etat === "livrer" ? <IoIosDoneAll style={{color:"green"}}/>:""}</td>

       {commande.etat === "confirmer" ?<td><IoMdCreate className='icon-heart' onClick={handleShow}></IoMdCreate></td>:<td></td>} 
         
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{marginLeft:'150px'}}>
                  <Form.Select aria-label="Default select example" onChange={(e)=>setEtat(e.target.value)} value={etat}>
                        <option>livrer/non</option>
                        <option value="confirmer">confirmer</option>
                        <option value="en livraison">en livraison</option>
                        </Form.Select>                
                </div>        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editCommande(commande._id,{etat}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <td><button className="button-Product" onClick={()=>{dispatch(getOneCommande(commande._id,naviagte))}}>details</button></td>
        </tr>       
        )}
        
      </tbody>
    </Table>
  );
}

export default ListOfCommandesLivreur;