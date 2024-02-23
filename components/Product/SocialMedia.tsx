import Image from "next/image";
import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";
import pinterest from "../../public/icons/pinterest.svg";
import twitter from "../../public/icons/twitter.svg";

const SocialMedia = () => {
  return (
    <div className="flex gap-6">
      <Image src={facebook} alt="Facebook icon" />
      <Image src={twitter} alt="Twitter icon" />
      <Image src={instagram} alt="Instagram icon" />
      <Image src={pinterest} alt="Pinterest icon" />
    </div>
  );
};

export default SocialMedia;
