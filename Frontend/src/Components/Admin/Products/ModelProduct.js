import React,{useState} from 'react'
import { IoMdCreate } from "react-icons/io"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../redux/actions/product';
function ModelProduct({product}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(product.name)
    const [picture, setPicture] = useState(product.picture)
    const [price, setPrice] = useState(product.price)
    const [taille,setTaille] = useState(product.taille);
    const [genre, setGenre] = useState(product.genre);
    const [exist, setExist] = useState(product.exist);
    const [commander, setCommander] = useState(product.commander);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
  return (
    <div>
        <IoMdCreate className='icon-heart' onClick={handleShow}></IoMdCreate>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'170px'}}>Modification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <label style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{marginRight:'5px'}}>exist</div>   
                <input type="radio" name="exist" value="true" onChange={(e)=>{setExist(e.target.value)}}/>
                </label> 
                <label style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{marginRight:'5px'}}>not exist</div>  
                <input type="radio" name="exist" value="false" onChange={(e)=>{setExist(e.target.value)}}/>
                </label> 
                </div>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <label style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{marginRight:'5px'}}>commander</div>   
                <input type="radio" name="commander" value="true" onChange={(e)=>{setCommander(e.target.value)}}/>
                </label> 
                <label style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{marginRight:'5px'}}>not commander</div>  
                <input type="radio" name="commander" value="false" onChange={(e)=>{setCommander(e.target.value)}}/>
                </label> 
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
                    <button type="submit" className='button2 border-0' onClick={(e)=>{e.preventDefault();dispatch(updateProduct(product._id,{name,picture,price,taille,genre,exist,commander}));handleClose()}}>Modifier Produit</button>
                        
                    </div>
                </div>
            </form>           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModelProduct