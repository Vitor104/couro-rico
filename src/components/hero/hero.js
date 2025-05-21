import React from "react";
import styles from './hero.module.css';
import bolsa from '../home/bolsa exemplo.webp';


function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.imageContainer}>
                <h1 className={styles.titulo}>Você merece o melhor!</h1>
                <img src={bolsa} className={styles.imagem}></img>
                <h5>Acessórios diretamente da paraíba para todo o Brasil!</h5>
            </div>
        </div>
    )
}

/*
            <div className={styles.imageContainer}>
                <h1 className={styles.titulo}>Você merece o melhor!</h1>
                <img src={bolsa} className={styles.imagem}></img>
                <h3>Acessórios diretamente da paraíba para todo o Brasil!</h3>
            </div>


*/ 

export default Hero;