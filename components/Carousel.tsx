"use client";

import { useState } from "react";

import Image, { StaticImageData } from "next/image";

import chevronLeft from "../public/icons/chevron-left.svg";
import chevronRight from "../public/icons/chevron-right.svg";

import meryl1 from "../public/meryl-images/meryl-1.png";
import meryl2 from "../public/meryl-images/meryl-2.png";
import meryl3 from "../public/meryl-images/meryl-3.png";
import meryl4 from "../public/meryl-images/meryl-4.png";
import meryl5 from "../public/meryl-images/meryl-5.png";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(meryl1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [meryl1, meryl2, meryl3, meryl4, meryl5];

  const handleImageChange = (image: StaticImageData) => {
    if (image === currentImage) return;
    const index = images.indexOf(image);
    const mainImage = document.getElementById("main-image");

    if (mainImage) {
      const direction = index > currentIndex ? -1 : 1;

      mainImage.style.transition = "transform 0.4s ease";
      mainImage.style.transform = `translateX(${direction * 100}%)`;

      setTimeout(() => {
        mainImage.style.transition = "none";
        mainImage.style.transform = `translateX(${direction * -100}%)`;
      }, 400);

      setTimeout(() => {
        setCurrentIndex(index);
        setCurrentImage(image);

        mainImage.style.transition = "transform 0.4s ease";
        mainImage.style.transform = "translateX(0%)";
      }, 500);
    }
  };

  const handleNextImage = () => {
    const mainImage = document.getElementById("main-image");
    if (mainImage) {
      mainImage.style.transition = "transform 0.4s ease";
      mainImage.style.transform = "translateX(-100%)";

      setTimeout(() => {
        mainImage.style.transition = "none";
        mainImage.style.transform = "translateX(100%)";
      }, 400);

      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setCurrentImage(images[nextIndex]);

        mainImage.style.transition = "transform 0.4s ease";
        mainImage.style.transform = "translateX(0%)";
      }, 500);
    }
  };

  const handlePreviousImage = () => {
    const mainImage = document.getElementById("main-image");

    if (mainImage) {
      mainImage.style.transition = "transform 0.4s ease";
      mainImage.style.transform = "translateX(100%)";

      setTimeout(() => {
        mainImage.style.transition = "none";
        mainImage.style.transform = "translateX(-100%)";
      }, 400);

      setTimeout(() => {
        const previousIndex =
          currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex);
        setCurrentImage(images[previousIndex]);

        mainImage.style.transition = "transform 0.4s ease";
        mainImage.style.transform = "translateX(0%)";
      }, 500);
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
        <div className="relative h-[469.5px] w-[844px] overflow-hidden">
          <Image
            priority
            src={currentImage}
            alt="Meryl Lounge Chair"
            id="main-image"
            width={844}
            height={461}
          />
        </div>
      </div>

      <div className="flex gap-6">
        {images.map((image) => (
          <div
            key={image.src}
            className={`size-[104px] cursor-pointer rounded-md border-2 border-solid p-2 ${currentImage === image ? "border-verdigris" : "border-french-grey"}`}
            style={{
              background: `url(${image.src})`,
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
