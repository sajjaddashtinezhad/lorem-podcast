import React from "react";
import Arrow from "../images/arrow.svg";
import { Link } from 'gatsby'

const Menu = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-zinc-700 bg-opacity-50 backdrop-filter backdrop-blur-md z-20 transform transition-transform duration-300 text-white flex flex-col p-6 md:p-16 w-full md:w-80 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="hover:translate-x-1 duration-200">
        <img src={Arrow} alt="Close" className="w-6 -rotate-90" />
      </button>
      <nav className="mt-16">
        <ul>
          <li className="py-4 hover:translate-x-1 duration-200">
            <Link to="/episodes">
                اپیزودها
            </Link>
          </li>
          <li className="py-4 hover:translate-x-1 duration-200">
          <button>
                معرفی کتاب
            </button>
          </li>
          <li className="py-4 hover:translate-x-1 duration-200">
          <button>
                درباره‌ی ما
            </button>
          </li>
        </ul>
      </nav>
      <div className="block md:hidden mt-5">
      <div className="text-rtl">
          <span className="text-zinc-500 text-base">
          ارتباط با ما
          </span>
          <a href="mailto:info@lorempodcast.ir" className="block text-white text-base hover:text-zinc-300 duration-300">
            info@lorempodcast.ir
          </a>
        </div>
        <div className="mt-3">
          <span className="text-zinc-500 text-base">
          لورم پادکست در شبکه‌های اجتماعی
          </span>
          <div className="flex gap-2">
            <a href="https://instagram.com/lorempodcast?igshid=MzNlNGNkZWQ4Mg==" className="text-white text-base hover:text-zinc-300 duration-300">
              اینستاگرام
            </a>
            <span className="text-white text-base">|</span>
            <a href="https://t.me/lorempodcast" className="text-white text-base hover:text-zinc-300 duration-300">
              تلگرام                
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;