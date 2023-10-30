import React from "react";
import PIEMR from "../Assets/Piemr.svg";

export default function Navbar() {
  return (
    <div className="bg-zinc-800">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="text-white text-3xl">
            <img src={PIEMR} alt="PIEMR" />
          </div>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          <div className="w-30 flex gap-2">
            <input
              type="search"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-600 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Search "
            />
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
