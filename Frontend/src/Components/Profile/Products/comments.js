import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editComment, getComments } from '../../../redux/actions/comment';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating'


import { deleteComments } from '../../../redux/actions/comment';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from '../../../redux/actions/auth';


function Comments({id}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
  dispatch(getCurrent());
  },[dispatch])
  useEffect(()=>{
    dispatch(getComments());
    },[dispatch])
  const [show, setShow] = useState(false);
  const [body,setBody] = useState('');
  const [rate,setRate]= useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
      
    const user = useSelector(state=>state.AuthReducer.user);
    const comments = useSelector((state)=>state.CommentReducer.comments);

  return (
    <div>
    
        {comments && comments.filter(el=>el.ProductId === id).map((comment)=><div key={comment._id} style={{display:"flex"}}>
        
         <div style={{display:'flex',justifyContent:'space-between',marginLeft:'10px'}}>
         <div style={{display:'flex',justifyContent:'space-evenly'}}>
         <img src={comment.user.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} />
         <div>
         <h6 style={{color:"black",marginTop:'15px',marginLeft:'15px'}}>{comment.body}</h6>
         <Rating
         style={{marginLeft:'12px'}}
         initialValue={comment.rate}
         size={15}
        /* Available Props */
      />
         </div>
         
         </div>
         {comment.userId === user._id && 
         <div style={{display:"flex",marginTop:'15px',marginLeft:'300px'}}>
         <IoMdCreate className='icon-heart' onClick={handleShow}></IoMdCreate>
         <IoMdTrash className="icon-heart" onClick={()=>dispatch(deleteComments(comment._id))}></IoMdTrash>
         </div>}
         </div>
        
        
        
          
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea className="form-control" placeholder="Commentaire" onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editComment(comment._id,{body}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div> 
        


       )}
    </div>
  )
}

export default Comments