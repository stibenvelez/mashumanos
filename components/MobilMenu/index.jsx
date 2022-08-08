import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { dataNavbar } from "../Navbar/dataNavbar";
import Slide from "../Slide";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faFontAwesome,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const MobilMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button
                onClick={() => handleShowMenu()}
                className={`lg:hidden bg-blue-100 p-2 rounded-md right-4 top-4 fixed transition-all duration-150  ease-in-out focus-within:  ${
                    showMenu ? "rotate-90 " : "rotate-180 "
                }`}
            >
                <MenuIcon className={`text-blue-900 h-6 w-6`} />
            </button>
            <Slide isOpen={showMenu} setOpen={() => handleShowMenu()}>
                <div className="h-full flex justify-between items-center bg-gray-50 flex-col">
                    <div className=" h-full items-center flex">
                        <nav>
                            <ul className="flex justify-center gap-8 flex-col items-center  ">
                                {dataNavbar.map((item, index) => (
                                    <li
                                        key={index}
                                        className="font-bold text-blue-500 cursor-pointer hover:text-purple-600 text-xl"
                                    >
                                        <Link href={item.path}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-center w-full gap-2 py-2">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="h-6 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-500"
                            />
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="h-6 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-500"
                            />
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="h-6 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-500"
                            />
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="h-6 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default MobilMenu;
