import Button from "./Buttons/Button";
import { H2, P, WideUpperCText } from "./Fonts";
import Container from "./Layout/Container";

const Article = () => {
  return (
    <Container className="bg-custom-200 py-28">
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-between gap-10 md:gap-4">
        <div className="text-custom-300 w-full md:w-2/3 flex flex-col gap-5">
          <WideUpperCText
            color="dark"
            title="Hemma hos Svante Öqvist och Niklas Steeve"
          />
          <H2
            color="dark"
            title={`”Vi ritade vårt drömkök med hjälp av Marbodal”`}
          />
          <P
            color="dark"
            text="De ville ha ett kök som passade in i det arkitektritade huset. Och
            när det existerande köket började ramla sönder var det dags. Svante
            Öquist och Niclas Steeve har förlängt livstiden med stil på Villa
            Sundahl."
          />
          <div>
            <Button variant="modest" title="Till reportaget" />
          </div>
        </div>
        <div className="flex w-full md:w-auto justify-center md:justify-end">
          <img src="/steve.png" className="h-[350px] w-[350px] contain" />
        </div>
      </div>
    </Container>
  );
};

export default Article;
