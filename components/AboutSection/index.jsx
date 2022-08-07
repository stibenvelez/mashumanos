import Image from "next/image";
import { BeakerIcon, CheckCircleIcon } from "@heroicons/react/outline";

const AboutSection = () => {
    return (
        <section id="about" className=" bg-gray-50">
            <div className="container flex flex-col items-center justify-center min-h-screen mx-auto ">
                <div className="grid w-full grid-cols-2 ">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-blue-500 ">
                            Acerca de Nostros
                        </h2>
                        <h3 className="mb-4 text-6xl font-bold text-gray-600">
                            Acerca de nuestra organización
                        </h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Provident, corrupti. Nemo sapiente similique
                            cumque alias? Facilis obcaecati quos, ab veritatis
                            consequuntur alias optio ex laudantium dolore
                            deleniti tempore perferendis voluptate.
                        </p>
                        <div className="py-8 space-y-2">
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
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/static/img/about.svg"
                            width={400}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
