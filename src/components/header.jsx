import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavbarItems from "./navbar-items";
import { auth } from "../../config";
import { AuthContext } from "../auth-context";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="w-full h-20 bg-gray-900 border-b-[5px] border-b-yellow-500 ">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <div className="flex flex-row items-center">
            <img className="w-[78px]" src="src/assets/Logo.png" alt="logo" />
            <Link to="/">
              <NavbarItems label="QuoteGen" />
            </Link>
          </div>
          <div className="flex items-center gap-12">
            <NavbarItems label="About us" link="/aboutus" />
            <Link to="/allquotes">
              <NavbarItems label="All quotes" />
            </Link>
            {user ? (
              <>
                <Link to="/profile">
                  <NavbarItems label="Profile" />
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="text-yellow-500 text-base font-bold hover:text-white hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <NavbarItems label="Login" />
                </Link>
                <Link to="/signup">
                  <NavbarItems label="Register" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
