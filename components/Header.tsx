"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const navs = ["SHOP", "COLLECTIVE", "DESIGNERS", "ABOUT US", "CONTACT"];

  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-solid border-french-grey">
      <Link href="/">
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="brand-font ml-10 mt-1 cursor-pointer text-space-cadet"
        >
          Cozy®
        </motion.span>
      </Link>
      <nav className="flex list-none gap-8">
        {navs.map((nav) => (
          <Link key={nav} href="/">
            <li className="label-small link relative cursor-pointer p-2">
              {nav}
            </li>
          </Link>
        ))}
      </nav>
      <div className="flex h-full justify-between">
        <div className="flex items-center justify-center p-5">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/icons/menu.svg"
            alt="menu"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center p-5">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="icons/search.svg"
            alt="search"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center border-l border-solid border-french-grey p-10">
          <Link href="/cart">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src="/icons/shopping-cart.svg"
              alt="shopping-cart"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
