import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IoMdCreate, IoMdTrash,IoIosCheckboxOutline, IoIosCloseCircle, IoIosDoneAll, IoIosMore, IoIosPaperPlane } from "react-icons/io"
import { deleteCommandes, editCommande, getCommandes, getOneCommande } from '../../redux/actions/commande';
import { getCurrent } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

function ListOfCommandesUser() {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const [show, setShow] = useState(false);
    const [etat,setEtat] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
      dispatch(getCurrent());
    },[dispatch])
    useEffect(()=>{
        dispatch(getCommandes());
        
    },[dispatch])
    const commandes = useSelector((state)=>state.CartReducer.commandes);
    const user = useSelector((state)=>state.AuthReducer.user);
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
        {console.log(commandes)}
        {commandes && commandes.filter(el=>el.userId === user._id).map(commande => 
        <tr key={commande._id}>
        <td><img src={commande.user.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} /></td>
        <td>{commande.user.name}</td>
        <td>{commande.address}</td>
        <td>{commande.numeroCart}</td>
        <td>{commande.prix} DT</td>
        <td>{commande.etat === "en attente" ? <IoIosMore></IoIosMore>: commande.etat === "confirmer" ? <IoIosCheckboxOutline style={{color:'green'}}/>: commande.etat === "annuler"? <IoIosCloseCircle style={{color:'red'}}/>: commande.etat === "en livraison"? <IoIosPaperPlane style={{color:'green'}}/>: commande.etat === "livrer" ? <IoIosDoneAll style={{color:"green"}}/>:""}</td>
        {commande.etat === "en livraison" ? <td><IoMdCreate className='icon-heart' onClick={handleShow}></IoMdCreate></td>:null}
         
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{marginLeft:'150px'}}>
                  <Form.Select aria-label="Default select example" onChange={(e)=>setEtat(e.target.value)} value={etat}>
                        <option>confirmer/non</option>
                        <option value="livrer">livrer</option>
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
        <td>
            {commande.etat !=="en livraison"?<IoMdTrash className="icon-heart" onClick={()=>dispatch(deleteCommandes(commande._id))}></IoMdTrash>:<td></td>}
        </td>
        <td><button className="button-Product" onClick={()=>{dispatch(getOneCommande(commande._id,naviagte))}}>details</button></td>
        </tr>       
        )}
        
      </tbody>
    </Table>
  );
}

export default ListOfCommandesUser;