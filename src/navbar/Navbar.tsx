<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from './img/logo.png';


function Navbar() {
  const [value,setValue]=useState("");
  function handleChange(event: { target: { value: React.SetStateAction<string>; }; } ){
    setValue(event.target.value)
  }
=======
import React from "react";
import styles from "./Navbar.module.css";
import logo from './img/logo.png';

function Navbar() {
>>>>>>> 1d0612e4e56db141e3002bcbf5e1dc7b4b0431db
  return (
    <main className={styles.main}>
      <div className={styles.divlivraison}>
        <p>Livraison gratuite à partir de 50DT</p>
      </div>
      <nav>
        <div className={styles.divlogo1}>
          <p className={styles.px}></p>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.golden}>GOLDEN GYM</div>
<<<<<<< HEAD
          <div className={styles.BarreDeRecherche}>
            <div className={styles.input}>
              <input type="text" value={value} onChange={handleChange} />
              <button>
                <span className="iconRecherche">rechercher</span>
              </button>
            </div>
          </div>
=======
>>>>>>> 1d0612e4e56db141e3002bcbf5e1dc7b4b0431db
        </div>
      </nav>
      <nav>
        <div className={styles.divlogo2}>
          <div className={styles.contenue}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accueil</div>
          <div className={styles.contenue}>Assistance</div>
          <div className={styles.contenue}>Cours</div>
          <div className={styles.contenue}>Coach</div>
          <div className={styles.contenue}>Store</div>
        </div>
      </nav>

    </main>
  );
}

export default Navbar;




