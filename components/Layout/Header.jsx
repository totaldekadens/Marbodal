import Container from "./Container";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavigation from "./MobileNavigation";
import Button from "../Buttons/Button";
import {
  MapPinIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function NavItem({ href, children, className }) {
  let isActive = useRouter().pathname === href;

  return (
    <li className={clsx(`${className}`, `whitespace-nowrap flex items-center`)}>
      <Link
        href={href}
        className={clsx(
          "relative flex items-center px-3 transition text-custom-50 font-normal text-[17px]",
          isActive
            ? "text-dark-200 dark:text-light-100 border-b transition "
            : "hover:text-dark-100 dark:hover:text-light-300"
        )}
      >
        {children}
        {isActive && (
          <span className="h-pxbg-gradient-to-r absolute inset-x-1 -bottom-px from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

function Header() {
  return (
    <>
      <Container className="z-50">
        <header className=" relative z-50 w-full flex flex-col h-16 pt-6">
          <div className="relative w-full flex items-center justify-between z-50">
            <nav className="z-50 flex w-1/2 justify-start">
              <ul className="text-custom-400 hidden md:flex rounded-lg gap-x-2 item-center justify-start md:justify-center h-[48px] px-3 text-sm font-medium md:text-base">
                <MobileNavigation className="hidden lg:flex" />
                <NavItem href="/varakok">Våra kök</NavItem>
                <NavItem href="/inspiration">Inspiration</NavItem>
                <NavItem className="hidden xl:flex" href="/hallbarhet">
                  Hållbarhet
                </NavItem>
                <NavItem className="hidden 2xl:flex" href="/project">
                  Projekt & arkitekt
                </NavItem>
              </ul>
            </nav>
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full flex items-center justify-start md:justify-center">
                <div className="w-[150px] h-[20px] text-2xl text-custom-50  font-bold ">
                  <img src="/marbodal_light.png" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <Button variant="light" title="Boka möte" small />
              <div className="hidden gap-3 lg:flex">
                <MapPinIcon className="stroke-custom-50 h-7 w-7" />
                <HeartIcon className="stroke-custom-50 h-7 w-7" />
                <MagnifyingGlassIcon className="stroke-custom-50 h-7 w-7" />
              </div>
              <MobileNavigation className="flex lg:hidden" />
            </div>
          </div>
        </header>
      </Container>
    </>
  );
}

export default Header;
