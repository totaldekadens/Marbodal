import Link from "next/link";
import Button from "./Buttons/Button";
import { H2, P } from "./Fonts";
import Container from "./Layout/Container";

const Newsletter = () => {
  return (
    <Container className="bg-custom-200 py-24 sm:py-28 items-center">
      <div className="flex flex-col items-center gap-4 min-w-[300px] max-w-[730px]">
        <H2
          className="text-center"
          color="dark"
          title="Prenumerera på våra kökstips"
        />
        <p className="text-custom-300 text-lg text-center sm:text-xl font-light">
          Du får mail med ebjudanden, inspirerande artiklar, tips och råd
        </p>
        <div className="w-full">
          <label htmlFor="email">Mailadress</label>
          <input
            id="email"
            type="email"
            className="w-full border-none rounded-sm"
          />
        </div>

        <Button title="Prenumerera nu" variant="dark" className="w-full" />
        <div className="w-full flex justify-center ">
          <span className="text-sm text-custom-300/80 text-center ">
            Se integritetspolicy{" "}
            <Link className="underline" href="#">
              här
            </Link>
            . Du kan alltid avanmäla dig från nyhetsbrevet genom att klicka på
            avregistreringslänken i det utskickade nyhetsbrevet.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
