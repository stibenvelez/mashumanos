import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className={`bg-[url('/static/img/hero01.svg')] bg-no-repeat p-2 lg:bg-cover bg-[center_bottom_5rem] lg:bg-center  bg-gray-50 `}
        >
            <div className="flex flex-col items-center justify-start w-full h-screen gap-10 overflow-hidden pt-52">
                <div className="flex flex-col justify-start space-y-4">
                    <h1 className="font-bold text-center text-blue-500 text-6xl lg:text-8xl">
                        <span className="font-bold text-yellow-500">
                            Consulta{" "}
                        </span>
                        Psicológica
                    </h1>
                    <p className="w-full text-2xl font-bold text-center text-blue-700">
                        ... Perderse puede suceder, incluso, cuando sabes dónde
                        estás
                    </p>
                </div>
                <div className="">
                    <Link href="/#contact">
                        <a className="px-6 py-4 font-bold text-white bg-blue-500 rounded-full">
                            {" "}
                            Más Información
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
