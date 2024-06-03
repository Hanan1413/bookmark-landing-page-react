import styles from './Button.module.css'


function Button({text, bgColor}) {
  return (
  <button className={`${bgColor} ${styles.button} `}>{text}</button>      
  )
}

export default Button
