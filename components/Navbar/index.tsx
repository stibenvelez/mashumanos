import Link from "next/link";
import { useRouter } from "next/router";
import { dataNavbar } from "./dataNavbar";

const NavbarComponent = () => {
    return (
        <nav>
            <ul className="flex justify-center gap-6">
                {dataNavbar.map((item, index) => (
                    <li
                        key={index}
                        className="font-bold text-blue-500 cursor-pointer hover:text-red-400"
                    >
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarComponent;
