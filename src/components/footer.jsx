import React from "react";
import NavbarItems from "./navbar-items";
import Main from "./main";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-yellow-500 py-20 font-bold border-t-[5px] border-t-yellow-500 px-32">
        <div className="max-w-screen-xl h-10 mx-auto flex items-center justify-between">
          <div className="flex flex-row items-center">
            <img className="w-[78px]" src="src/assets/Logo.png" alt="logo" />
            <NavbarItems label="QuoteGen" link={Main} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl mb-3">Locate Us</h1>
            <div className="text-xs space-y-1">
              <p>Mourouj,Tunis</p>
              <p>Mobile: +216 95 95 95 38</p>
              <p>Fixe: +216 73 51 64 98</p>
              <p>e-mail:mahdisafraoui@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <input
              type="text"
              placeholder="e-mail"
              className="bg-transparent border border-yellow-500 px-4 py-2 text-sm"
            />
            <button className="text-sm border text-white border-yellow-500 border-t-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
