import React, { useState } from "react";
import styles from "./Features.module.css";
import Tab from "../Tab/Tab";

function Features({ tabs }) {
  return (
    <div className={styles.FeaturesContainer} id="features">
      <Tab tabs={tabs} />
    </div>
  );
}

export default Features;
