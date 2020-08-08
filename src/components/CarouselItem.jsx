import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const itemTitle = "Título descriptivo";
const itemSubtitle = "2019 16+ 114 minutos";

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={play} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={plus} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{itemTitle}</p>
          <p className="carousel-item__details--subtitle">{itemSubtitle}</p>
        </div>
    </div>
);

export default CarouselItem;