import React, { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="border-gray-200 bg-violet-600">
        <div className="container flex flex-wrap items-center justify-between p-5 mx-auto sm:max-w-screen-xl sm:p-5">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
              SL Taxi & Tours
            </span>
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="px-6 py-3 text-sm font-bold text-center text-white transition duration-300 bg-black rounded-lg text-bold focus:outline-none hover:ring-2 hover:ring-offset hover:ring-gray-100 hover:ring-offset-gray-900"
            >
              Book Now
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm bg-gray-200 rounded-lg ring-white hover:bg-gray-50 text-violet-500 focus:outline-none focus:ring-2 focus:ring-gray-100 md:hidden "
              aria-controls="navbar-cta"
              aria-expanded={false}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-cta"
          >
            <ul className="flex flex-col w-full p-4 mt-4 font-bold text-white rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded hover:bg-black md:p-0 md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded hover:bg-black md:p-0 md:hover:bg-transparent "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded hover:bg-black md:p-0 md:hover:bg-transparent "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded hover:bg-black md:p-0 md:hover:bg-transparent "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
