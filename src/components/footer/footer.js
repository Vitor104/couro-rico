import React from "react";
import styles from './footer.module.css';
import InstagramLogo from './instagram-logo.svg';
import Whatsapp from './whatsapp-logo.svg';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.tituloEInfo}>
                <h3>Couro Rico</h3>
                <p>Acessórios diretamente da paraíba para todo o Brasil!</p>
            </div>
            <div className={styles.contatosTexto}>
                <h3>Contato</h3>
                <p>Whatsapp: (83) 99310-4113</p>
            </div>
            <div className={styles.contatosIcon}>
                <a href="https://www.instagram.com/couro_rico/"><img src={InstagramLogo}></img></a>
                <a 
                href="https://wa.me/5583993104113" 
                target="_blank"
                rel="noopener noreferrer"              
                ><img src={Whatsapp}></img></a>
                
            </div>
        </div>
    )
}


export default Footer;