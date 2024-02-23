"use client";

import CartDetails from "@/components/ShoppingCart/CartDetails";
import OrderSummary from "@/components/ShoppingCart/OrderSummary";
import { redirect } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function Cart() {
  const cart = localStorage.getItem("cart") || null;

  const items = useMemo(() => [JSON.parse(cart || "")] as Storage[], [cart]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [total, setTotal] = useState(0);

  const deleteItem = (item: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    const index = cart.id.indexOf(item.id);
    cart.id.splice(index, 1);
    cart.image.splice(index, 1);
    cart.name.splice(index, 1);
    cart.category.splice(index, 1);
    cart.quantity.splice(index, 1);
    cart.price.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setNumberOfItems(cart.id.length);
    toast.success("Item removed from cart", { position: "bottom-right" });
  };

  const handleApplyPromo = () => {
    toast.error("Invalid Promo Code", { position: "bottom-right" });
  };

  const handleCheckout = () => {
    toast.success("Order Placed Successfully", { position: "bottom-right" });
    localStorage.removeItem("cart");
    setNumberOfItems(0);
    setTotal(0);
    setTimeout(() => {
      redirect("/");
    }, 2000);
  };

  useEffect(() => {
    if (cart) {
      const idsArr = JSON.parse(cart).id;
      setNumberOfItems(idsArr.length);
      let total = 0;
      items.forEach((item: any) => {
        total += item.price * item.quantity;
      });
      setTotal(total);
    }
  }, [cart, items]);

  return (
    <div className="flex h-full flex-row justify-between">
      <CartDetails
        items={items}
        numberOfItems={numberOfItems}
        deleteItem={deleteItem}
      />
      <OrderSummary
        numberOfItems={numberOfItems}
        total={total}
        ApplyPromo={handleApplyPromo}
        Checkout={handleCheckout}
      />
    </div>
  );
}
