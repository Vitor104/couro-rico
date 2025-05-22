import React from "react";
import styles from './algunsProdutos.module.css';
import outra from '../home/outrabolsa.webp';

function AlgunsProdutos() {
    return (
        <div className={styles.alguns} id="alguns">
            <h2 className="text-white">Alguns de nossos produtos</h2>

           <div class={`card ${styles.card}`}>
            <img src={outra} class={`card-img-top ${styles.teste}`} alt="..."></img>
            <div class="card-body">
                <h5 class="card-title text-white">Bolsa</h5>
                <p class="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="btn btn-warning">Comprar</a>
            </div>
            </div>
            
            

            <div class={`card ${styles.card}`}>
            <img src={outra} class={`card-img-top ${styles.teste}`} alt="..."></img>
            <div class="card-body">
                <h5 class="card-title text-white">Bolsa</h5>
                <p class="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="btn btn-warning">Comprar</a>
            </div>
            </div>

            <button type="button" class="btn btn-warning btn-lg">Ver todos os produtos</button>
        </div>
    )
}



/*
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




*/

export default AlgunsProdutos;