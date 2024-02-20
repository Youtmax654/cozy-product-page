"use client";

import { useState } from "react";

import Image from "next/image";
import minus from "../public/icons/minus.svg";
import plus from "../public/icons/plus.svg";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 999) {
      setQuantity(parseInt(e.target.value));
    }
  };

  return (
    <div className="relative flex h-[52px] w-40 items-center justify-center rounded-[4px] border border-cool-grey">
      <Image
        src={minus}
        alt="Minus button"
        className="absolute left-3 size-5 cursor-pointer"
        onClick={handleDecrement}
      />
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        className="label-large w-12 border-none text-center focus:outline-none"
      />
      <Image
        src={plus}
        alt="Plus button"
        className="absolute right-3 size-5 cursor-pointer"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default Quantity;
