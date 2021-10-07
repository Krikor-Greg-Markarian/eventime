import React from "react";
import cn from "classnames";
import Button from "./Button";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Eventimeitem(props) {
  return (
    <div className={cn("grid md:grid-cols-2")}>
      <div className={cn("col-span-1")}>
        <p className={cn("text-white font-bold text-2xl pb-1")}>
          {props.title}
        </p>
        <Button
          className={cn(
            "bg-red-500 text-font-bold text-white w-3/12 text-sm rounded text-center"
          )}
          ButtonName={"Wordpress"}
        />
        <p className={cn("text-white font-bold text-sm pt-1")}>
          {props.smallTitle}
        </p>
        <p className={cn("text-gray-500 text-xs pt-3 pb-3")}>
          {props.description}
        </p>

        <div className="flex">
          <div className="flex-shrink ">
            <p className={cn("font-bold text-white inline")}>
              {props.priceTag}
            </p>
          </div>
          <div className="flex-grow ">
            <p className={cn("text-red-400 font-bold inline pl-2 ")}>
              {props.price}
            </p>
          </div>

          <div className="flex-grow ">
            <p className={cn("font-bold text-white inline pl-12 border-l-2")}>
              <p className={cn("text-white inline pr-3")}>
                <FiShoppingCart className={cn("inline text-red-500")} />
              </p>
              {props.sold}
            </p>
          </div>
          <div className="flex-grow">
            <p className={cn("font-bold text-white inline pl-2 border-l-2")}>
              <p className={cn("text-white inline pr-2 pl-6")}>
                <FaHeart className={cn("inline text-red-500")} />
              </p>
              {props.likes}
            </p>
          </div>
        </div>
        <div className={cn("pt-8 ")}>
          <Button
            className={cn(
              "bg-green-400 rounded-full text-font-bold text-white w-2/12 text-sm inline px-10 py-4"
            )}
            ButtonName={"Wordpress"}
          />

          <Button
            className={cn(
              "bg-white px-10 py-4 rounded-full text-font-bold text-gray-500 w-2/12 text-sm inline ml-3"
            )}
            ButtonName={"live Demo"}
          />
        </div>
      </div>
      <div className={cn("pl-32 pt-5")}>
        <img className={cn("rounded w-9/12")} src={props.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Eventimeitem;
