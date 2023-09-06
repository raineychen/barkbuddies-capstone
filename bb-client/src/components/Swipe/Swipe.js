import React, { useState } from "react";
import heart from '../../assets/Images/heart.png';
import xMark from '../../assets/Images/x_mark.png';
import Atticus from '../../assets/Images/default.jpeg';

import "./Swipe.scss";

const Swipe = () => {
  const initialCards = [
    { id: 1, name: "Atticus", age:"2 years old", gender:"male", breed:"golden doodle", distance:"0.0 km away", image:'https://i.imgur.com/1HXsZ9j.jpeg' },
    { id: 2, name: "Vanilla", age:"2 years old", gender:"male", breed:"golden doodle", distance:"0.0 km away", image: "dog2.jpg" },
    { id: 3, name: "Dog", age:"2 years old", gender:"male", breed:"golden doodle", distance:"0.0 km away", image: "dog3.jpg" },
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  const handleSwipe = (direction) => {
    setLastDirection(direction);

    // Delay the card transition to allow time for the animation
    setTimeout(() => {
      setCurrentCardIndex(currentCardIndex + 1);
      setLastDirection(null);
    }, 200);
  };

  return (
    <div className="card-container">
      {cards.slice(currentCardIndex, currentCardIndex + 1).map((card) => (
        <div
          key={card.id}
          className={`card ${lastDirection ? `swiped-${lastDirection}` : ""}`}
        >
          <img src={card.image} alt={card.name} />
          <div className="swipe__text">
          <h2>{card.name} {card.age}</h2>
          <p>{card.gender} {card.breed} {card.distance}</p>
          </div>
          <div className="swipe__icon">
          <button
            className="dislike-button"
            onClick={() => handleSwipe("left")}
          >
            <img className="swipe__icons" src={xMark} alt="x-mark" />
          </button>
          <button
            className="like-button"
            onClick={() => handleSwipe("right")}
          >
            <img className="swipe__icons" src={heart} alt="heart icon" />
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Swipe;
