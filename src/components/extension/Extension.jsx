import React from "react";
import styles from "./Extension.module.css";
import bg from "../../images/bg-dots.svg";

function Extension({ extension }) {
  return (
    <div>
      <div className={styles.extensionContaienr}>
        {extension.map((extension) => {
          return (
            <div
              key={extension.id}
              style={{ marginTop: extension.marginTop }}
              className={`${styles.containerItem} ${styles.removerMargin}  `}
              
            >
              <img
                src={extension.icon}
                alt={extension.text}
                className={styles.icon}
              />
              <h4>{extension.text}</h4>
              <p className={styles.subtext}>{extension.subtext}</p>
              <img src={bg} alt="dot" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Extension;
