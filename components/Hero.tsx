import Button from "./Buttons/Button";

const Hero = () => {
  // Todo : Use next/image instead
  return (
    <div className="relative w-full -mt-16  h-[700px] sm:h-[700px] max-h-screen md:h-[700px] z-0">
      <img
        className="object-cover h-full w-full"
        src={"/hero.png"}
        alt={"Bild på kök"}
      />
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
