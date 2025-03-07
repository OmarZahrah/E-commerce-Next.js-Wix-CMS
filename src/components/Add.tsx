"use client";

import { useState } from "react";
import Button from "./Button";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMP
  const stock = 4;

  function handleQuantity(type: "increase" | "decrease") {
    if (type === "increase" && quantity < stock) {
      setQuantity((q) => q + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((q) => q - 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-4 rounded-3xl w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left <br />
            don&apos;t miss it
          </div>
        </div>
        <Button variant="outline" size="lg" rounded="full">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
export default Add;
