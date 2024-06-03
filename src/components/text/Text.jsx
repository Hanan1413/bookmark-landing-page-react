import React from 'react'
import styles from './Text.module.css'

function Text({title, text}) {
  return (
    <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      
    </div>
  )
}

export default Text
