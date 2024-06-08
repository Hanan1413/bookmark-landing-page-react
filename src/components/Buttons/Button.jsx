import styles from "./Button.module.css";

function Button({ text, bgColor, width, height, marginTop, padding }) {
  return (
    <button
      style={{
        width:  width ,
        height:  height ,
        marginTop:  marginTop ,
        padding: padding ,
      }}
      className={`${bgColor} ${styles.button} `}
    >
      {text}
    </button>
  );
}

export default Button;
