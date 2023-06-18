import DesktopNavigation from "./DesktopNavigation";
import Container from "./container";

function Header() {
  return (
    <>
      <Container className="z-50">
        <header className=" relative z-50 flex flex-col">
          <div className="top-0 z-10 h-16 pt-6">
            <div className=" w-full">
              <div className="relative flex justify-between gap-4 ">
                <div className="w-full flex">
                  <DesktopNavigation />
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </>
  );
}

export default Header;
