import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Top part: logo/about on the left, link columns on the right */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Logo + description + socials */}
          <div>
            <a href="#" className="flex items-center">
              <img
                src={logoText}
                alt="Dev Stack Logo"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400 leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex items-center gap-5 text-sm font-medium text-slate-700">
              <a href="#" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-slate-900">
              PRODUCT
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-slate-900">
              COMPANY
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-slate-900">
              LEGAL
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: copyright on the left, small links on the right */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;