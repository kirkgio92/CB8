import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faListDots } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.LogoWrapper}>
        <FontAwesomeIcon
          className={styles.Icons}
          icon={faArrowCircleLeft}
          size="2x"
        />
        <img src="https://img.logoipsum.com/290.svg" alt="logo" />
      </div>
      <div className={styles.IconsWrapper}>
        <FontAwesomeIcon
          className={styles.Icons}
          icon={faHeartCirclePlus}
          size="2x"
        />
        <FontAwesomeIcon className={styles.Icons} icon={faSearch} size="2x" />
        <FontAwesomeIcon
          className={styles.Icons}
          icon={faBagShopping}
          size="2x"
        />
        <FontAwesomeIcon className={styles.Icons} icon={faListDots} size="2x" />
      </div>
    </div>
  );
}
