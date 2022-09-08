import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
const initialState = {
    stickyClass: "h-20",
};
const Header = () => {
    const { pathname } = useRouter();
    const [stickyClass, setStickyClass] = useState(initialState.stickyClass);

    function stickNavbar() {
        let windowHeight = window.scrollY;
        setStickyClass(
            windowHeight > 0
                ? "bg-gray-50/90 backdrop-blur-md shadow h-16"
                : initialState.stickyClass
        );
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

    return (
        <div
            className={`${
                pathname !== "/" ? "block" : "fixed"
            } w-full ${stickyClass} transition-all duration-300  ease-in-out z-10 hidden lg:block`}
        >
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
