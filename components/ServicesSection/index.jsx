import React from 'react'
import CardServicio from './CardServicio'

const ServicesSection = ({ services }) => {
    return (
        <section id='services'>
            <div className="flex min-h-screen p-4 bg-gray-50">
                <div className="container p-2 mx-auto space-y-4 flex flex-col items-center justify-center">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold text-center text-blue-500 ">
                            Servicios
                        </h2>
                        <h3 className="text-6xl font-bold text-center text-gray-600 capitalize">
                            Conoce nuestros servicios
                        </h3>
                        <p className="text-lg font-semibold text-center text-gray-700 ">
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
                        <button className="px-4 py-2 text-white bg-blue-500 rounded-full">
                            Ver mas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default ServicesSection