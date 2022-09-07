import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/outline";

const AboutSection = () => {
    return (
        <section id="about" className="overflow-hidden bg-gray-50">
            <div className="container flex flex-col items-center justify-center min-h-screen p-2 mx-auto ">
                <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-center text-blue-500 lg:text-left">
                            Acerca de Nostros
                        </h2>
                        <h3 className="mb-4 text-6xl font-bold text-center text-gray-600 lg:text-left">
                            Nuestra Organización
                        </h3>
                        <p className="text-center text-gray-500 lg:text-left">
                            Seres Humanos nace de la necesidad de brindar un
                            apoyo emocional a cada persona, niño, niña y
                            adolescente en el desarrollo de su cotidianidad
                            frente a lo que se le pueda presentar, teniendo en
                            cuenta lo holístico de cada ser, mente, cuerpo y
                            alma. También nos extendemos a áreas
                            organizacionales asesorando a las empresas en sus
                            procesos de formación, capacitación y outsourcing.
                        </p>
                        {/* <div className="py-8 space-y-2">
                            <div className="flex gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                <p className="font-bold text-gray-500">
                                    Lorem ipsum dolor sit
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                <p className="font-bold text-gray-500">
                                    Lorem ipsum dolor sit
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                <p className="font-bold text-gray-500">
                                    Dolorum nam in, nobis quas quo.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                <p className="font-bold text-gray-500">
                                    Libero incidunt, laudantium
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <Image
                            src="/static/img/about.svg"
                            width={400}
                            height={500}
                            layout="responsive"
                            alt="about"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
