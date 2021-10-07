import React from "react";
import cn from "classnames";
import styles from "../../styles/mainContainer.module.css";

function Card(props) {
  const styleClasss = {
    borderColor: props.borderColor ?? "",
  };
  return (
    <div
      className={cn(
        "rounded-lg",
        styleClasss.borderColor,
        props.classname,
        styles.mainContainer
      )}
    >
      <div>{props.children}</div>
    </div>
  );
}

export default Card;
