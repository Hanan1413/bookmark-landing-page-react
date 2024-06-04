import React from 'react'
import styles from './Footer.module.css'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'

// import { pageLinks } from '../../data'

function Footer({pageLinks}) {
  return (
    <div className={styles.footer}>
    <ul className={styles.footerLinks}>
        {pageLinks.map((link)=>{
            const{href, text}= link
            return(
                <li><a href={href}>{text}</a></li>
              
            )
        })}
      
    </ul>
    <div className={styles.socialLinks}>
        <img src={facebook} alt="facebook"  className={styles.facebook}/>
        <img src={twitter} alt="twitter"  className={styles.twitter}/>


    </div>
    </div>
  )
}

export default Footer
