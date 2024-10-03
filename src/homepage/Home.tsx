import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="video-container">
        <video autoPlay loop muted controls className="home-video">
          <source src={`${process.env.PUBLIC_URL}/img/vide.mp4`} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>

      <div className="welcome">WELCOME TO</div>

      <div className="center-container">
        <span className="golden">GOLDEN</span>
        <span className="gym">GYM FITNESS</span>
      </div>

      <div className="mo-container">
        <div className="mo">
          <img src={`${process.env.PUBLIC_URL}/img/mo.jpeg`} alt="mo" />
        </div>

        <div className="text-container">
          <span className="founder">FOUNDER</span>
          <span className="fitness">
            “Le fitness est plus qu'un objectif physique,<br /> 
            c'est un voyage vers une version plus forte,<br /> 
            plus confiante de soi. Ici, chaque pas compte<br />
            et chaque victoire est célébrée”
          </span>
          <span className="MONSOONS">MONSOONS</span>
        </div>
        <span className="avis">AVIS CLIENT </span>
        <div>
        <div className="rectangle-container">
        <div className="rectangle"><div className="JOELLE">JOELLE</div></div>
    <div className="rectangle"></div>
    <div className="rectangle"></div>
    <div className="rectangle-container"></div>
    <div className="rectangle1"></div>
    <div className="formuls">FORMULS</div>
    </div>
    <div className="partenaires">
  <p>Nos Partenaires</p>
</div>
    </div>
      </div>
    </main>
  );
}

export default Home;
