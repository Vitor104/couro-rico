import React from "react";
import styles from "./home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";
import Hero from "../hero/hero";
import AlgunsProdutos from "../algunsProdutos/algunsProdutos";
import QuemSomos from "../quemsomos/quemSomos";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className={styles.container}>
      
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
                <NavLink exact to={"/hero"} className="nav-link">Produtos</NavLink>
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

        <Hero />
        <AlgunsProdutos />
        <QuemSomos />
        <Footer />
    </div>

  );
  

}


export default Home;



/* 
<ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="#" className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to={"/Hero"} className="nav-link">Produtos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Contatos</NavLink>
              </li>
            </ul>



*/