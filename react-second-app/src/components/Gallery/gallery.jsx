import "./index.css";

const imgGallery = [
  {
    id: 1,
    img: "https://picsum.photos/400/300?24",
    title: "Image Gallery",
  },
  {
    id: 2,
    img: "https://picsum.photos/400/300?25",
    title: "Image Gallery",
  },
  {
    id: 3,
    img: "https://picsum.photos/400/300?26",
    title: "Image Gallery",
  },
  {
    id: 4,
    img: "https://picsum.photos/400/300?27",
    title: "Image Gallery",
  },
  {
    id: 5,
    img: "https://picsum.photos/400/300?28",
    title: "Image Gallery",
  },
  {
    id: 6,
    img: "https://picsum.photos/400/300?29",
    title: "Image Gallery",
  },
];

const Gallery = () => {
  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="imgs__wrapper">
        {imgGallery.map((array) => (
          <img src={array.img} alt={array.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
