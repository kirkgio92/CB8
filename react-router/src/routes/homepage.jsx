import Navbar from "../components/navbar/navbar";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="heroWrapper">
        <img
          src="https://png.pngtree.com/background/20230618/original/pngtree-e-commerce-in-georgia-a-captivating-3d-rendering-for-web-and-picture-image_3748801.jpg"
          alt="heroImg"
          className="heroImg"
        />
        <div className="textWrapper">
          <h1 className="mainTitle">The best shopping website!!!</h1>
          <button className="mainBtn">
            <Link to={"/products"}>Check the products now!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
