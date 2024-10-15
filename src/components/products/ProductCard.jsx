import React from "react";
import Button from "../button";

const ProductCard = ({ imageSrc, name }) => {
  return (
    <div className="border shadow-md flex flex-col items-center gap-2 w-40 px-4 py-2">
      <img src={imageSrc} className="w-24 h-[124px]" />
      <span className="font-bold text-sm">{name}</span>

      <div className="">
        <Button
          name="View"
          onClick={() => console.log(name)}
          className="bg-green-500 hover:bg-green-600/70"
        />
      </div>
    </div>
  );
};
//use [] if you want to enter a desire size if di sya nakalagay sa options
export default ProductCard;
