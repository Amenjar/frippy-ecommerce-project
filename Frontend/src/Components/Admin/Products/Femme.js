import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProducts,  } from '../../../redux/actions/product';
import {  IoIosCheckmarkCircle, IoIosCloseCircle, IoMdTrash } from "react-icons/io"

import './create.css'
import { deleteProduct } from '../../../redux/actions/product';
import ModelProduct from './ModelProduct';
import { getComments } from '../../../redux/actions/comment';
import { useNavigate } from 'react-router-dom';



function ListOfProductsFemme({search}) {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    const products = useSelector((state)=>state.ProductReducer.products);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>price</th>
          <th>taille</th>
          <th>genre</th>
          <th>exist</th>
          <th>commander</th>
          <th>edit</th>
          <th></th>          
        </tr>
      </thead>
      <tbody>
        {products && products.filter(product => product.genre ==='Women').filter(el=> el.name.toUpperCase().includes(search.toUpperCase().trim())).map(product => 
        <tr>
        <td><img src={product.picture} alt="logo" style={{height:'80px',width:'80px'}} /></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.taille}</td>
        <td>{product.genre}</td>
        <td>{product.exist === true ? <IoIosCheckmarkCircle style={{color:'green'}}/> : <IoIosCloseCircle style={{color:'red'}}/>}</td>
        <td>{product.commander === true ? <IoIosCheckmarkCircle style={{color:'green'}}/> : <IoIosCloseCircle style={{color:'red'}}/>}</td>
        <td><button className="button-Product" onClick={()=>{dispatch(getOneProduct(product._id,navigate));dispatch(getComments())}}>details</button></td>
        <td><ModelProduct product={product}/> </td>
        <td><IoMdTrash className="icon-heart" onClick={()=>dispatch(deleteProduct(product._id))}></IoMdTrash></td>
        
        </tr>       
        )}
        
      </tbody>
    </Table>
  );
}

export default ListOfProductsFemme;