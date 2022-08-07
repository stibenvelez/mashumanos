import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar";

const Header = () => {
    const [stickyClass, setStickyClass] = useState("");

    function stickNavbar() {
        let windowHeight = window.scrollY;
        console.log(windowHeight);
        setStickyClass(
            windowHeight > 0
                ? "bg-gray-100/90 backdrop-blur-sm shadow h-16"
                : "h-20"
        );
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

    console.log(stickyClass);
    return (
        <div className={`fixed w-full ${stickyClass} transition-all duration-300  ease-in-out z-10`}>
            <div className="container flex items-center justify-center h-full mx-auto">
                {/* <div className="flex items-center ">
                    <Link href="/" className="cursor-pointer">
                        <span className="text-xl font-bold text-blue-500 cursor-pointer">
                            LOGO
                        </span>
                    </Link>
                </div> */}
                <div>
                    <Navbar />
                </div>
                {/* <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-400">
                        Login
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
