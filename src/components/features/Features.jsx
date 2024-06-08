import React, { useState } from "react";
// import Text from "../text/Text";
import Tab from "./Tab/Tab";
import styles from "./Features.module.css";

function Features({ tabs }) {
  return (
    <div className={styles.FeaturesContainer}>
      <Tab tabs={tabs} />;
    </div>
  );
}

export default Features;
