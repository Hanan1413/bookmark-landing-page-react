import React from "react";
import Text from "../text/Text";
import Acoordion from "./Acoordion";
import Button from "../Buttons/Button";
import styles from "./Accordions.module.css";

function Accordions({ faqData }) {
  return (
    <div className={styles.acoordion}>
      <Text
        title="Frequently Asked Questions"
        text=" Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />
      {faqData.map((question) => {
        return <Acoordion key={question.id} {...question} />;
      })}

      <div className={styles.questionBtn}>
        <Button
          text="More info"
          bgColor={styles.blueBtn}
          padding="1rem 1.56rem"
        />
      </div>
    </div>
  );
}

export default Accordions;
