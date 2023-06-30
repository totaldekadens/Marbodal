import clsx from "clsx";
import Button from "./Buttons/Button";

const list = [
  { src: "/hero.png", alt: "Bild på kök", class: "slide--1" },
  { src: "/hero2.png", alt: "Bild på kök", class: "slide--2" },
  { src: "/hero3.png", alt: "Bild på kök", class: "slide--3" },
];

const Hero = () => {
  // Todo : Use next/image instead
  return (
    <div className="slides">
      {list.map((image, i) => (
        <div key={i} className={clsx(`slide`, image.class)}>
          <img className="slide__image" src={image.src} alt={image.alt} />
          <img
            className="absolute inset-0 h-full w-full object-fill hidden md:flex "
            src={"/overlayHero.png"}
            alt={"overlay"}
          />
          <img
            className="absolute inset-0 h-full w-full object-fill flex md:hidden "
            src={"/overlayHeroMobile.png"}
            alt={"overlay"}
          />
        </div>
      ))}
      <div className="absolute flex inset-0 text-custom-50 items-center justify-center font-serif gap-3 flex-col ">
        <div className="flex flex-col items-center gap-4 justify-center w-3/4 xl:w-1/2">
          <h1 className="text-[44px] sm:text-[55px] md:text-[66px] lg:text-[77px] text-center">
            Tidlös design i en modern form
          </h1>
          <Button href="#" variant="light" title="Utforska Form Frost" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
