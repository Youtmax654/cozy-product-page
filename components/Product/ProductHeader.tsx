type ProductHeaderProps = {
  category: string;
  name: string;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({ category, name }) => {
  return (
    <div className="label-small flex gap-2 text-space-cadet">
      <p className="opacity-40">{category}</p>
      <p className="proxima-nova">/</p>
      <p>{name}</p>
    </div>
  );
};

export default ProductHeader;
