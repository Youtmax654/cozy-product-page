type ProductProps = {
  item: Storage;
  onclick: () => void;
};

const Product: React.FC<ProductProps> = ({ item, onclick }) => {
  return (
    <div className="mx-16 mt-8 flex justify-between">
      <div className="flex">
        <div
          className="size-24 rounded-md border border-solid border-french-grey"
          style={{
            background: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundOrigin: "content-box",
          }}
        ></div>
        <div className="mx-6 flex flex-col gap-5">
          <p className="label-medium">{item.name}</p>
          <p className="label-small text-imperial-red">{item.category}</p>
          <p
            className="body-small cursor-pointer select-none"
            onClick={onclick}
          >
            Remove
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex gap-24">
          <p className="label-small">{item.quantity}</p>
          <p className="label-small">${item.price}</p>
          <p className="label-small">${item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
