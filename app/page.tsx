import Back from "@/components/Back";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import ColorSwatches from "@/components/ColorSwatches";
import ProductDetails from "@/components/ProductDetails";
import ProductHeader from "@/components/ProductHeader";
import Quantity from "@/components/Quantity";
import SocialMedia from "@/components/SocialMedia";
import WishlistBtn from "@/components/WishlistBtn";

export default function MenylLoungeChair() {
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
            <Quantity />
            <Button value="Add to cart" type="filled" enabled={true} />
          </div>
          <p className="body-large">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>
        </div>
        <div className="flex justify-between">
          <WishlistBtn />
          <SocialMedia />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </main>
  );
}
