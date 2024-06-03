import React from "react";
import Text from "../text/Text";
import styles from "./Features.module.css";

function Features({ tabs }) {
  return (
    <div className={`${"container"} `}>
      <Text
        title="Features"
        text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className={styles.btn} >
        {tabs.map((btn) => {
          return <button key={btn.id} className={styles.tabActive}>{btn.btn}</button>;
        })}
      </div>

      <div>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} className={styles.tabs}>
              <div>
                <img
                  src={tab.img}
                  alt={tab.title}
                  className={styles.tabImage}
                />
              </div>
              <div className={styles.text}>
                <h1>{tab.title}</h1>
                <p>{tab.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
