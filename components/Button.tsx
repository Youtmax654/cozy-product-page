"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  value: ReactNode;
  type: "filled" | "outline" | "link";
  enabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ value, type, enabled }) => {
  const buttonClass = `label-medium h-[52px] w-fit rounded-[4px] px-10 py-4 text-white select-none ${enabled ? "bg-verdigris" : "bg-cool-grey"}`;
  const outlineButtonClass = `label-medium h-[52px] w-fit rounded-[4px] border bg-transparent select-none px-10 py-4 ${enabled ? "border-space-cadet text-space-cadet" : "border-cool-grey text-cool-grey"}`;
  const linkClass = `label-medium ${enabled ? "text-verdigris" : "text-cool-grey"}`;

  if (type === "filled") {
    return (
      <motion.button
        whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
        className={buttonClass}
      >
        {value}
      </motion.button>
    );
  } else if (type === "outline") {
    return (
      <motion.button
        whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
        className={outlineButtonClass}
      >
        {value}
      </motion.button>
    );
  } else {
    return (
      <motion.button
        whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
        className={linkClass}
      >
        {value}
      </motion.button>
    );
  }
};

export default Button;
