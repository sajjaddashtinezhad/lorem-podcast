import React from "react";
import { Link } from 'gatsby';
import LoremPodcast from "../images/lorempodcast.svg";

const Header = ({ toggleMenu }) => {
  return (
    <header className="flex flex-row justify-between items-center">
      <Link to="/">
        <h1 className="text-white text-2xl">   
          <img src={LoremPodcast} alt="LoremPodcast Logo" className="w-32" />
        </h1>
      </Link>
    <button className="flex-col group" dir="ltr" onClick={toggleMenu}>
      <div className="bg-white w-8 h-1 mb-2 group-hover:w-11 duration-300"></div>
      <div className="bg-white w-8 h-1 group-hover:w-9 duration-300"></div>
    </button>
  </header>
  );
};

export default Header;