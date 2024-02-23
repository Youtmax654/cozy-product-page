"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Heart from "../../public/icons/Heart";

type WishlistBtnProps = {
  handleWishlist: () => void;
};

const WishlistBtn: React.FC<WishlistBtnProps> = ({ handleWishlist }) => {
  const [fill, setFill] = useState<string>("none");

  const handleFilling = () => {
    setFill(fill === "none" ? "#3AA39F" : "none");
  };

  useEffect(() => {
    if (localStorage.getItem("wishlist") !== null) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") as string);
      if (wishlist.includes("Meryl Lounge Chair")) {
        setFill("#3AA39F");
      }
    }
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
      className="flex cursor-pointer items-center gap-4"
      onClick={() => {
        handleFilling();
        handleWishlist();
      }}
    >
      <Heart fill={fill} />
      <p className="label-medium select-none text-verdigris">Add to wishlist</p>
    </motion.div>
  );
};

export default WishlistBtn;
