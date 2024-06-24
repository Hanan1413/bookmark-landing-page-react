// import { pageLinks } from "../../data";
import styles from "./Nav.module.css";
import logo from "../../images/logo-bookmark.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function Nav({ pageLinks }) {
  return (
    <nav className={styles.desktopNav}>
      <div >
        <img src={logo} alt="" className={styles.logo} />
      </div>
      <ul className={styles.navItem}>
        {pageLinks.map((link) => {
          const { href, id, text } = link;

          return (
            <li key={id}>
              <a href={href }className={`${styles.link} ${styles.darkNav}`}>
                {text}
              </a>
            </li>
          );
        })}

        <Button
          text="login"
          bgColor={styles.redBtn}
          padding=".8rem 2.05rem .7rem"
        />
      </ul>
    </nav>
  );
}

export default Nav;
