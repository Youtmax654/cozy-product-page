"use client";

import { useState } from "react";

import Heart from "../public/icons/Heart";

import { motion } from "framer-motion";

const WishlistBtn = () => {
  const [fill, setFill] = useState<string>("none");

  const handleFilling = () => {
    setFill(fill === "none" ? "#3AA39F" : "none");
  };

  return (
    <motion.div
      whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
      className="flex cursor-pointer items-center gap-4"
      onClick={handleFilling}
    >
      <Heart fill={fill} />
      <p className="label-medium select-none text-verdigris">Add to wishlist</p>
    </motion.div>
  );
};

export default WishlistBtn;
