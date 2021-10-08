import React from "react";
import cn from "classnames";

import { IoMdCheckmark, IoMdClose } from "react-icons/io";

function TextItem(props) {
  return (
    <div>
      <div className="flex">
        <div className="flex-shrink">
          {props.hasFeature ? (
            <IoMdCheckmark className={cn("text-blue-600 ")} />
          ) : (
            <IoMdClose className={cn("text-gray-500")} />
          )}
        </div>
        <div className="flex-shrink pl-1 ">{props.text}</div>
      </div>
    </div>
  );
}

export default TextItem;
