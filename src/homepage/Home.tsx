import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      <video autoPlay loop muted controls className="home-video">
        <source src={`${process.env.PUBLIC_URL}/img/vide.mp4`} type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <div className="welcome">WELCOME TO</div>

      <div className="center-container">
        <span className="golden">GOLDEN</span>
        <span className="gym">GYM FITNESS</span>
      </div>

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
  <div className="rectangle joelle">JOELLE</div>
  <div className="rectangle romio">ROMIO</div>
  <div className="rectangle tome">TOME</div>
</div>


      
      <div className="rectangle-angela">
  <span className="angela-text">ANGELA</span>
  <span className="experience-text">"magnifique expérience"</span>
  <img className="angela-image" src={`${process.env.PUBLIC_URL}/img/2.png`} alt="Angela" />
</div>
<span className="opinion-text">Exprimer votre opinion:</span>
<div className="rectanglecomm"></div>
<span className="comment-text">Ajouter un commentaire...</span>
<div className="rectangleenv"></div>
<div className="envoyer">Envoyer</div>
<div className="rectangleab1"></div>

<div className="departrap">Départ Rapide</div>




<div className="rectangleab11"><div className="tnd1">40TND</div></div>
<div className="mois1">1 mois</div>
<div className="je1"></div>
<div className="jem1">Je m’abonne</div>
<div className="rectangleab111"></div>
<div className="rectangleab2"></div>
<div className="energboost">Énergie Boost</div>
<div className="tnd2">100TND</div>
<div className="mois3">3 mois</div>
<div className="je2"></div>
<div className="jem2">Je m’abonne</div>



<div className="rectangleab22"></div>
<div className="rectangleab222"></div>
<div className="rectangleab3"></div>
<div className="transfo">Transformation Complète</div>

<div className="rectangleab33"></div>
<div className="tnd400">400TND</div>
<div className="je3"></div>
<div className="mois12">12 mois</div>
<div className="jem3">Je m’abonne</div>
<div className="rectangleab333"></div>
<div className="rectangleab4"></div>
<div className="durable">Force Durable</div>

<div className="rectangleab44"></div>
<div className="tnd200">200TND</div>
<div className="mois6">6 mois</div>
<div className="jem4">Je m’abonne</div>
<div className="je4"></div>

<div className="rectangleab444"></div>
<div className="rectangleab5"></div>
<div className="bac">Special BAC</div>
<div className="tnd50">50TND</div>
<div className="seance">4 seances </div>
<div className="jem5">Je m’abonne</div>
<div className="rectangleab55"></div>
<div className="rectangleab555"></div>
<div className="je5"></div>

      <span className="formuls">FORMULS</span>
      <span className="partenaires">NOS PARTENNERS</span>
      <img className="circular-image1" src={`${process.env.PUBLIC_URL}/img/dec.png`} alt="dec" />
      <img className="circular-image2" src={`${process.env.PUBLIC_URL}/img/spor.jpeg`} alt="spor" />
      <img className="circular-image3" src={`${process.env.PUBLIC_URL}/img/eas.jpg`} alt="eas" />
      <img className="circular-image4" src={`${process.env.PUBLIC_URL}/img/bio.jpeg`} alt="bio" />
      <img className="circular-image5" src={`${process.env.PUBLIC_URL}/img/my.jpeg`} alt="my" />
    </main>
  );
}

export default Home;
