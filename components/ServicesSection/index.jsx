import CardServicio from "./CardServicio";

const ServicesSection = ({ services }) => {
    return (
        <section id="services">
            <div className="flex min-h-screen bg-gray-50">
                <div className="container px-2 mx-auto space-y-4 flex flex-col items-center justify-center">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold text-center text-blue-500 ">
                            Servicios
                        </h2>
                        <h3 className="text-6xl font-bold lg:text-center text-gray-600 capitalize">
                            Conoce nuestros servicios
                        </h3>
                        <p className="text-lg font-semibold lg:text-center text-gray-700 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste sequi laborum dolore
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 py-4">
                        {services &&
                            services
                                .slice(0, 3)
                                .map((service, index) => (
                                    <CardServicio
                                        key={index}
                                        titulo={service.servicio}
                                        descripcion={service.descripcionCorta}
                                        img={service.img}
                                    />
                                ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:translate-y-2 transition-all duration-200 ease-in-out hover:bg-blue-500">
                            Ver mas servicios
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
