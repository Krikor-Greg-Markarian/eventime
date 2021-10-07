import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div className={cn(props.className)}>
      <button>
        {props.ButtonName}
        {props.children}
      </button>
    </div>
  );
}

export default Button;
