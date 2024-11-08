import React, { useState } from 'react';
import './Store.css';

function Store() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(3); // Index de l'image principale

    // Liste des images
    const images = [
        `${process.env.PUBLIC_URL}/img/gant.png`,
        `${process.env.PUBLIC_URL}/img/sport1.png`,
        `${process.env.PUBLIC_URL}/img/sq.png`,
        `${process.env.PUBLIC_URL}/img/whey3.png`,  // Image principale initiale
        `${process.env.PUBLIC_URL}/img/corde.png`,
        `${process.env.PUBLIC_URL}/img/altere.png`,
        `${process.env.PUBLIC_URL}/img/sport2.png`
    ];

    // Liste des produits Mass Gainer avec prix
    const massGainerProducts = [
        { id: 1, name: 'Serious Mass Gainer', price: '100,000 TND', image: '/img/masse1.png' },
        { id: 2, name: 'Super Mass Gainer', price: '120,000 TND', image: '/img/masse2.png' },
        { id: 3, name: 'Anabolic Mass Gainer', price: '110,000 TND', image: '/img/masse3.png' },
        { id: 4, name: 'Essential Gainer', price: '130,000 TND', image: '/img/masse4.png' },
    ];

    // Liste des produits Whey Proteine avec prix
    const wheyProteineProducts = [
        { id: 1, name: 'Dual Phase', price: '95,000 TND', image: '/img/whey1.png' },
        { id: 2, name: 'Pulse Sports', price: '75,000 TND', image: '/img/whey2.png' },
        { id: 3, name: 'Premium Whey', price: '180,000 TND', image: '/img/whey3.png' },
        { id: 4, name: 'Vegan Whey Protein', price: '45€', image: '/img/whey4.png' },
    ];

    // Liste des produits Equipements
    const equipmentProducts = [
        { id: 1, name: 'Haltère russe', price: '35,000 TND', image: '/img/sq.png' },
        { id: 2, name: 'Gants, sangles', price: '54,000 TND', image: '/img/gant.png' },
        { id: 3, name: 'CORDE A SAUTER', price: '24,000 TND', image: '/img/corde.png' },
        { id: 4, name: 'Haltère Fitness', price: '45,000 TND', image: '/img/altere.png' },
    ];

    // Liste des produits Vêtements
    const clothingProducts = [
        { id: 1, name: 'T-shirt de compression Femme', price: '60,000 TND', image: '/img/shirt1.jpeg' },
        { id: 2, name: 'T-shirt de compression Homme', price: '60,000 TND', image: '/img/shirt2.jpeg' },
        { id: 3, name: 'T-shirt de compression Femme', price: '75,000 TND', image: '/img/shirt3.jpeg' },
        { id: 4, name: 'T-shirt de compression Femme', price: '85,000 TND', image: '/img/sport1.png' },
    ];

    // Liste des produits Creatine
    const creatineProducts = [
        { id: 1, name: 'Creatine Monohydrate', price: '25€', image: '/img/creatine1.jpeg' },
        { id: 2, name: 'Creatine HCL', price: '35€', image: '/img/creatine2.png' },
        { id: 3, name: 'Creatine Ethyl Ester', price: '40€', image: '/img/creatine3.jpeg' },
        { id: 4, name: 'Creatine Blend', price: '50€', image: '/img/creatine4.png' },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <nav className="navbarstore">
                <h1 className="store-text">Golden Gym produits</h1>
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    Protéine
                    <span className={`triangle ${isDropdownOpen ? 'up' : 'down'}`}>&#9660;</span>
                </button>
                {isDropdownOpen && (
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">Whey</li>
                        <li className="dropdown-item">Caseine</li>
                        <li className="dropdown-item">Vegan</li>
                    </ul>
                )}
                <img src={`${process.env.PUBLIC_URL}/img/photo.webp`} alt="Store Logo" className="store-image" />
            </nav>

            <h1 className="centered-text">Our Store</h1>

            <div className="carousel">
                <button className="carousel-arrow left-arrow" onClick={prevImage}>&#9664;</button>
                <div className="carousel-images">
                    <img src={images[(currentIndex - 3 + images.length) % images.length]} alt="Image gauche 1" className="small-image" />
                    <img src={images[(currentIndex - 2 + images.length) % images.length]} alt="Image gauche 2" className="small-image" />
                    <img src={images[(currentIndex - 1 + images.length) % images.length]} alt="Image gauche 3" className="small-image" />
                    <img src={images[currentIndex]} alt="Image principale" className="image-principale" />
                    <img src={images[(currentIndex + 1) % images.length]} alt="Image droite 1" className="small-image" />
                    <img src={images[(currentIndex + 2) % images.length]} alt="Image droite 2" className="small-image" />
                    <img src={images[(currentIndex + 3) % images.length]} alt="Image droite 3" className="small-image" />
                </div>
                <button className="carousel-arrow right-arrow" onClick={nextImage}>&#9654;</button>
            </div>

            <h1 className="centered-text1">Mass Gainer</h1>
            <div className="product-list">
                {massGainerProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-btn">Ajouter au panier</button>
                    </div>
                ))}
            </div>

            <h1 className="centered-text2">Whey Proteine</h1>
            <div className="product-list">
                {wheyProteineProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-btn">Ajouter au panier</button>
                    </div>
                ))}
            </div>

            <h1 className="centered-text3">Equipements</h1>
            <div className="product-list">
                {equipmentProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-btn">Ajouter au panier</button>
                    </div>
                ))}
            </div>

            <h1 className="centered-text4">Vêtements</h1>
            <div className="product-list">
                {clothingProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-btn">Ajouter au panier</button>
                    </div>
                ))}
            </div>

            <h1 className="centered-text5">Creatine</h1>
            <div className="product-list">
                {creatineProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-btn">Ajouter au panier</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;
