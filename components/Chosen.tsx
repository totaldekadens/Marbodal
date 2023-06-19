import Button from "./Button";
import { H2, H3, P } from "./Fonts";
import Container from "./Layout/Container";

const list = [
  {
    title: "Våra kök",
    description: "Vi erbjuder Sveriges bredaste sortiment av svanenmärkta kök.",
    href: "#",
    buttonTitle: "Upptäck våra kök",
    image: { src: "kok3.png", alt: "Bild på kök" },
  },
  {
    title: "RE:NEW",
    description:
      "Ge ditt gamla Marbodalkök ett nytt liv. Behåll det du gillar. Byt det du behöver.",
    href: "#",
    buttonTitle: "Läs mer om luckbyte",
    image: { src: "/kok2.png", alt: "Bild på kök" },
  },
  {
    title: "Det sitter i detaljerna",
    description: "Helheten är viktig. Men vad är det som skapar helhet?",
    href: "#",
    buttonTitle: "Se hur detaljerna skapar helheten",
    image: { src: "kok1.png", alt: "Bild på kök" },
  },
];

const Chosen = () => {
  return (
    <Container className="py-28 items-center">
      <H2 color="dark" title="Utvald köksinspiration" className="text-center" />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6">
        {list.map((inspo, i) => (
          <div key={i} className="relative rounded-sm">
            <img
              src={inspo.image.src}
              alt={inspo.image.alt}
              className="w-full max-h-[500px] object-cover rounded-sm"
            />
            <img
              className="absolute inset-0 w-full max-h-[500px] object-cover rounded-sm"
              src="/overlayGrid.png"
            />
            <div className="absolute inset-0">
              <div className="flex h-full w-full gap-7 lg:gap-4 xl:gap-7 justify-center items-center p-6 lg:p-2 xl:p-6 flex-col">
                <H3 color="light" className="text-center" title={inspo.title} />
                <P
                  className="text-center"
                  color="light"
                  text={inspo.description}
                />
                <Button
                  variant="light"
                  title={inspo.buttonTitle}
                  href={inspo.href}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Chosen;
