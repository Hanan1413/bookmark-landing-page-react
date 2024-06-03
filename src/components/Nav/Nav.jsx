import { pageLinks } from "../../data";
import styles from "./Nav.module.css";
import logo from "../../images/logo-bookmark.svg";
import Button from "../Buttons/Button";

function Nav() {
  return (
    <nav className={styles.desktopNav}>
      <img src={logo} alt="" className={styles.logo} />

      <ul className={styles.navItem}>
        {pageLinks.map((link) => {
          const { href, id, text } = link;

          return (
            <li key={id}>
              <a href={href} className={`${styles.link} ${styles.darkNav}`}>
                {text}
              </a>
            </li>
          );
        })}

        <Button text="login" bgColor={styles.redBtn} />
      </ul>
    </nav>
  );
}

export default Nav;
