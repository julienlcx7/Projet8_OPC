import React from 'react';
import './Card.scss';
import bg from '../../img/bg.jpg';
import data from '../../backend/back.json';
import { Link } from 'react-router-dom';
function getApartmentTitles(data) {
  const titles = data.map((apartement) => apartement.title);
  const id = data.map((apartement) => apartement.id)
  const aimg = data.map((apartement) => apartement.cover)
  return {titles, aimg, id };
}

function Card_apartement(titles, aimg, id) {
    const apartmentElements = [];
  
    for (let i = 0; i < data.length; i++) {
      const name_apartement = titles.titles[i];
      const img_apartement = titles.aimg[i];
      const id_apartement = titles.id[i];
  
      if (name_apartement && img_apartement) {
        const location = (
            <div key={i} className="location">
            <Link to={`logement/${id_apartement}`}>
            <img id="img_apartement" src={img_apartement} alt={`Apartement ${i + 1}`} />
            <p>{name_apartement}</p></Link>
          </div>
        );
  
        apartmentElements.push(location);
  
        console.log(name_apartement);
      }
    }
  
    return apartmentElements;
  }
  

  function Card() {
    const apartmentTitles = getApartmentTitles(data);
    const apartmentElements = Card_apartement(apartmentTitles);
  
    return (
      <div className="card">
        <header>
          <img src={bg} alt="background" />
          <p>Chez vous, partout et ailleurs</p>
        </header>
        <main>
            {apartmentElements}
        </main>
      </div>
    );
  }


export default Card;