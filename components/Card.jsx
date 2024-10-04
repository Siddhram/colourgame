import React from "react";
import { useState } from "react";

const Card = ({ val,colour }) => {
            console.log(colour);

  return (
    <div>
      <div className="pt-9 flex font-sans m-0 w-35" >
        <button
          onClick={() => {
            
            val(colour); // Send 'green' data to the parent when clicked
          }}
          className="  h-16 px-6 font-semibold rounded-md bg-black text-white"
          type="button"
        >
          {colour}
        </button>
      </div>
    </div>
  );
};

export default Card;
