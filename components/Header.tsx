import Image from "next/image";
import menu from "../public/icons/menu.svg";
import search from "../public/icons/search.svg";
import shoppingCart from "../public/icons/shopping-cart.svg";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-solid border-french-grey">
      <span className="brand-font ml-10 mt-1 text-space-cadet">Cozy®</span>
      <nav className="flex list-none gap-10">
        <li className="label-small">SHOP</li>
        <li className="label-small">COLLECTIVE</li>
        <li className="label-small">DESIGNERS</li>
        <li className="label-small">ABOUT US</li>
        <li className="label-small">CONTACT</li>
      </nav>
      <div className="flex h-full justify-between">
        <div className="flex items-center justify-center p-5">
          <Image src={menu} alt="menu" />
        </div>
        <div className="flex items-center justify-center p-5">
          <Image src={search} alt="search" />
        </div>
        <div className="flex items-center justify-center border-l border-solid border-french-grey p-10">
          <Image src={shoppingCart} alt="shopping-cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
