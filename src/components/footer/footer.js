import React from "react";
import styles from './footer.module.css';
import InstagramLogo from './instagram-logo.svg';
import Whatsapp from './whatsapp-logo.svg';

function Footer() {
    return (
        <div className={styles.container} id="contato">
            <div className={styles.tituloEInfo}>
                <h3>Couro Rico</h3>
                <p className={styles.paragraph}>Acessórios diretamente da paraíba para todo o Brasil!</p>
            </div>
            <div className={styles.contatosTexto}>
                <h3>Contato</h3>
                <p>Whatsapp: (83) 99310-4113</p>
            </div>
            <div className={styles.contatosIcon}>
                <a href="https://www.instagram.com/couro_rico/" className={styles.imgFromFooter}>
                <img className={`bg-white ${styles.footerImg}`} src={InstagramLogo} alt="Instagram Icon"></img></a>

                <a 
                href="https://wa.me/5583993104113" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imgFromFooter}        
                ><img src={Whatsapp} className={`bg-white ${styles.footerImg}`} alt="Whatsapp Icon"></img></a>
                
            </div>
        </div>
    )
}


export default Footer;