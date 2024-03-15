import React, { useState } from 'react';
import './Logement.scss';
import { useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import data from '../backend/back.json';
import Error from '../_utils/Error';
import Dropdown from '../Components/Dropdown/Dropdown';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Slider from '../Components/Slider/Slider';
import Rating from '../Components/Rating/Rating';
import User from '../Components/User/User';
import Tag from '../Components/Tag/Tag';
import Title from '../Components/Title/Title';

export const Logement = () => {
  const { id_url } = useParams();

  const findApartmentIndexById = () => {
    return data.findIndex(apartment => apartment.id === id_url);
  };

  const apartmentIndex = findApartmentIndexById();

  if (apartmentIndex === -1) {
    return <Error />;
  }

  const apartment = data[apartmentIndex];
  const { title: name_apartment, location: loc_apartment, tags, host: { name: name_user, picture: img_user }, equipments, description, rating } = apartment;






  return (
    <div className='logement'>
      <Navbar />
      <Slider />
      <div className='description'>
        <div className='info_loc'>
          <Title name={name_apartment} location={loc_apartment} /> 
          <Tag tags={tags} />
        </div>
        <div className='info_user'>
          <User name={name_user} imageSrc={img_user} alt={name_user} /> 
          <Rating rating={rating} />
        </div>
      </div>
      <div className='drop_item'>
      <Dropdown title="Description" content={description} />
      <Dropdown
        title="Équipements"
        content=
              {equipments.map((equipment, index) => (
                <li className="list" key={index}>{equipment}</li>
              ))}
      />
      </div>
    <Footer/>
    </div> 
  );
};
