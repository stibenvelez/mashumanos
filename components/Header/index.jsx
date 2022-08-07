import React from "react";
import Link from "next/link";
import NavbarComponent from "../NavbarComponent";


const Header = () => {
    return (
        <div className="absolute w-full">
            <div className="container flex items-center justify-between h-20 mx-auto">
                <div className="flex items-center ">
                    <Link href="/" className="cursor-pointer">
                        <span className="text-xl font-bold text-blue-500 cursor-pointer">
                            LOGO
                        </span>
                    </Link>
                </div>
                <div>
                    <NavbarComponent />
                </div>
                <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-400">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
