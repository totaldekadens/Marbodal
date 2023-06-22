import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "./Layout/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ButtonDirection from "./Buttons/ButtonDirection";
import { H2, H3Small, P } from "./Fonts";
import Link from "next/link";

const list = [
  {
    title: "Besök oss",
    description: "Vi har 120 butiker från norr till söder.",
    hrefTitle: "Hitta butik",
    href: "#",
    image: {
      src: "/resa1.png",
      alt: "En bild",
    },
  },
  {
    title: "Hitta din köksstil",
    description: "Hitta din köksstil och få en personlig moodboard.",
    hrefTitle: "Starta testet",
    href: "#",
    image: {
      src: "/resa2.png",
      alt: "En bild",
    },
  },
  {
    title: "Så köper du ett kök",
    description: "Hur det går till när du köper kök.",
    hrefTitle: "Till guiden",
    href: "#",
    image: {
      src: "/resa3.png",
      alt: "En bild",
    },
  },
];

interface Object {
  title: string;
  description: string;
  hrefTitle: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface Props {
  object: Object;
}

const Card = ({ object }: Props) => {
  return (
    <div className="flex flex-col relative overflow-hidden ">
      <img
        src={object.image.src}
        alt={object.image.alt}
        className="object-cover object-center w-full transition duration-700 ease-in-out hover:scale-105"
      />

      <div className="flex flex-col text-custom-300 mt-4 gap-2 pb-5">
        <h3 className="lg:text-xl font-semibold leading-4 text-base lg:leading-5 ">
          {object.title}
        </h3>
        <P text={object.description} color="dark" />
        <Link className="underline" href={object.href}>
          {object.hrefTitle}
        </Link>
      </div>
    </div>
  );
};

const Article4 = () => {
  return (
    <Container className="py-16 md:py-28 items-center">
      <H2 className="px-4" color="dark" title="Starta din köksresa" />
      <div className="relative flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
        <div className="w-full relative flex items-center justify-center">
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="grid"
              className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
            >
              {list.map((object, i) => (
                <Card key={i} object={object} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Article4;
