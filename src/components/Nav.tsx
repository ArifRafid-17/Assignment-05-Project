import { useState } from "react";
import logoText from "../assets/logo-text.png";
import menuIcon from "../assets/hamburger.png"; // change to your icon's file name

const Nav = () => {
  // true = drawer is open, false = closed
  const [isOpen, setIsOpen] = useState(false);

  // The menu links, written once and reused inside the drawer
  const links = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Mobile: 3 parts (left, middle, right). Tablet and up: normal flex row */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center md:flex md:justify-between">
        {/* Left: Hamburger icon (mobile only) */}
        <div className="md:hidden justify-self-start">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="-ml-2 p-2"
            aria-label="Open menu"
          >
            <img src={menuIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Middle on mobile, left on desktop: Logo */}
        <div className="flex items-center justify-self-center">
          <a href="#" className="flex items-center">
            <img
              src={logoText}
              alt="Dev Stack Logo"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-500">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={
                  link.name === "Home"
                    ? "text-pink-600 transition-colors duration-150"
                    : "hover:text-gray-900 transition-colors duration-150"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons (smaller on mobile) */}
        <div className="flex items-center gap-2 md:gap-5 justify-self-end">
          <button
            type="button"
            className="text-[11px] md:text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Sign In
          </button>
          <button
            type="button"
            className="text-[11px] md:text-[13px] font-semibold text-white bg-pink-600 hover:bg-pink-700 px-3 py-1.5 md:px-5 md:py-2 rounded-lg transition-all duration-150 shadow-sm active:scale-95"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Dark overlay behind the drawer. Clicking it closes the drawer. */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Left sliding drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80%] bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header: logo + close button */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 h-16">
          <img
            src={logoText}
            alt="Dev Stack Logo"
            className="h-7 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-2xl leading-none text-slate-400 hover:text-slate-700"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <ul className="flex flex-col px-5 py-4 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  link.name === "Home"
                    ? "block rounded-lg bg-pink-50 px-3 py-3 text-pink-600"
                    : "block rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-gray-900"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Nav;