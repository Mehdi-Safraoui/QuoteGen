import React from "react";

export default function NavbarItems(props) {
    return (

        <a className=" text-yellow-500 text-base font-bold hover:text-white hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            {props.label}
        </a>
    )
}