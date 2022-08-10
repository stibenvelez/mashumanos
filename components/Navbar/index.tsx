import Link from "next/link";
import { dataNavbar } from "./dataNavbar";

const NavbarComponent = () => {
    return (
        <nav>
            <ul className="flex justify-center gap-4">
                {dataNavbar.map((item, index) => (
                    <li
                        key={index}
                        className="font-bold text-blue-500 cursor-pointer hover:text-purple-600"
                    >
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarComponent;
