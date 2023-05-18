import React from 'react'
import {  useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';
import './Products/DetailsProduct'







function DetailsCommande() {

 


    const commande = useSelector((state)=>state.CartReducer.commande);
    
   // const comments = useSelector((state)=>state.CommentReducer.comments);

  return (
    <div>
      <div className='login-page py-5 '>
        <div className='row'>
        <div className='col-12'>
        <div style={{display:'flex'}}>  
        <div className='login-card'>          
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <img src={commande.user.picture} alt="image"/>
            <div style={{marginLeft : '15px',marginTop:'20px'}}>
            <div class="row">
             <div class="col-md-6">
               <label>address</label>
                 </div>
              <div class="col-md-6">
              <p style={{color:"#0062cc"}}>{commande.address}</p>
              </div>
            </div>
           
            <div class="row">
             <div class="col-md-6">
               <label>Numéro de Carte</label>
                 </div>
              <div class="col-md-6">
              <p style={{color:"#0062cc"}}>{commande.numeroCart}</p>
              </div>
            </div>
            
            <div class="row">
             <div class="col-md-6">
               <label>prix</label>
                 </div>
              <div class="col-md-6">
              <p style={{color:"#0062cc"}}>{commande.prix} DT</p>
              </div>
            </div>
            <div class="row">
             <div class="col-md-6">
               <label>phone</label>
                 </div>
              <div class="col-md-6">
              <p style={{color:"#0062cc"}}>{commande.user.phone}</p>
              </div>
            </div>
            <div class="row">
             <div class="col-md-6">
               <label>etat</label>
                 </div>
              <div class="col-md-6">
              <p style={{color:"#0062cc"}}>{commande.etat}</p>
              </div>
            </div>
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

export default DetailsCommande