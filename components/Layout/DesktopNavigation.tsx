import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavigation from "./MobileNavigation";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  let isActive = useRouter().pathname === href;

  return (
    <li className="white whitespace-nowrap">
      <Link
        href={href}
        className={clsx(
          " relative block px-3 py-2 transition text-custom-50 text-[17px]",
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

function DesktopNavigation(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="relative w-full flex items-center z-50">
      <MobileNavigation />
      <nav className="z-50" {...props}>
        <ul className="text-custom-400 flex rounded-lg gap-2 px-3 text-sm font-medium md:text-base   ">
          <NavItem href="/about">Våra kök</NavItem>
          <NavItem href="/projects">Inspiration</NavItem>
          <NavItem href="/tech">Hållbarhet</NavItem>
          <NavItem href="/merits">Projekt & arkitekt</NavItem>
        </ul>
      </nav>
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[150px] h-[20px] text-2xl text-custom-50  font-bold ">
            MARBODAL
          </div>
        </div>
      </div>
      <div className=" hidden justify-end md:flex md:flex-1 items-center gap-3">
        <button className="p-4 z-50 bg-white rounded-lg">Boka möte</button>
        <div className="bg-white w-8 h-8 rounded-full" />
        <div className="bg-white w-8 h-8 rounded-full" />
        <div className="bg-white w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}

export default DesktopNavigation;
