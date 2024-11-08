import React, { useState } from 'react';
import './inscription.css';

function Inscription() {
    // États distincts pour les champs de connexion et d'inscription
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Gestion des changements pour chaque champ d'entrée
    const handleLoginUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setLoginUsername(event.target.value);
    const handleLoginPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setLoginPassword(event.target.value);
    const handleSignupEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setSignupEmail(event.target.value);
    const handleSignupUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setSignupUsername(event.target.value);
    const handleSignupPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setSignupPassword(event.target.value);
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value);

    // Soumission du formulaire d'inscription
    const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (signupPassword !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        const client = { name: signupUsername, email: signupEmail, password: signupPassword };

        try {
            const response = await fetch("http://localhost:9000/client/AddClient", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(client),
            });

            if (response.ok) {
                alert("Compte créé avec succès");
                setSignupEmail('');
                setSignupUsername('');
                setSignupPassword('');
                setConfirmPassword('');
            } else {
                alert("Erreur lors de la création du compte");
            }
        } catch (error) {
            console.error("Erreur :", error);
            alert("Une erreur s'est produite");
        }
    };

    // Soumission du formulaire de connexion
    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const loginData = { name: loginUsername, password: loginPassword };

        try {
            const response = await fetch("http://localhost:9000/client/trouvClient", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                if (result) {
                    alert("Connexion réussie");
                } else {
                    alert("Nom d'utilisateur ou mot de passe incorrect");
                }
            } else {
                alert("Erreur lors de la vérification du client");
            }
        } catch (error) {
            console.error("Erreur :", error);
            alert("Une erreur s'est produite");
        }
    };

    return (
        <div className="adm">
            <div className="line"></div>
            <img src={`${process.env.PUBLIC_URL}/img/adm.png`} alt="Description de l'image" />
            <div className="line"></div>

            <div className="rectangle1"></div>
            <div className="rectangle2"></div>

            <div className="texte-centre1">Vous avez déjà un compte</div>
            <div className="texte-centre2">Connectez-vous ici</div>
            <div className="texte-centre3">Tu n'as pas de compte?</div>
            <div className="texte-centre4">Inscrivez-vous maintenant</div>

            <div className="form-container">
                {/* Formulaire de connexion */}
                <form onSubmit={handleLoginSubmit}>
                    <div className="input-group1">
                        <input
                            type="text"
                            value={loginUsername}
                            onChange={handleLoginUsernameChange}
                            placeholder="Nom d'utilisateur"
                        />
                    </div>
                    <div className="input-group2">
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={handleLoginPasswordChange}
                            placeholder="Mot de passe"
                        />
                    </div>
                    <button type="submit" className="submit-btn1">Connectez-vous</button>
                </form>

                {/* Formulaire d'inscription */}
                <form onSubmit={handleSignupSubmit}>
                    <div className="input-group3">
                        <input
                            type="text"
                            value={signupEmail}
                            onChange={handleSignupEmailChange}
                            placeholder="E-Mail"
                        />
                    </div>
                    <div className="input-group4">
                        <input
                            type="text"
                            value={signupUsername}
                            onChange={handleSignupUsernameChange}
                            placeholder="Nom d'utilisateur"
                        />
                    </div>
                    <div className="input-group5">
                        <input
                            type="password"
                            value={signupPassword}
                            onChange={handleSignupPasswordChange}
                            placeholder="Mot de passe"
                        />
                    </div>
                    <div className="input-group6">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="Confirmez le mot de passe"
                        />
                    </div>
                    <button type="submit" className="submit-btn2">Inscrivez-vous</button>
                </form>

                {/* Images et rectangles */}
                <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="Description de l'image" className="image1" />
                <img src={`${process.env.PUBLIC_URL}/img/log.png`} alt="Description de l'image" className="image2" />
                <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="Description de l'image" className="image4" />
                <img src={`${process.env.PUBLIC_URL}/img/log.png`} alt="Description de l'image" className="image5" />
                <img src={`${process.env.PUBLIC_URL}/img/log.png`} alt="Description de l'image" className="image6" />
                <img src={`${process.env.PUBLIC_URL}/img/or.png`} alt="Description de l'image" className="image7" />

                <div className="rectanglein1"></div>
                <div className="rectanglein2"></div>
                <div className="rectanglein3"></div>
                <div className="rectanglein4"></div>
                <div className="rectanglein5"></div>
                <div className="rectanglein6"></div>
            </div>
        </div>
    );
}

export default Inscription;
