import React, { Fragment ,  useEffect, useState} from "react";
import "./Navbar.css";
import { Link , useNavigate} from "react-router-dom";
import {  AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent, logout } from "../../redux/actions/auth";
import logo from './logo.png';
import { getProducts, updateProduct } from "../../redux/actions/product";



function Navbar({search,setSearch}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [wishListProduct,setWishListProduct]=useState("");

    useEffect(()=>{
        dispatch(getCurrent());
    },[dispatch])
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    const user = useSelector((state)=>state.AuthReducer.user);
    const auth = useSelector((state)=>state.AuthReducer.auth);
    const products = useSelector((state)=>state.ProductReducer.products) ;
    function supprimerWishList(){
        try {
            products.map(el =>setWishListProduct("false"));
            products.map(el=>dispatch(updateProduct(el._id,{wishListProduct})))
        } catch (error) {
            console.log(error)
        }
    }
    return (
   
    <Fragment>

<header class="main-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-2">
                    <div class="header__logo">
                    <img src={logo} alt=""/>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-7">
                    <nav class="header__menu" style={{display:'flex',justifyContent:"space-between",width:'1120px'}}>
                    {auth && user && user.role === 'user' ? 
                        <ul>
                                <li className="active"><Link to ="/Profile">Profile</Link></li>                       
                                <li><Link to ="/user/men's">HOMMES</Link></li>
                                <li><Link to ="/user/women's">FEMMES</Link></li>
                                <li><Link to ="/user/commandes">COMMANDES</Link></li>
                        </ul> 
                        : 
                       auth && user && user.role === 'admin' ? 
                        <ul>
                                <li className="active"><Link to ="/admin">Admin</Link></li>
                                <li><Link to="/admin/users">USERS</Link></li> 
                                <li><Link to ="/admin/create">Produit</Link></li>                      
                                <li><Link to ="/admin/men's">HOMMES</Link></li>                                
                                <li><Link to ="/admin/women's">FEMMES</Link></li>
                                <li><Link to="/admin/commandes">COMMANDES</Link></li>
                        </ul>
                        :
                       auth && user && user.role === 'livreur' ? 
                        <ul>
                                <li className="active"><Link to ="/ProfileLivreur">Profile</Link></li>                       
                                <li><Link to ="/livreur/commandes">COMMANDES</Link></li>
                        </ul>
                        :
                        <ul>
                                <li className="active"><Link to ="/">ACCUEIL</Link></li>                       
                                <li><Link to ="/men's">HOMMES</Link></li>
                                <li><Link to ="/women's">FEMMES</Link></li>
                                <li><Link to ="/contact">Contact</Link></li>
                        </ul>}
                        <div style={{display:'flex'}}>
                        {auth && user ?<ul><li><Link  onClick={()=>{supprimerWishList();dispatch(logout(navigate))}}>Déconnexion</Link></li></ul>   : (<ul><li><Link to="/login">Connexion</Link></li>                         
                               <li><Link to="/inscription"> créer compte</Link></li> </ul> )}    
                        {( auth && user && user.role !=='admin') ? <div style={{display:'flex'}}>
                        <input type="text" placeholder="Recherche" name="recherche" className="form-control" onChange={(e)=>setSearch(e.target.value)} value={search}/>  
                        <AiOutlineSearch className="icon-search"/>    
                        <Link to ="/user/wishlist" ><AiOutlineHeart className="icon-heart"/></Link>
                        <Link to ="/user/shoppingcart"><CgShoppingCart className="icon-bag"/></Link>
                        </div>
                        :(auth && user && user.role === 'admin')? <div style={{display:'flex'}}>
                        <input type="text" placeholder="Recherche" name="recherche" className="form-control" onChange={(e)=>setSearch(e.target.value)} value={search}/>  
                        <AiOutlineSearch className="icon-search"/>
                        </div>:
                        !user ? 
                        <div style={{display:'flex'}}>
                        <input type="text" placeholder="Recherche" name="recherche" className="form-control" onChange={(e)=>setSearch(e.target.value)} value={search}/>  
                        <AiOutlineSearch className="icon-search"/>    
                        <Link to="/login" ><AiOutlineHeart className="icon-heart"/></Link>
                        <Link to="/login"><CgShoppingCart className="icon-bag"/></Link>
                        </div>:<div></div>}

                               
                        </div>
                    </nav>
                </div>
            </div>
           
        </div>
</header>
   
    </Fragment>
    ) 
}
export default Navbar;