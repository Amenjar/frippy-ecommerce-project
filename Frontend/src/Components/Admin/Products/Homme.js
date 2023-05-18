import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProducts } from '../../../redux/actions/product';
import {  IoIosCheckmarkCircle, IoIosCloseCircle,  IoMdTrash } from "react-icons/io"
import { deleteProduct } from '../../../redux/actions/product';
import { getCurrent } from '../../../redux/actions/auth';
import ModelProduct from './ModelProduct';
import { getComments } from '../../../redux/actions/comment';
import { useNavigate } from 'react-router-dom';


function ListOfProductsHomme({search}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getCurrent())
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
          <th>details</th>
          <th>edit</th>
          <th></th>          
        </tr>
      </thead>
      <tbody>
        {products && products.filter(product => product.genre ==='Man').filter(el=> el.name.toUpperCase().includes(search.toUpperCase().trim())).map(product => 
        <tr>
        <td><img src={product.picture} alt="logo" style={{borderRadius:'200px',height:'50px',width:'50px'}} /></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.taille}</td>
        <td>{product.genre}</td>
        <td>{product.exist === true ? <IoIosCheckmarkCircle style={{color:'green'}}/> : <IoIosCloseCircle style={{color:'red'}}/>}</td>
        <td>{product.commander === true ? <IoIosCheckmarkCircle style={{color:'green'}}/> : <IoIosCloseCircle style={{color:'red'}}/>}</td>
        <td><button className="button-Product" onClick={()=>{dispatch(getOneProduct(product._id,navigate));dispatch(getComments())}}>details</button></td>
        <td><ModelProduct product={product}></ModelProduct> </td>
        <td><IoMdTrash className="icon-heart" onClick={()=>dispatch(deleteProduct(product._id))}></IoMdTrash></td>
        
        </tr>       
        )}
        
      </tbody>
    </Table>
  );
}

export default ListOfProductsHomme;