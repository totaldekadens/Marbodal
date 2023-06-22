import Button from "./Buttons/Button";
import { H2, H2Small } from "./Fonts";

// Todo: Check px
const Article3 = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex mt-44 bg-custom-200 relative w-full z-0  flex-col sm:pt-4 sm-pb-4 md:px-6 lg:px-14 xl:px-[96px] ">
        <div className="flex items-center justify-between xl:justify-center   md:gap-14 lg:pl-4 lg:gap-28  md:pr-14 xl:gap-32  lg:py-12 ">
          <div className=" sm:h-72 md:w-[600px] lg:w-auto lg:h-auto ">
            <img src="/kok5.png" className="w-full h-full object-cover" />
          </div>

          <div className="flex w-1/2 flex-col gap-7 lg:w-[450px] xl:w-[400px] items-center justify-center py-12">
            <H2Small
              className="text-center sm:text-[34px]  "
              color="dark"
              title="Styla Signatur Ekbacken så som du vill ha det. Vilka val gör du?"
            />
            <Button variant="modest" title="Testa nu" />
          </div>
        </div>
      </div>
      {/* Tab and Mobile Device */}
      <div className=" md:hidden mt-28 bg-custom-200 relative w-full z-0 flex flex-col pt-24 px-6 ">
        <div className="flex flex-col w-full items-center justify-between  ">
          <div className="w-full h-full ">
            <img src="/kok5.png" className="w-full h-full object-cover" />
          </div>
          <div className="flex px-4 flex-col gap-7 items-center justify-center py-12">
            <H2Small
              className="text-center sm:text-[34px]  "
              color="dark"
              title="Styla Signatur Ekbacken så som du vill ha det. Vilka val gör du?"
            />
            <Button variant="modest" title="Testa nu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article3;
