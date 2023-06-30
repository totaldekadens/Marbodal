import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { MobileNavList } from "@/utils/data";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  serif?: boolean;
}

function MobileNavItem({ href, children, serif }: NavItemProps) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className={clsx(serif ? `font-serif` : ``, `block w-full  py-2`)}
      >
        {children}
      </Popover.Button>
    </li>
  );
}

interface Props {
  className?: string;
}

function MobileNavigation({ className }: Props) {
  return (
    <Popover className={clsx(`${className}`, `z-50`)}>
      <Popover.Button
        aria-label="Go to mobile menu"
        className="group flex items-center rounded-full px-2 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
      >
        <div className="space-y-2">
          <span className="bg-custom-50 block h-0.5 w-8 "></span>
          <span className="bg-custom-50 block h-0.5 w-4 "></span>
          <span className="bg-custom-50 block h-0.5 w-2 "></span>
        </div>
      </Popover.Button>
      <Transition.Root>
        <Popover.Overlay className="fixed inset-0 z-50 bg-black/20 transition ease-in transform" />
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel
            focus
            className="bg-custom-100 dark:bg-dark-300 fixed bottom-0 left-0 top-0 w-[500px]  z-50 origin-top px-8 py-5 "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="text-custom-300 h-10 w-10" />
              </Popover.Button>
              <div className="flex w-48">
                <img src="/marbodal_dark.webp" />
              </div>
            </div>

            <nav className="mt-10 flex flex-col h-full w-full  ">
              <ul className="text-custom-300 -my-2  flex w-full flex-col divide-y text-3xl ">
                {MobileNavList.primary.map((link) => (
                  <MobileNavItem serif href={link.href}>
                    {link.title}
                  </MobileNavItem>
                ))}
              </ul>
              <ul className="text-custom-300 mt-10  flex w-full flex-col divide-y font-normal text-xl ">
                {MobileNavList.secondary.map((link) => (
                  <MobileNavItem href={link.href}>{link.title}</MobileNavItem>
                ))}
              </ul>
            </nav>
            <div className="absolute bottom-0 right-0 left-0 h-36 bg-custom-200 flex flex-col justify-evenly pl-6">
              <ul className="text-custom-300  flex w-full flex-col font-normal text-xl ">
                <MobileNavItem href="#">Hitta butik</MobileNavItem>
                <MobileNavItem href="#">Mina favoriter</MobileNavItem>
              </ul>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export default MobileNavigation;
