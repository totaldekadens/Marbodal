import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../Layout/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ButtonDirection from "../Buttons/ButtonDirection";
import { list } from "@/utils/data";
import { H3Small } from "../Fonts";

interface Object {
  title: string;
  colorText: string;
  colorHex: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface Props {
  object: Object;
}

const SliderCard = ({ object }: Props) => {
  return (
    <div className="flex flex-col w-11/12 sm:w-1/3 md:w-1/4 lg:w-[23%] flex-shrink-0 relative ">
      <img
        src={object.image.src}
        alt={object.image.alt}
        className="object-cover object-center w-full"
      />
      <div
        style={{ backgroundColor: object.colorHex }}
        className="absolute w-8 h-8 z-50 overflow-visible rounded-full bottom-10 right-5"
      />
      <div className="flex text-custom-300 mt-4 gap-2 pb-5">
        <h3 className="lg:text-xl font-semibold leading-4 text-base lg:leading-5 ">
          {object.title}
        </h3>{" "}
        <span className="lg:text-xl leading-4 text-base lg:leading-5 ">
          {object.colorText}
        </span>
      </div>
    </div>
  );
};

// Todo: Fix slider. Many bugs atm and responsivity is not good

const Slider = () => {
  const [width, setWidth] = useState(0);

  let defaultTransform = 0;

  const sliderRef = useRef<HTMLDivElement>(null);
  const slider = sliderRef.current;

  const goNext = () => {
    const slider = sliderRef.current;
    defaultTransform = defaultTransform - 398;

    if (slider) {
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
        defaultTransform = 0;
      slider.style.transform = `translateX(${defaultTransform}px)`;
    }
  };

  const goPrev = () => {
    const slider = sliderRef.current;
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 389;

    if (slider) {
      slider.style.transform = `translateX(${defaultTransform}px)`;
    }
  };

  useEffect(() => {
    if (slider) {
      setWidth(slider.scrollWidth - slider.offsetWidth);
    }
  }, [slider]);

  return (
    <Container className="py-16 md:py-28 lg:py-48">
      <H3Small className="px-4" color="dark" title="Våra mest populära kök" />
      <div className="relative flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
        <div className="w-full relative flex items-center justify-center">
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <motion.div
              id="slider"
              className="h-full w-full flex gap-4 sm:gap-6 lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
              ref={sliderRef}
              drag="x"
              draggable
              dragConstraints={{ right: 0, left: -width }}
            >
              {list.map((object, i) => (
                <SliderCard key={i} object={object} />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute -right-6 -top-8 hidden md:flex">
          <div className="flex">
            <ButtonDirection icon={ChevronLeftIcon} onClick={goPrev} />
            <ButtonDirection icon={ChevronRightIcon} onClick={goNext} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slider;
