import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
           <footer className="footer"></footer>
           <img className="logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="dec" />
           <div className="golden1">GOLDEN GYM</div>
           <div className="descr">           GOLDEN GYM TUNISIA est une <br/> &nbsp;&nbsp;boutique en ligne destiné à la<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vente de compléments<br/> &nbsp;&nbsp;&nbsp;&nbsp;alimentaires, vêtements et<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; équipements sportifs</div>
           <img className="logo1" src={`${process.env.PUBLIC_URL}/img/loc.png`} alt="dec" />
           <div className="loc1">alain savari , Mahdia, Tunisia</div>

           
           <img className="logo2" src={`${process.env.PUBLIC_URL}/img/tel.png`} alt="dec" />
           <div className="tel1">52 361 590</div>
           <img className="logo3" src={`${process.env.PUBLIC_URL}/img/email.jpg`} alt="dec" />
           <div className="email1">musclenutrition.tn@gmail.com</div>
        </footer>
    );
}

export default Footer;
