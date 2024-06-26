import React, { useState } from "react";
import Button from "../Buttons/Button";
import styles from "./Email.module.css";

function Email() {
  const [input, setInputvalue] = useState("");


  const handleSumbit = (e)=> {
   e.preventDefault();
  }
 
  return (
    <div className={styles.email} id="email">
      <p className={styles.join}>35,000+ ALREADY JOINED</p>
      <h2>Stay upp-to-date with what we're doning</h2>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <Button text="contact us" bgColor={styles.redBtn} />
      </form>
    </div>
  );
}

export default Email;
