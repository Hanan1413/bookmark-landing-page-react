import React, { useState } from "react";
import styles from "./Accordions.module.css";
import arrowDown from "../../images/icon-arrow.svg";


function Acoordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.question} onClick={toggleAccordion}>
        {question}
        <img src={arrowDown} alt="arrow"     className={isOpen ? styles.rotate : styles.arrowDown}
        />
      </div>
      {isOpen && (
        <div>
          <p className={styles.answer}>{answer}</p>
        </div>
      )}
    </>
  );
}

export default Acoordion;
