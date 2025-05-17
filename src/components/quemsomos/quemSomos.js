import React from "react";
import styles from "./quemSomos.module.css";
import people from '../home/people.jpeg';


function QuemSomos() {
    return (
        <div className={styles.container}>
            <img src={people} className={styles.imagem}></img>
            <div className={styles.infos}>
                <h2 className="text-white">Quem somos?</h2>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default QuemSomos;