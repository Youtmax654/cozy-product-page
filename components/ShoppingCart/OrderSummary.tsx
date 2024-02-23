"use client";

import { useState } from "react";
import Button from "../Button";

type OrderSummaryProps = {
  numberOfItems: number;
  total: number;
  ApplyPromo: () => void;
  Checkout: () => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  numberOfItems,
  total,
  ApplyPromo,
  Checkout,
}) => {
  const [shippingFee, setShippingFee] = useState(0);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShippingFee(parseInt(e.target.value));
  };

  return (
    <div className="w-[800px] bg-[#f8f4f4]">
      <div className="mx-16 mt-16 border-b border-solid border-french-grey pb-6">
        <h1 className="title-medium">Order Summary</h1>
      </div>
      <div className="label-medium mx-16 mt-8 flex flex-col gap-8">
        <div className="flex justify-between">
          <p>{numberOfItems} ITEMS</p>
          <p>${total}</p>
        </div>
        <label htmlFor="shipping">SHIPPING</label>
        <select
          name="shipping"
          id="shipping"
          className="rounded-lg border border-solid border-french-grey p-2 outline-none"
          onChange={handleSelectChange}
          required
        >
          <option value="0">Select Shipping Option</option>
          <option value="5">Standart Delivery - $5.00</option>
          <option value="10">Express Delivery - $10.00</option>
        </select>
        <label htmlFor="promo">PROMO CODE</label>
        <input
          type="text"
          placeholder="Enter you code"
          className="rounded-lg border border-solid border-french-grey p-2 outline-none"
        />
        <Button value="Apply" type="filled" enabled onClick={ApplyPromo} />
      </div>

      <div className="label-medium mx-16 my-8 flex justify-between border-t border-solid border-french-grey pt-6">
        <p>TOTAL COST</p>
        <p>${total + shippingFee}</p>
      </div>
      <div className="flex justify-center">
        <Button value="Checkout" type="filled" enabled onClick={Checkout} />
      </div>
    </div>
  );
};

export default OrderSummary;
