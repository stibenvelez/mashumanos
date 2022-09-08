import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className={`bg-[url('/static/img/hero-01.svg')] bg-cover  bg-no-repeat p-2 bg-[center_top_6rem] lg:bg-center  bg-gray-50 `}
        >
            <div className="container mx-auto ">
                <div className="flex flex-col w-full h-screen gap-10 overflow-hidden ustify-start pt-52">
                    <div className="flex flex-col justify-start space-y-4">
                        <h1 className="text-8xl lg:text-7xl font-bold text-blue-500 xl:text-8xl">
                            <span className="font-bold text-red-400">
                                Consulta{" "}
                            </span>
                            Psicológica
                        </h1>
                        <p className="w-full text-2xl font-bold text-blue-500">
                            ... Perderse puede suceder, incluso, cuando sabes
                            dónde estás
                        </p>
                    </div>
                    <div className="">
                        <Link href="/#contact">
                            <a className="px-6 py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-red-400 trasition-all duration-200 ease-in-out">
                                Más Información
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
