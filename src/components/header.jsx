import React from "react"
import { Link } from "react-router-dom";
import NavbarItems from "./navbar-items"


export default function Header() {
    return (
        <>
            <div className="w-full h-20 bg-gray-900 border-b-[5px] border-b-yellow-500 ">
                <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                    <div className="flex flex-row items-center">
                        <img className="w-[78px]" src="src/assets/Logo.png" alt="logo" />
                        <NavbarItems label="QuoteGen" link="/"/>
                    </div>
                    <div className="flex items-center gap-12">
                        <NavbarItems label="About us" link="/aboutus" />
                        <NavbarItems label="All quotes" link="/allquotes" />
                        <Link to="/login">
                            <NavbarItems label="Login"/>
                        </Link>
                        <Link to="/signup">
                            <NavbarItems label="Register"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}