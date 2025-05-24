import React from "react";
import styles from './hero.module.css';
import bolsa from '../home/bolsa exemplo.webp';


function Hero() {
    return (
        <div className={styles.hero} id="hero">
            <div className={styles.imageContainer}>
            <div className={styles.textContent}>
                <h1 className={styles.titulo}>Você merece o melhor!</h1>
                <h5 className={`font-italic ${styles.description}`}>Acessórios diretamente da Paraíba para todo o Brasil!</h5>
            </div>
                <img src={bolsa} className={styles.imagem} alt="Bolsa de couro" />
            </div>

       


        </div>



    )
}

export default Hero;