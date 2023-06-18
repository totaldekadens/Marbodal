import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block w-full py-5">
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
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Popover.Overlay className="fixed inset-0 z-50   " />
        </Transition.Child>
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
            className="bg-white dark:bg-dark-300 fixed bottom-0 left-0 top-0 w-[400px]  z-50 origin-top px-8 py-5 "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="text-light-300 dark:text-light-100 h-10 w-10" />
              </Popover.Button>
            </div>

            <nav className="mt-10 flex h-full w-full  ">
              <ul className="divide-dark-300/5 text-light-300 dark:text-light-200 -my-2  flex w-full flex-col divide-y text-3xl dark:divide-zinc-100/5">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/tech">Tech</MobileNavItem>
                <MobileNavItem href="/merits">Merits</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export default MobileNavigation;
