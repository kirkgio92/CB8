import "./index.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar__list">
        <img
          className="NavBar__UserImage"
          src="https://robohash.org/kirkGio?set=set5"
          alt="user"
        />
        <li>
          <a href="/">Community</a>
        </li>
        <li>
          <a href="/">Chat</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
      </ul>
      <a href="/">
        <img
          className="NavBar__logo"
          src="https://img.logoipsum.com/223.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default NavBar;
