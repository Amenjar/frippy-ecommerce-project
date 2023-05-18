import React from 'react'
import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';
import '../Profile/Products/DetailsProduct.css'






function DetailsCommandeLivreur() {

 


    const commande = useSelector((state)=>state.CartReducer.commande);
    
   // const comments = useSelector((state)=>state.CommentReducer.comments);

  return (
    <div>
      <div className='login-page py-5 '>
        <div className='row'>
        <div className='col-12'>
        <div style={{display:'flex'}}>  
        <div className='login-card'>          
           <div style={{display:"flex",justifyContent:"space-evenly"}}>
           <img src={commande.user.picture} alt="image"/>
            <div>
            <h6>Adresse : {commande.address}</h6>
            <br></br>
            <h6>Numéro de carte : {commande.numeroCart}</h6>
            <br></br>
            <h6>Prix : {commande.prix}</h6>
            <br></br>
            <h6>etat : {commande.etat}</h6>
            </div>
           </div> 
        </div>
        <div className='login-card'>          
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>nom</th>
          <th>prix</th>
          <th>taille</th>
          <th>genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        
        {commande.product && commande.product.map(product => 
        <tr key={commande._id}>
        <td><img src={product.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} /></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.taille}</td>
        <td>{product.genre}</td>

        </tr>       
        )}
        
      </tbody>
    </Table>
           </div>
        </div>
        </div>
        
      </div>  
    </div>
   </div>

  )
}

export default DetailsCommandeLivreur;