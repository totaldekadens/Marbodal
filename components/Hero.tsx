import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative w-full -mt-16 h-2/3 z-0">
      <img
        className="object-cover h-full w-full"
        src={"/hero.png"}
        alt={"Bild på kök"}
      />
    </div>
  );
};

export default Hero;
