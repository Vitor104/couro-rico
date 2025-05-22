import React from "react";
import styles from "./quemSomos.module.css";
import people from '../home/people.jpeg';
import check from "./check-fat.svg";
import { CheckCircle } from 'phosphor-react';

function QuemSomos() {
    return (
        <div className={styles.container} id="sobre">
            
            <div className={styles.infos}>
                <h2 className="text-black">Quem somos?</h2>
            </div>

            <img src={people} className={`img-fluid ${styles.imagem}`}></img>
            <p class="card-text"><small class="text-muted">Nossa equipe pronta para te atender!</small></p>

            <div className={styles.infos}>
                <p className={`text-black ${styles.paragraph}`}>A Couro Rico nasceu na Paraíba com a missão de oferecer produtos artesanais em couro com qualidade, estilo e durabilidade. Cada peça é feita com atenção aos detalhes, pensando em você.</p>
            </div>

            <div className={styles.caracteristicas}>
                <div>
                    <img src={check} className={styles.check}></img> Couro de alta qualidade
                </div>
                
                <div>
                    <img src={check} className={styles.check}></img> Enviamos para todo o Brasil
                </div>
        
            </div>

            
            
        </div>
    )
}

export default QuemSomos;