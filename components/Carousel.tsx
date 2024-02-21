"use client";

import { useState } from "react";

import Image from "next/image";
import chevronLeft from "../public/icons/chevron-left.svg";
import chevronRight from "../public/icons/chevron-right.svg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState("meryl-1.png");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "meryl-1.png",
    "meryl-2.png",
    "meryl-3.png",
    "meryl-4.png",
    "meryl-5.png",
  ];

  const handleImageChange = (image: string) => {
    const index = images.indexOf(image);
    setCurrentIndex(index);
    setCurrentImage(image);
  };

  const handleNextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setCurrentImage(images[0]);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setCurrentImage(images[images.length - 1]);
    } else {
      setCurrentIndex(currentIndex - 1);
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex w-full flex-col items-end gap-4">
        <div className="flex items-baseline gap-3 pr-7">
          <p className="headline-medium text-space-cadet">
            0{currentIndex + 1}
          </p>
          <p className="title-medium text-cool-grey">/ 05</p>
        </div>
        <div className="flex gap-20">
          <Image
            src={chevronLeft}
            alt="Left arrow"
            className="cursor-pointer"
            onClick={handlePreviousImage}
          />
          <Image
            src={chevronRight}
            alt="Right arrow"
            className="cursor-pointer"
            onClick={handleNextImage}
          />
        </div>
        <Image
          priority
          src={`/meryl-images/${currentImage}`}
          alt="Meryl Lounge Chair"
          width={844}
          height={461}
        />
      </div>

      <div className="flex gap-6">
        {images.map((image) => (
          <div
            key={image}
            className={`size-[104px] cursor-pointer rounded-md border-2 border-solid p-2 ${currentImage === image ? "border-verdigris" : "border-french-grey"}`}
            style={{
              background: `url(/meryl-images/${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundOrigin: "content-box",
            }}
            onClick={() => handleImageChange(image)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
