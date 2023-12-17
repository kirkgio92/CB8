import { useState } from "react";
import "./index.css";

const imgGallery = [
  {
    id: 1,
    img: "https://picsum.photos/800/400?24",
    title: "Image Gallery 1",
  },
  {
    id: 2,
    img: "https://picsum.photos/800/400?25",
    title: "Image Gallery 2",
  },
  {
    id: 3,
    img: "https://picsum.photos/800/400?26",
    title: "Image Gallery 3",
  },
  {
    id: 4,
    img: "https://picsum.photos/800/400?27",
    title: "Image Gallery 4",
  },
  {
    id: 5,
    img: "https://picsum.photos/800/400?28",
    title: "Image Gallery 5",
  },
  {
    id: 6,
    img: "https://picsum.photos/800/400?29",
    title: "Image Gallery 6",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgGallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="Gallery__wrapper">
        <button onClick={prevSlide}>Previous</button>
        <div className="Gallery__img_wrapper">
          <img
            src={
              imgGallery[
                currentIndex === 0 ? imgGallery.length - 1 : currentIndex - 1
              ].img
            }
            alt={
              imgGallery[
                currentIndex === 0 ? imgGallery.length - 1 : currentIndex - 1
              ].title
            }
            className="smaller_imgs"
          />
          <img
            src={
              imgGallery[
                currentIndex === imgGallery.length - 1 ? 0 : currentIndex + 1
              ].img
            }
            alt={
              imgGallery[
                currentIndex === imgGallery.length - 1 ? 0 : currentIndex + 1
              ].title
            }
            className="smaller_imgs"
          />
        </div>
        <img
          src={imgGallery[currentIndex].img}
          alt={imgGallery[currentIndex].title}
          className="mainImage"
        />
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
