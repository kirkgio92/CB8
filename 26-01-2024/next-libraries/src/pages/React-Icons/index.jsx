import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaShoppingCart,
} from "react-icons/fa";

export default function ReactIcons() {
  return (
    <>
      <h1>React Icons</h1>
      <p>How to install: npm install react-icons</p>
      <p>some example following</p>
      <FaInstagram size={30} color="orange" />
      <br />
      <FaFacebook size={30} color="blue" />
      <br />
      <FaShoppingCart size={30} color="yellow" />
      <br />
      <FaGithub size={30} color="red" />
    </>
  );
}
