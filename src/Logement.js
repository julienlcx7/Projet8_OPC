import React, { useState } from 'react';
import './Logement.scss';
import { useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import data from './backend/back.json';
import Error from './Error';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';

export const Logement = () => {
  const { id_url } = useParams();
  let idValid = false;
  let num_logement = 0;

  const [dropdownVisibility, setDropdownVisibility] = useState({
    Description: false,
    Equipement: false,
  });


  for (let i = 0; i < data.length; i++) {
    const id_apartment = data[i].id;
    if (id_apartment === id_url) {
      idValid = true;
      num_logement = i;
      break;
    }
  }

  if (!idValid) {
    return <Error />;
  }

  localStorage.setItem(num_logement, "num_log");

  // Function to toggle the visibility of a specific dropdown
  const toggleDropdown = (dropdownName) => {
    setDropdownVisibility((prevVisibility) => ({
      ...prevVisibility,
      [dropdownName]: !prevVisibility[dropdownName],
    }));
  };

  const name_apartment = data[num_logement].title;
  const loc_apartment = data[num_logement].location;
  const tags = data[num_logement].tags;
  const name_user = data[num_logement].host.name;
  const img_user = data[num_logement].host.picture;
  const equipments_list = data[num_logement].equipments;
  const description = data[num_logement].description;
  let rating_apartement = data[num_logement].rating;

  return (
    <div className='logement'>
      <Navbar />
      <Slider />
      <div className='description'>
        <div className='info_loc'>
          <h2>{name_apartment}</h2>
          <p>{loc_apartment}</p>
          <div className='tagsContainer'>
            {tags.map((tag, index) => (
              <button key={index} className='tags'>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className='info_user'>
          <div className='id_user'>
            <p>{name_user}</p>
            <img className='pp' src={img_user} alt={name_user} />
          </div>
          <div className='rating'>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${index < rating_apartement ? 'active' : ''}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className='drop_item'>
        <div className="items">
            <button className="item-btn" onClick={() => toggleDropdown('Description')}>
                Description
            </button>
            {/* Show the dropdown content only if dropdownVisible is true */}
            {dropdownVisibility.Description && (
                <div className="item-content1">
                <a href="#" className="item">
                      <p>{description}</p>              
                </a>
                </div>
            )}
            </div>
            <div className="items">
            <button className="item-btn" onClick={() => toggleDropdown('Equipement')}>
                Équipements
            </button>
            {/* Show the dropdown content only if dropdownVisible is true */}
            {dropdownVisibility.Equipement && (
                <div className="item-content2">
                <a href="#" className="item">
                <ul>
                    {equipments_list.map((equipments_list, index) => (
                    <li key={index}>{equipments_list}</li>
                    ))}
                </ul>
                </a>
                </div>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
