// BookmarkCard.jsx
import React from 'react';
import styles from './BookMark.module.css'
import Button from '../Buttons/Button';

function BookmarkCard({title, description, fontSize }) {
  
  return (
    <div className="bookmark-card">
      <h3 className={fontSize} >{title}</h3>
      <p className='descrption'>{description}</p>
       <Button text="More info" bgColor={styles.blueBtn}/>
    </div>
  );
}

export default BookmarkCard;
