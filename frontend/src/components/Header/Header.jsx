import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useDarkModeStore from "../../Store/darkMode";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Dashboard", href: "#", current: false },
  { name: "Login", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkModeStore();

  return (
    <header className={" absolute top-0 w-full z-50"}>
      <Disclosure as="nav" className="bg-secondary dark:bg-darkSecondary">
        <div className="max-w-full px-2 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="relative inline-flex items-center justify-center p-2 rounded-md text-text dark:text-darkText group hover:bg-primary50 hover:dark:bg-darkPrimary50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:focus:ring-darkPrimary">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <img
                  alt="Your Company"
                  src={isDark ? "./logo2.png" : "./Logo.png"}
                  className="w-auto h-8"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-primary text-secondary dark:bg-darkPrimary dark:text-darkSecondary"
                          : "text-text dark:text-darkText hover:bg-primary dark:hover:bg-darkPrimary hover:text-secondary dark:hover:text-darkSecondary",
                        "rounded-md px-3 py-2 text-sm font-medium transition "
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative p-1 transition rounded-full text-primary dark:text-darkPrimary bg-main dark:bg-darkMain hover:opacity-75 hover:scale-105"
                onClick={toggleDarkMode}
              >
                <span className="absolute -inset-1.5" />
                {isDark ? (
                  <MdLightMode aria-hidden="true" className="w-8 h-8" />
                ) : (
                  <MdDarkMode aria-hidden="true" className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-primary text-secondary dark:bg-darkPrimary dark:text-darkSecondary"
                    : "text-text dark:text-darkText hover:bg-primary dark:hover:bg-darkPrimary hover:text-secondary dark:hover:text-darkSecondary",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}
