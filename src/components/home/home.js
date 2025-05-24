import React from "react";
import styles from "./home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
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
            <ul className={`navbar-nav ${styles.ul}`}>
              <li className={`nav-item text-black ${styles.li}`}>
                <Link to="alguns" smooth={true} duration={500}>
                  Produtos
                </Link>
              </li>
              <li className={`nav-item text-black ${styles.li}`}>
                <Link to="sobre" smooth={true} duration={500}>
                  Sobre
                </Link>
              </li>
              <li className={`nav-item text-black ${styles.li}`}>
                <Link to="contato" smooth={true} duration={500}>
                  Contato
                </Link>
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



