import React from "react";
import styles from './algunsProdutos.module.css';
import outra from '../home/outrabolsa.webp';

function AlgunsProdutos() {
    return (
        <div className={styles.alguns}>
            <h2>Alguns de nossos produtos</h2>
            <div className={styles.containerAlgunsProdutos}>
                <div className={styles.exemploProdutosUm}>
                    <img src={outra} className={styles.imagem}></img>
                    <p>lorem ipsumafafafafa</p>
                </div>
                <div className={styles.exemploProdutos}></div>
            </div>
        </div>
    )
}


export default AlgunsProdutos;