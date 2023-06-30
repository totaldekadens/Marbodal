import { P } from "../Fonts";
import Container from "./Container";

const upper = [
  {
    title: "Design",
    description:
      "Ett formspråk med fokus på detaljer, material och nya lösningar.",
    icon: "/Hand.svg",
  },
  {
    title: "Hållbarhet",
    description:
      "Sveriges bredaste utbud av Svanenmärkta kök, tillverkade i Tidaholm.",
    icon: "/Leaf.svg",
  },
  {
    title: "Expertis",
    description:
      "Vi hjälper dig att skapa ditt unika kök från design till montering.",
    icon: "/Quality.svg",
  },
];

const Footer = () => {
  return (
    <Container className="py-14 bg-custom-200">
      {/* upper */}
      <div className="flex w-full flex-col gap-8 sm:gap-0 sm:flex-row justify-around pb-12 border border-t-0 border-l-0 border-r-0 border-b-decor-50/40">
        {upper.map((object) => (
          <div className="flex gap-3 justify-center items-center flex-col w-">
            <img src={object.icon} />
            <h3 className="lg:text-xl font-semibold leading-4 text-base lg:leading-5 ">
              {object.title}
            </h3>
            <P
              text={object.description}
              color="dark"
              className="mx-5 sm:mx-10 text-center"
            />
          </div>
        ))}
      </div>
      {/* middle */}
      <div className="flex pt-12 pb-12 border border-t-0 border-l-0 border-r-0 border-b-decor-50/40 mb-6">
        <div>
          <h3>Boka ett möte med en köksdesigner</h3>
        </div>
        <div className="grid grid-cols-5 w-full">
          <div>
            <p>Köp</p>
          </div>
          <div>
            <p>Kökstillbehör</p>
            <p>Förvaring</p>
          </div>
          <div>
            <p>Badrum</p>
            <p>Kontakta oss</p>
            <p>För återförsäljare</p>
          </div>
          <div>
            {" "}
            <p>Om Marbodal</p>
            <p>Projekt & Arkitekt</p>
          </div>
          <div>
            <p>Verktyg</p>
          </div>
        </div>
      </div>
      {/* lower */}
      <div className="flex justify-between">
        <div>copyright</div>
        <div>Icons</div>
      </div>
    </Container>
  );
};

export default Footer;
