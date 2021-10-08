import React from "react";
import cn from "classnames";
import TextItem from "./TextItem";
import Button from "./Button";
import Card from "./Card";

function CardItems(props) {
  const styleClass = {
    priceTextColor: props.priceTextColor ?? "bg-white",
    nameBackgroundColor: props.nameBackgroundColor ?? "bg-gray-100",
    buttonBackgroundColor: props.buttonBackgroundColor ?? "bg-white",
    buttonTextColor: props.buttonTextColor ?? "text-blue-900",
  };

  return (
    <Card>
      <div
        className={cn(
          "flex justify-center items-center p-4 rounded-t-lg",
          styleClass.nameBackgroundColor
        )}
      >
        <p className={cn("")}>{props.name}</p>
      </div>
      <div className={cn("p-4")}>
        <div className="flex pl-6 pt-2 pb-3">
          <div className="flex-shrink ">
            <p className={cn("inline text-2xl text-gray-500")}>
              {" "}
              {props.dolorSign}
            </p>
            <p className={cn("inline pl-1 text-4xl text-blue-600")}>
              {" "}
              {props.price}
            </p>
          </div>
          <div className="flex-shrink pl-1">
            <p className={cn("text-gray-500 text-sm")}>{props.per}</p>
            <p className={cn("text-sm text-gray-500")}> {props.month}</p>
          </div>
        </div>

        {props.text.map((item, idx) => (
          <TextItem key={idx} text={item.text} hasFeature={item.hasFeature} />
        ))}
        <div className={cn("flex justify-center items-center pt-2 ")}>
          <Button
            className={cn(
              " border-2 border-blue-300 text-font-bold py-2 w-5/12 text-sm rounded-lg text-center",
              styleClass.buttonBackgroundColor,
              styleClass.buttonTextColor
            )}
          >
            {props.ButtonName}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CardItems;
