import React from "react";
import { useState } from "react";
import styles from "./Tab.module.css";
import Text from "../text/Text";


function Tab({ tabs }) {
  // show first tabs as defaule
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
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
                className={`{activeTab ?  ${styles.tabActive} : ${styles.btn}`}
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
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tab;
