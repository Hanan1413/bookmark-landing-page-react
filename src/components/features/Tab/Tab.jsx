import React from "react";
import { useState } from "react";
import styles from "./Tab.module.css";
import Text from "../../text/Text";
import Button from "../../Buttons/Button";

function Tab({ tabs }) {
  // show first tabs as defaule
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
      <div className={`${"container"} `}>
        <Text
          title="Features"
          text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        />
        <div className={styles.btn}>
          {tabs.map((tab) => {
            // onClick set acivetab to corresponding tabs id

            return (
              <button
                key={tab.id}
                className={`activeTab ? ${styles.active}:""`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.btn}
              </button>
            );
          })}
        </div>

        <div>
          {tabs.map((tab) => {
            return (
              // if tab.id === aciveTab render component
              tab.id === activeTab && (
                <div
                  key={tab.id}
                  className={`${styles.tabs} ${styles.tabContent}`}
                >
                  <div>
                    <img
                      src={tab.img}
                      alt={tab.title}
                      className={styles.tabImage}
                    />
                  </div>
                  <div>
                    <h1 className={styles.title}>{tab.title}</h1>
                    <p className={styles.textColor}> {tab.text} </p>
                    <Button text="more info" bgColor={styles.blueBtn} />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
  );
}

export default Tab;
