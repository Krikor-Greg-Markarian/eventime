import React from "react";
import cn from "classnames";

function Box(props) {
  return (
    <div className={cn("border-2 w-7/12 mt-8")}>
      <div
        className={cn("relative")}
        style={{
          width: "100%",
          height: "300px",
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
        <div
          className={cn("")}
          style={{
            width: "100%",
            height: "10px",
            backgroundImage: `url(${props.secondImageUrl})`,
          }}
        >
          <p
            className={cn(
              "bg-red-400 text-center w-14 absolute -bottom-4 right-4 py-2 text-white font-bold"
            )}
          >
            {props.discount}
          </p>
        </div>
      </div>
      <div className={cn("p-4")}>
        <p className={cn("font-bold text-2xl")}>{props.title}</p>
        <p className={cn("text-gray-500 text-sm font-bold pt-2 pb-2")}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Box;
