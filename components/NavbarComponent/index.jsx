import Link from 'next/link'

const NavbarComponent = () => {
    return (
        <nav>
            <ul className="flex justify-center gap-4">
                <li className="font-bold text-blue-500 cursor-pointer hover:text-purple-600">
                    <Link href="/">Home</Link>
                </li>
           
              <li className="font-bold text-blue-500 cursor-pointer hover:text-purple-600">
                  <Link href="/#about">
                      <a>About</a>
                  </Link>
              </li>
              <li className="font-bold text-blue-500 cursor-pointer hover:text-purple-600">
                  <Link href="/#services">
                      <a>Services</a>
                  </Link>
              </li>
             <li className="font-bold text-blue-500 cursor-pointer hover:text-purple-600">
                  <Link href="/#contact">
                      <a>Contact</a>
                  </Link>
              </li> 
            </ul>
        </nav>
    );
};

export default NavbarComponent;