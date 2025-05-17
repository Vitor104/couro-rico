import React from "react";
import styles from './algunsProdutos.module.css';
import outra from '../home/outrabolsa.webp';

function AlgunsProdutos() {
    return (
        <div className={styles.alguns}>
            <h2 className="text-white">Alguns de nossos produtos</h2>
            <div className={styles.containerExemplos}>
                <img src={outra} className={styles.image}></img>
                <div className={styles.infos}>
                    <h1 className="text-white">Bolsa</h1>
                    <p className="text-white">R$ 100,00</p>
                    <button type="button" className="btn btn-warning">Comprar</button>
                </div>
            </div>

            <div className={styles.containerExemplos}>
                <div className={styles.infos}>
                    <h1 className="text-white">Bolsa</h1>
                    <p className="text-white">R$ 100,00</p>
                    <button type="button" className="btn btn-warning">Comprar</button>
                </div>
                <img src={outra} className={styles.image}></img>
            </div>

            <button type="button" class="btn btn-warning btn-lg">Ver todos os produtos</button>
        </div>
    )
}


export default AlgunsProdutos;