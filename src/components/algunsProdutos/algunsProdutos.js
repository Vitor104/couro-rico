import React from "react";
import styles from './algunsProdutos.module.css';
import outra from '../home/outrabolsa.webp';

function AlgunsProdutos() {
    return (
        <div className={styles.alguns} id="alguns">
            <h2 className="text-white">Alguns de nossos produtos</h2>

           <div className={`card ${styles.card}`}>
            <img src={outra} className={`card-img-top ${styles.imgCard}`} alt="..."></img>
            <div className={`card-body`}>
                <h5 className={`card-title text-white ${styles.titulo}`}>Bolsa</h5>
                <p className={`card-text text-white ${styles.description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="https://wa.me/5583993104113" 
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-warning ${styles.btt}`}>Comprar</a>
            </div>
            </div>
            
            

            <div className={`card ${styles.card}`}>
            <img src={outra} className={`card-img-top ${styles.imgCard}`} alt="..."></img>
            <div className={`card-body`}>
                <h5 className={`card-title text-white ${styles.titulo}`}>Bolsa</h5>
                <p className={`card-text text-white ${styles.description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="https://wa.me/5583993104113" 
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-warning ${styles.btt}`}>Comprar</a>
            </div>
            </div>

            <button type="button" className="btn btn-warning btn-lg">Ver todos os produtos</button>
        </div>
    )
}



export default AlgunsProdutos;