// BookmarkCard.jsx
import React from 'react';
import styles from './BookMark.module.css'
import Button from '../Buttons/Button';

function BookmarkCard({title, description, fontSize }) {
  
  return (
    <div className="bookmark-card">
      <h3 className={fontSize} >{title}</h3>
      <p className='descrption'>{description}</p>
      <div className={styles.btns}>
      <Button text="More info" bgColor={styles.blueBtn}  padding="  1rem 1rem"/>
      <Button text="More info" bgColor={styles.grayBtn}  padding="1rem 1rem" />

      </div>
    </div>
  );
}

export default BookmarkCard;
