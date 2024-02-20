import Image from "next/image";
import back from "../public/icons/back.svg";

const Back = () => {
  return (
    <div>
      <Image src={back} alt="Back Arrow" className="cursor-pointer" />
    </div>
  );
};

export default Back;
