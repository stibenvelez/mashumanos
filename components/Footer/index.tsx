import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <section className="min-h-[400px] bg-gray-800 flex flex-col justify-center">
            <div className="container flex flex-col items-center justify-center w-full h-full mx-auto space-y-4">
                <div className="flex justify-center w-full gap-4 py-2">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="h-8 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-500"
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="h-8 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-rose-500"
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="h-8 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-blue-400"
                    />
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="h-8 text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-green-500"
                    />
                </div>
                <p className="text-sm text-gray-400">&copy; Copyright 2022</p>
            </div>
        </section>
    );
};

export default Footer;
