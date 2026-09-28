import logoText from "../assets/logo-text.png";
import menuIcon from "../assets/hamburger.png"; // change to your icon's file name

const Nav = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Mobile: 3 parts (left, middle, right). Tablet and up: normal flex row */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center md:flex md:justify-between">
        {/* Left: Hamburger icon (mobile only) */}
        <div className="md:hidden justify-self-start">
          <button type="button" className="-ml-2 p-2" aria-label="Menu">
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
          <li>
            <a href="#home" className="text-pink-600 transition-colors duration-150">
              Home
            </a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-gray-900 transition-colors duration-150">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors duration-150">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors duration-150">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors duration-150">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Auth Buttons (smaller on mobile) */}
        <div className="flex items-center gap-2 md:gap-5 justify-self-end">
          <button
            type="button"
            className="text-[11px] md:text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-150 cursor-pointer"
          >
            Sign In
          </button>
          <button
            type="button"
            className="text-[11px] md:text-[13px] font-semibold text-white bg-pink-600 hover:bg-pink-700 px-3 py-1.5 md:px-5 md:py-2 rounded-lg transition-all duration-150 shadow-sm active:scale-95 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;