import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./index.css";

const Card = ({ frontImg, alt, dayNumber, backImg }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <div className="card" onClick={flipCard}>
          <img className="img__front" src={backImg} alt={alt} />
          <h2>{dayNumber}</h2>
        </div>
        <div className="card card__back" onClick={flipCard}>
          <img className="img__back" src={frontImg} alt={alt} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
