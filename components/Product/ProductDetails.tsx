import Image from "next/image";
import Stars from "../../public/icons/Stars.svg";

type ProductDetailsProps = {
  title: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  rating,
  reviews,
  description,
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="headline-large">{title}</h1>
        <div className="flex items-center justify-between">
          <h2 className="title-medium">${price}</h2>
          <div className="flex gap-3">
            <Image src={Stars} alt="Stars rate" />
            <p className="body-large">
              {rating} / 5.0 <span className="text-cool-grey">({reviews})</span>
            </p>
          </div>
        </div>
      </div>
      <p className="body-large">{description}</p>
    </div>
  );
};

export default ProductDetails;
