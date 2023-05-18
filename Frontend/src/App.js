import "./App.css";
import Login from "./Components/Login/Login";
import Inscription from "./Components/Register/Register";
import { Routes,Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Womens from "./Components/Women's/Women's";
import Mens from "./Components/Men's/Men's"; 

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Wishlist from "./Components/Navbar/Wishlist/Wishlist";
import ShoppingCart from "./Components/Navbar/ShoppingCart/ShoppingCart";
import Admin from "./Components/Admin/admin";
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./Components/Private/PrivateRoute";
import PrivateRouteAdmin from "./Components/Private/PrivateRouteAdmin";
import ListOfUsers from "./Components/Admin/users";
import CreateProduct from "./Components/Admin/Products/create";
import ListOfProductsHomme from "./Components/Admin/Products/Homme";
import ListOfProductsFemme from "./Components/Admin/Products/Femme";
import ProductsHomme from "./Components/Profile/Products/Homme";
import ProductsFemme from "./Components/Profile/Products/Femme";
import DetailsProduct from "./Components/Profile/Products/DetailsProduct";
import ListOfCommandes from "./Components/Admin/commandes";
import ListOfCommandesUser from "./Components/Profile/commande";
import { useEffect, useState } from "react";
import DetailsCommande from "./Components/Profile/detailsCommande";
import DetailsUser from "./Components/Admin/detailsUser";
import PrivateRouteLivreur from "./Components/Private/PrivateRouteLivreur";
import ListOfCommandesLivreur from "./Components/Livreur/commandes";
import ProfileLivreur from "./Components/Livreur/profileLivreur";
import DetailsCommandeLivreur from "./Components/Livreur/detailsCommandeLivreur";
import { useDispatch } from "react-redux";
import { getCurrent } from "./redux/actions/auth";
import DetailsProduit from "./Components/Women's/detailsProduit";

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getCurrent());
  },[])
  const [search, setSearch] = useState("");

  return (
   <div>
     <Navbar search={search} setSearch={setSearch}/>
    <Routes>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>  
      <Route path="/women's" element={<Womens search={search}/>}/> 
      <Route path="/men's" element={<Mens search={search}/>}/> 
      <Route path="/productHome/:id" element={<DetailsProduit></DetailsProduit>}/>
      <Route path="/user/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/shoppingcart" element={<PrivateRoute><ShoppingCart/></PrivateRoute>}/>
      <Route path="/admin" element={<PrivateRouteAdmin><Admin/></PrivateRouteAdmin>}/>
      <Route path="/admin/users" element={<PrivateRouteAdmin><ListOfUsers search={search}></ListOfUsers></PrivateRouteAdmin>}/>
      <Route path="/admin/users/:id" element={<PrivateRouteAdmin><DetailsUser></DetailsUser></PrivateRouteAdmin>}/>
      <Route path="/admin/commandes" element={<PrivateRouteAdmin><ListOfCommandes></ListOfCommandes></PrivateRouteAdmin>}/>
      <Route path="/admin/create" element={<PrivateRouteAdmin><CreateProduct></CreateProduct></PrivateRouteAdmin>}/>
      <Route path="/admin/men's" element={<PrivateRouteAdmin><ListOfProductsHomme search={search}></ListOfProductsHomme></PrivateRouteAdmin>}/>
      <Route path="/admin/women's" element={<PrivateRouteAdmin><ListOfProductsFemme search={search}></ListOfProductsFemme></PrivateRouteAdmin>}/>
      <Route path="/user/Men's" element={<PrivateRoute><ProductsHomme search={search}></ProductsHomme></PrivateRoute>}/>
      <Route path="/user/women's" element={<PrivateRoute><ProductsFemme search={search}></ProductsFemme></PrivateRoute>}/>
      <Route path="/user/commandes" element={<PrivateRoute><ListOfCommandesUser></ListOfCommandesUser></PrivateRoute>}/>
      <Route path="/product/:id" element={<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>}/>
      <Route path="/commande/:id" element={<PrivateRoute><DetailsCommande></DetailsCommande></PrivateRoute>}/>
      <Route path="/livreur/commandes" element={<PrivateRouteLivreur><ListOfCommandesLivreur></ListOfCommandesLivreur></PrivateRouteLivreur>}/>
      <Route path="/ProfileLivreur" element={<PrivateRoute><ProfileLivreur/></PrivateRoute>}/>
      <Route path="/Profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/commande/:id" element={<PrivateRouteLivreur><DetailsCommandeLivreur/></PrivateRouteLivreur>}/>
    </Routes>
    <Footer />

    
   </div>
  );
}


export default App;


                
