import Container from "./Layout/Container";
import Line from "./Line";

const Usp = () => {
  return (
    <Container className="py-14">
      <div className=" w-full flex font-light justify-center items-center text-custom-300 text-xl lg:text-2xl flex-col ">
        <Line />
        <p className="text-center">
          Sommarkampanj! Köp ett Marbodalkök och få 20.000 kronor i rabatt*
        </p>
        <Line />
      </div>
    </Container>
  );
};

export default Usp;
