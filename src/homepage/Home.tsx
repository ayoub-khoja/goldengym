import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
<<<<<<< HEAD
      <video autoPlay loop muted controls className="home-video">
        <source src={`${process.env.PUBLIC_URL}/img/vide.mp4`} type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
=======
      <div className="video-container">
        <video autoPlay loop muted controls className="home-video">
          <source src={`${process.env.PUBLIC_URL}/img/vide.mp4`} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>
>>>>>>> 1d0612e4e56db141e3002bcbf5e1dc7b4b0431db

      <div className="welcome">WELCOME TO</div>

      <div className="center-container">
        <span className="golden">GOLDEN</span>
        <span className="gym">GYM FITNESS</span>
      </div>

<<<<<<< HEAD
      <div className="mo">
        <img src={`${process.env.PUBLIC_URL}/img/mo.jpeg`} alt="mo" />
      </div>

      <span className="founder">FOUNDER</span>
      <span className="fitness">
        “Le fitness est plus qu'un objectif physique,<br /> 
        c'est un voyage vers une version plus forte,<br /> 
        plus confiante de soi. Ici, chaque pas compte<br />
        et chaque victoire est célébrée”
      </span>
      <span className="MONSOONS">MONSOONS</span>
      <span className="avis">AVIS CLIENT</span>

      <div className="rectangle-container">
        <div className="rectangle">RECTANGLE 1</div>
        <div className="rectangle">RECTANGLE 2</div>
        <div className="rectangle">RECTANGLE 3</div>
      </div>

      <div className="rectangle-joelle">
        JOELLE
      </div>

      <span className="formuls">FORMULS</span>
      <span className="partenaires">Nos Partenaires</span>
=======
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
>>>>>>> 1d0612e4e56db141e3002bcbf5e1dc7b4b0431db
    </main>
  );
}

export default Home;
