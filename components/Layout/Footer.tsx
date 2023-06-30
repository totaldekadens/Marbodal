import Link from "next/link";
import Button from "../Buttons/Button";
import { P } from "../Fonts";
import Container from "./Container";
import { navlinks, upper } from "@/utils/data";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <Container className="py-14 bg-custom-200">
      {/* upper */}
      <div className="flex w-full flex-col gap-8 sm:gap-0 sm:flex-row justify-around pb-12 sm:border sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:border-b-decor-50/40">
        {upper.map((object) => (
          <div className="flex gap-3 justify-center items-center flex-col w-">
            <img src={object.icon} />
            <h3 className="lg:text-xl text-custom-300 font-semibold leading-4 text-base lg:leading-5 ">
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

      {/* Desktop */}
      <div className="hidden sm:flex flex-col lg:flex-row pt-24 lg:pt-12 pb-12 gap-8 border border-t-0 border-l-0 border-r-0 border-b-decor-50/40 mb-6">
        <div className="flex flex-col items-center mb-28 lg:mb-0 lg:items-start w-full xl:w-1/4 lg:w-1/3 gap-3">
          <h3 className="text-xl text-center sm:text-left text-custom-300 font-semibold leading-5 ">
            Boka ett möte med en köksdesigner
          </h3>
          <P
            text="Vi lyssnar på dina behov och köksdrömmar och skapar en 3D-ritning med prisförslag direkt under mötet."
            color="dark"
            className="text-center lg:text-left"
          />
          <div>
            <Button title="Boka möte" variant="dark" />
          </div>
        </div>
        <div style={{ columns: "150px 5", columnGap: "40px" }}>
          {navlinks.map((category) => (
            <div style={{ pageBreakInside: "avoid" }} className="mb-14">
              {/* The children will not split up between different columns with "pageBreakInside: "avoid" "*/}
              <h3 className="lg:text-sm text-custom-300 font-semibold leading-4 text-base lg:leading-5 ">
                {category.header}
              </h3>
              <ul>
                {category.links.map((link, i) => (
                  <Link key={i} href={link.href}>
                    <li className="text-sm text-custom-300 mt-2">
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile - Accordion */}
      <div className="block sm:hidden">
        {navlinks.map((section, i) => (
          <Disclosure
            as="div"
            key={i}
            className="border-b border-custom-300/20 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-custom-200 py-3 text-sm text-custom-300 hover:text-gray-500">
                    <span className="font-medium text-custom-300">
                      {section.header}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.links.map((link, i) => (
                      <div key={i} className="flex items-center">
                        <Link
                          className="text-sm text-custom-300 mt-2"
                          key={i}
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
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
