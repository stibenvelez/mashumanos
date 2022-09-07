import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection/";
import ServicesSection from "../components/ServicesSection";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Home = ({ services }) => {
    return (
        <>
            <Layout>
                <Link href={`https://wa.me/573508904605?text=Hola, deseo más información de sus servicios. ¡gracias!`}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed z-50 flex items-center justify-center p-2 transition-all duration-200 ease-in-out bg-green-600 rounded-full right-4 bottom-4 w-14 hover:bg-green-400"
                    >
                        <FontAwesomeIcon
                            className="shadow-sm text-green-50 "
                            icon={faWhatsapp}
                        />
                    </a>
                </Link>
                <HeroSection />
                <AboutSection />
                <ServicesSection services={services} />
                <ContactSection />
            </Layout>
        </>
    );
};

export default Home;

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_URL}/services`);
    const services = await res.json();
    return {
        props: {
            services,
        },
    };
}
