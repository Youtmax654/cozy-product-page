"use client";

import { useState } from "react";

import Heart from "../public/icons/Heart";
import Button from "./Button";

const WishlistBtn = () => {
  const [fill, setFill] = useState<string>("none");

  const handleFilling = () => {
    setFill(fill === "none" ? "#3AA39F" : "none");
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-4"
      onClick={handleFilling}
    >
      <Heart fill={fill} />
      <Button value="Add to wishlist" type="link" enabled={true} />
    </div>
  );
};

export default WishlistBtn;
