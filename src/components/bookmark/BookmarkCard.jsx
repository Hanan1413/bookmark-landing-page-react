// BookmarkCard.jsx
import React from 'react';
import styles from './BookMark.module.css'

function BookmarkCard({title, description, fontSize }) {
  
  return (
    <div className="bookmark-card">
      <h3 className={fontSize} >{title}</h3>
      <p className='descrption'>{description}</p>
    </div>
  );
}

export default BookmarkCard;
