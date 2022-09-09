import Link from "next/link";
import { motion } from "framer-motion";
const HeroSection = () => {
    return (
        <section className={`relative `}>
            <img
                src="/static/img/hero-01.svg"
                className="fixed -z-10 w-full object-cover h-screen object-no-repeat object-left lg:object-center  "
            />
            <div className="container mx-auto ">
                <div className="flex flex-col w-full h-screen gap-10 overflow-hidden ustify-start pt-52">
                    <div className="flex flex-col justify-start space-y-4">
                        <motion.div
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-8xl lg:text-7xl font-bold text-blue-500 xl:text-8xl">
                                <span className="font-bold text-red-400">
                                    Consulta{" "}
                                </span>
                                Psicológica
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="w-full text-2xl font-bold text-blue-500">
                                ... Perderse puede suceder, incluso, cuando
                                sabes dónde estás
                            </p>
                        </motion.div>
                    </div>
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: .8 }}
                        >
                            <Link href="/#contact">
                                <a className="px-6 py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-red-400 trasition-all duration-200 ease-in-out">
                                    Más Información
                                </a>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
