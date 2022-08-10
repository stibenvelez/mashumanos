import CardServicio from "./CardServicio";

interface Service {
    service: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    state: boolean;
}

type ServicesSectionpProps = {
    services: Service[];
};

const ServicesSection = ({ services }: ServicesSectionpProps) => {
    console.log(services);
    return (
        <section id="services">
            <div className="flex min-h-screen bg-gray-50">
                <div className="container flex flex-col items-center justify-center px-2 mx-auto space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold text-center text-blue-500 ">
                            Servicios
                        </h2>
                        <h3 className="text-6xl font-bold text-gray-600 capitalize lg:text-center">
                            Conoce nuestros servicios
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 lg:text-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste sequi laborum dolore
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 py-4">
                        {services &&
                            services.map((service, index) => (
                                <CardServicio
                                    key={index}
                                    title={service.service}
                                    description={service.shortDescription}
                                    image={service.image}
                                />
                            ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-2 text-white transition-all duration-200 ease-in-out bg-blue-600 rounded-full hover:translate-y-2 hover:bg-blue-500">
                            Ver mas servicios
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
