import React from "react";
import styles from "./home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bolsa from './bag-1052370_1920.jpg';
import Hero from "../hero/hero";
import { NavLink } from "react-bootstrap";


function Home() {
  return (
    <div className={styles.container}>

      <a href="../hero/hero">Hgagfa</a>
      
      <nav className={`navbar navbar-expand-lg ${styles.navPerso}`}>
        <NavLink to="#" className={styles.logo}>Couro Rico</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="#" className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Hero" className="nav-link">Produtos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Contatos</NavLink>
              </li>
            </ul>
            
          </div>
        </nav>
       


        <div class="media">
  
  <div class="media-body bg-light">
    <h5 class="mt-0">Top-aligned media</h5>
    <img src={bolsa} className={`align-self-start mr-3 ${styles.fotos}`} alt="..."></img>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
    </div>
  );
}


export default Home;
