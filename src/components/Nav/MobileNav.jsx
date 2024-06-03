import { useState } from "react";
import styles from "./MobileNav.module.css";
// import logo from
import close from "../../images/icon-close.svg";
import hamburger from "../../images/icon-hamburger.svg";
import logo from "../../images/logo-bookmark.svg";
import logoLight from "../../images/logo-light.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.mobileNav}>
      {/* <div className={styles.logo}></div> */}
      {/* <div className={isOpen ?  Image :`${styles.toggle}`} onClick={()=> setIsOpen(!isOpen)}></div> */}
      <div className={styles.logo}>
        {isOpen ? (
          <img src={logoLight} alt="logo" />
        ) : (
          <img src={logo} alt="logo" />
        )}
      </div>
      <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </div>
      {isOpen && (
        <div className={styles.menuContent}>
          <ul>
            <li className={`${styles.menuItem} ${styles.borderBottom}`}>
              FEATURE
            </li>
            <li className={`${styles.menuItem} ${styles.borderBottom}`}>
              PRICING
            </li>
            <li className={`${styles.menuItem} ${styles.borderBottom}`}>
              CONTACT
            </li>
            <li className={styles.loginBtn}>
              <a href="#">LOGIN</a>
            </li>
          </ul>

          {/* <ul className={styles.footer}><li className="footerItem"><a href="#"> */}
          <div className={styles.footer}>
            <a href="#">
              <img src={facebook} />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNav;
