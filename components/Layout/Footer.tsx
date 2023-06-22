import Container from "./Container";

const Footer = () => {
  return (
    <Container className="py-14 bg-custom-200">
      {/* upper */}
      <div className="flex w-full justify-around pb-12 border border-t-0 border-l-0 border-r-0 border-b-decor-50/40">
        <div>Design</div>
        <div>Hållbarhet</div>
        <div>Expertis</div>
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
