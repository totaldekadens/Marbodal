import Button from "./Buttons/Button";
import { WideUpperCText, H2, H2Small } from "./Fonts";
import Container from "./Layout/Container";

const Article2 = () => {
  // Todo: Go back to this one and do the responsivity better
  return (
    <Container className="md:py-28 mt-14" full>
      {/* Desktop */}
      <div className="md:h-96">
        <div className=" hidden md:flex md:gap-14 md:px-14 lg:gap-28 xl:gap-32 lg:px-36 xl:px-56 py-28  items-center justify-center bg-custom-200 absolute inset-0">
          <div className=" flex flex-col items-center ">
            <div className="w-[320px] flex flex-col items-center  gap-7">
              <WideUpperCText color="dark" title="Toniton X Marbodal" />
              <H2Small
                className="text-center"
                color="dark"
                title="Ett cremefärgat hjärta i det arkitektritade Grand Designs-huset"
              />
              <Button
                variant="modest"
                title="Hemma hos arkitekten Edd Rushton"
              />
            </div>
          </div>
          <div className=" relative h-full w-full  ">
            <div className=" absolute -top-36 -bottom-36 -right-[56px] lg:-right-[60px] left-0 xl:-right-[77px] 2xl:right-[40px]  ">
              <img
                className="object-cover rounded-sm h-full w-full "
                src="/kok4.png"
              />
            </div>
          </div>
        </div>

        {/* Tab device */}
        <div className="hidden sm:flex md:hidden  px-4  py-16 items-center justify-between bg-custom-200 ">
          <div className=" flex flex-col items-center ">
            <div className="w-[320px] flex flex-col items-center gap-7">
              <WideUpperCText color="dark" title="Toniton X Marbodal" />
              <H2Small
                className="text-center " // text-[30px]
                color="dark"
                title="Ett cremefärgat hjärta i det arkitektritade Grand Designs-huset"
              />
              <Button
                variant="modest"
                title="Hemma hos arkitekten Edd Rushton"
              />
            </div>
          </div>
          <div className=" relative bg-red-200 h-[350px] w-[300px]  overflow-hidden">
            <img
              className="object-cover rounded-sm h-full w-full"
              src="/kok4.png"
            />
          </div>
        </div>

        {/* Mobile Device */}
        <div className="flex flex-col sm:hidden relative px-4 py-16 items-center justify-center bg-custom-200 ">
          <WideUpperCText
            className="pb-16"
            color="dark"
            title="Toniton X Marbodal"
          />

          <div className=" relative h-full w-full ">
            <img
              className="object-cover rounded-sm h-full w-full"
              src="/kok4.png"
            />
          </div>
          <H2Small
            className="text-center text-[30px]  mt-9"
            color="dark"
            title="Ett cremefärgat hjärta i det arkitektritade Grand Designs-huset"
          />
          <Button
            className=" mt-9"
            variant="modest"
            title="Hemma hos arkitekten Edd Rushton"
          />
        </div>
      </div>
    </Container>
  );
};

export default Article2;
