"use client";

import Back from "@/components/Back";
import Button from "@/components/Button";
import Carousel from "@/components/Product/Carousel";
import ColorSwatches from "@/components/Product/ColorSwatches";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductHeader from "@/components/Product/ProductHeader";
import Quantity from "@/components/Product/Quantity";
import SocialMedia from "@/components/Product/SocialMedia";
import WishlistBtn from "@/components/Product/WishlistBtn";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function MenylLoungeChair() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const addToCart = (quantity: number) => {
    if (quantity <= 0) {
      toast.error("Please select a quantity", { position: "bottom-right" });
      return;
    } else if (localStorage.getItem("cart") === null) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          id: [1],
          image: ["/meryl-images/meryl-1.png"],
          name: ["Meryl Lounge Chair"],
          category: ["Chair"],
          quantity: [quantity],
          price: [149.99],
        })
      );
      toast.success("Added to cart", { position: "bottom-right" });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "");
      if (cart.id.includes(1)) {
        const index = cart.id.indexOf(1);
        cart.quantity[index] += quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Added to cart", { position: "bottom-right" });
      } else {
        cart.id.push(1);
        cart.image.push("/meryl-images/meryl-1.png");
        cart.name.push("Meryl Lounge Chair");
        cart.category.push("Chair");
        cart.quantity.push(quantity);
        cart.price.push(149.99);
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Added to cart", { position: "bottom-right" });
      }
    }
  };

  const handleWishlist = () => {
    if (localStorage.getItem("wishlist") === null) {
      localStorage.setItem("wishlist", JSON.stringify(["Meryl Lounge Chair"]));
    } else {
      localStorage.removeItem("wishlist");
    }
  };

  return (
    <main className="flex grow items-center justify-around text-space-cadet">
      <div className="flex w-[440px] flex-col gap-20">
        <div className="flex flex-col gap-4">
          <Back />
          <ProductHeader category="Chair" name="Meryl Lounge Chair" />
        </div>
        <div className="flex flex-col gap-8">
          <ProductDetails
            title="Meryl Lounge Chair"
            price={149.99}
            rating={4.6}
            reviews={556}
            description="The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs."
          />
          <ColorSwatches
            colors={["#C1BDB3", "#58737D", "#545454", "#CBA5A5"]}
            selectedColor="#C1BDB3"
          />
          <div className="flex gap-7">
            <Quantity handleQuantityChange={handleQuantityChange} />
            <Button
              value="Add to cart"
              type="filled"
              enabled={true}
              onClick={() => addToCart(quantity)}
            />
          </div>
          <p className="body-large">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>
        </div>
        <div className="flex justify-between">
          <WishlistBtn handleWishlist={() => handleWishlist()} />
          <SocialMedia />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <ToastContainer />
    </main>
  );
}
