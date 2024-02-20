import { ReactNode } from "react";

type ButtonProps = {
  value: ReactNode;
  type: "filled" | "outline" | "link";
  enabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ value, type, enabled }) => {
  const buttonClass = `label-medium h-[52px] w-fit rounded-[4px] px-10 py-4 text-white ${enabled ? "bg-verdigris" : "bg-cool-grey"}`;
  const outlineButtonClass = `label-medium h-[52px] w-fit rounded-[4px] border bg-transparent px-10 py-4 ${enabled ? "border-space-cadet text-space-cadet" : "border-cool-grey text-cool-grey"}`;
  const linkClass = `label-medium ${enabled ? "text-verdigris" : "text-cool-grey"}`;

  if (type === "filled") {
    return <button className={buttonClass}>{value}</button>;
  } else if (type === "outline") {
    return <button className={outlineButtonClass}>{value}</button>;
  } else {
    return <button className={linkClass}>{value}</button>;
  }
};

export default Button;
