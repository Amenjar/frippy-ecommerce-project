import React, { Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nouveautes from "../Nouveautés/Nouveautes";



 
  

export default function Home() {
  
  return (

    <Fragment>
      
    <div className="hero">
      
      <div class="card bg-dark text-white border-0">
      <img src="assets\img\Banniere_site_-_1560_x_1050_1_1800x.webp" class="card-img" alt="Background" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="SectionHeader__SubHeading Heading u-h6">VOS vêtements d'occasion jusqu’à -90% de réduction </h5>
          <h3 className="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1">
          FRIPERIE EN LIGNE
          </h3>
         
        </div>
         
      </div>
     
    </div>
    <Nouveautes />
   
    </Fragment>




 
  )

}