import React from "react";
import cn from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function Tag(props) {
  const styleclass = {
    backgroundColor: props.backgroundColor ?? "bg-black",
  };

  return (
    <div className={cn("bg-black")}>
      <div className="flex">
        <div className="flex-shrink pt-3">
          {props.selected ? (
            <FiShoppingCart className={cn("text-white ")} />
          ) : (
            <FaHeart className={cn("text-white")} />
          )}
        </div>
        <div className="flex-shrink text-white text-center p-3 pl-2 text-sm">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default Tag;
