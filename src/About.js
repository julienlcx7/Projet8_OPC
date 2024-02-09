import React, { useState } from 'react';
import './About.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import bg from './img/bg_about.png';

function About() {
    // State to control the visibility of each dropdown
    const [dropdownVisibility, setDropdownVisibility] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        sécurité: false,
    });

    // Function to toggle the visibility of a specific dropdown
    const toggleDropdown = (dropdownName) => {
        setDropdownVisibility((prevVisibility) => ({
            ...prevVisibility,
            [dropdownName]: !prevVisibility[dropdownName],
        }));
    };

    return (
        <div className="about">
            <Navbar />
            <div className='text_about'>
                <img className="bulle" src={bg} alt="background" />
                <div className="dropdown">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('fiabilite')}>
                        Fiabilité
                    </button>
                    {/* Show the dropdown content only if dropdownVisible is true */}
                    {dropdownVisibility.fiabilite && (
                        <div className="dropdown-content1">
                            <a href="#" className="dropdown-item">
                            Bienvenue sur Kasa, votre partenaire de confiance pour toutes vos recherches de location immobilière. Nous comprenons que la fiabilité est une priorité absolue lorsqu'il s'agit de trouver le lieu idéal pour appeler chez soi. C'est pourquoi nous nous engageons à vous offrir une expérience de location transparente, sûre et fiable à chaque étape de votre parcours.
                            </a>
                        </div>
                    )}

                    <button className="dropdown-btn" onClick={() => toggleDropdown('respect')}>
                        Respect
                    </button>
                    {/* Show the dropdown content only if dropdownVisible is true */}
                    {dropdownVisibility.respect && (
                        <div className="dropdown-content2">
                            <a href="#" className="dropdown-item">
                            Le respect, valeur fondamentale qui transcende les barrières de l'âge, de la culture et des différences, est le pilier sur lequel s'édifie une société harmonieuse. À Kasa, nous croyons en la puissance transformative du respect et nous nous engageons à cultiver un environnement où chacun est honoré et valorisé.
                            </a>
                        </div>
                    )}

                    <button className="dropdown-btn" onClick={() => toggleDropdown('service')}>
                        Service
                    </button>
                    {/* Show the dropdown content only if dropdownVisible is true */}
                    {dropdownVisibility.service && (
                        <div className="dropdown-content3">
                            <a href="#" className="dropdown-item">
                            Découvrez la différence avec Kasa! Des annonces immobilières fiables, un processus transparent, un support réactif. Explorez notre gamme de biens diversifiée. Avec des photos réalistes et des avis authentiques, louez en toute confiance. Simplifiez votre recherche et trouvez la maison parfaite avec nos services exceptionnels.
                            </a>
                        </div>
                    )}
                    <button className="dropdown-btn" onClick={() => toggleDropdown('sécurité')}>
                        Sécurité
                    </button>
                    {/* Show the dropdown content only if dropdownVisible is true */}
                    {dropdownVisibility.sécurité && (
                        <div className="dropdown-content4">
                            <a href="#" className="dropdown-item">
                            Notre site garantit une sécurité robuste à chaque clic. Des protocoles avancés de cryptage des données à une surveillance constante, votre confidentialité est notre priorité. Explorez, louez et naviguez en toute tranquillité, sachant que nous sommes engagés à assurer la protection inébranlable de vos informations.
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
