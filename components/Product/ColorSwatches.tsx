type ColorSwatchesProps = {
  colors: string[];
  selectedColor: string;
};

const ColorSwatches: React.FC<ColorSwatchesProps> = ({
  colors,
  selectedColor,
}) => {
  return (
    <div className="flex items-center gap-3">
      {colors.map((color) => (
        <div
          key={color}
          className={`size-5 rounded-full ${
            color === selectedColor
              ? "outline outline-4 outline-space-cadet/10"
              : ""
          }`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorSwatches;
