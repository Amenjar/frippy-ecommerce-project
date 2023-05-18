import { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../redux/actions/auth";
export default function Footer() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCurrent());
    },[])
    const user = useSelector(state => state.AuthReducer.user);
    const navigateToTop = () => {
        window.scrollTo(0, 0); // Remonte en haut de la page
      };
    
 return (
<div>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-7">
                <div class="footer__about">
                    <div class="footer__logo">
                        <img src="ASSETS/img/téléchargement.png" alt=""/>
                    </div>
                      <p>Frippy est un site web crée pour faciliter la vente et l'achat des vetements d'occasion</p>
                   
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-5">
                <div class="footer__widget">
                    <h6>Liens rapides</h6>
                    {user && user.role === 'admin'?
                    <ul>
                            <li><Link to ="/admin/men's" onClick={navigateToTop}>HOMMES</Link></li>
                            <li><Link to ="/admin/women's" onClick={navigateToTop}>FEMMES</Link></li>
                            <li><Link to ="/contact" onClick={navigateToTop}>Contact</Link></li>
                    </ul>
                    : user && user.role == "user" ?
                    <ul>
                            <li><Link to ="/user/men's" onClick={navigateToTop}>HOMMES</Link></li>
                            <li><Link to ="/user/women's" onClick={navigateToTop}>FEMMES</Link></li>
                            <li><Link to ="/contact" onClick={navigateToTop}>Contact</Link></li>
                    </ul>:
                    <ul>
                    <li><Link to ="men's" onClick={navigateToTop}>HOMMES</Link></li>
                    <li><Link to ="women's" onClick={navigateToTop}>FEMMES</Link></li>
                    <li><Link to ="/contact" onClick={navigateToTop}>Contact</Link></li>
                    </ul>
                    }
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
                <div class="footer__widget">
                    <h6>Compte</h6>
                    {user && user.role === 'admin' ? 
                    <ul>
                        <li><Link to ="/admin" onClick={navigateToTop}>Mon Compte</Link></li>
                        <li><Link to ="/admin/commandes" onClick={navigateToTop}>Suivi des commandes </Link></li>
                    </ul>    
                : user && user.role === "user"?
                <ul>
                        <li><Link to ="/Profile" onClick={navigateToTop}>Mon Compte</Link></li>
                        <li><Link to ="/user/commandes" onClick={navigateToTop}>Suivi des commandes </Link></li>
                        <li><Link to ="/user/wishlist" onClick={navigateToTop}>Liste des souhaits</Link></li>
                    </ul>
             : user && user.role === "livreur" ?
                    <ul>
                        <li><Link to ="/ProfileLivreur" onClick={navigateToTop}>Mon Compte</Link></li>
                        <li><Link to ="/livreur/commandes" onClick={navigateToTop}>Suivi des commandes </Link></li>
                        
                    </ul>
            :
                    <ul>
                        <li><Link to ="/login" onClick={navigateToTop}>Mon Compte</Link></li>
                        <li><Link to ="/login" onClick={navigateToTop}>Suivi des commandes </Link></li>
                        <li><Link to ="/login" onClick={navigateToTop}>Liste des souhaits</Link></li>
                    </ul>}
                    
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="footer__newslatter">
                    <h6>NEWSLETTER</h6>
                    <form action="#">
                        <input type="text" placeholder="Email"/>
                        <button type="submit" class="site-btn">Subscribe</button>
                    </form>
                    <div class="footer__social">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twi tter"></i>
                        <i class="fa fa-youtube-play"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-pinterest"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
              
                <div class="footer__copyright__text">
                    <p>Frippy © 2023</p>
                </div>
                
            </div>
        </div>
    </div>
</footer>

   </div>
  
   )
  }