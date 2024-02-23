"use client";

import { ToastContainer } from "react-toastify";
import Product from "./Product";

type CartDetailsProps = {
  items: Storage[];
  numberOfItems: number;
  deleteItem: (item: Storage) => void;
};

const CartDetails: React.FC<CartDetailsProps> = ({
  items,
  numberOfItems,
  deleteItem,
}) => {
  return (
    <div className="w-full">
      <div className="mx-16 mt-16 flex items-center justify-between border-b border-solid border-french-grey pb-6">
        <h1 className="title-medium">Shopping Cart</h1>
        <p className="title-medium">{numberOfItems} items</p>
      </div>
      <div className="mx-16 mt-8 flex justify-between">
        <p className="body-small text-cool-grey">PRODUCT DETAILS</p>
        <div className="flex gap-28">
          <p className="body-small text-cool-grey">QUANTITY</p>
          <p className="body-small text-cool-grey">PRICE</p>
          <p className="body-small text-cool-grey">TOTAL</p>
        </div>
      </div>
      {numberOfItems <= 0 ? (
        <h1 className="headline-medium mt-10 text-center text-cool-grey">
          The cart is empty
        </h1>
      ) : (
        items.map((item) => (
          <Product key={item.id} item={item} onclick={() => deleteItem(item)} />
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default CartDetails;
