import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem =  (item) => {
    dispatch(addItem(item))
  }

  return (
    <div>
      <ul>
        {items?.map((item) => (
          <div
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex items-center"
            key={item.card.info.id}
          >
            <div className="justify-between w-full">
              <div className="p-2">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-32 h-16">
              <button
                className="px-1.5 py-1 rounded-sm text-xs bg-white shadow-lg absolute m-auto"
                onClick={()=>{handleAddItem(item)}}>
                Add +
              </button>

              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="w-full h-16"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
