import React from 'react'
import CardServicio from './CardServicio'

const ServicesSection = ({ services }) => {
    console.log(services)
    return (
        <section>
            <div className='min-h-screen bg-gray-50 p-4 flex'>
                <div className="container mx-auto p-2 space-y-4">
                    <div className='mb-4'>
                        <h2 className="text-indigo-900 text-6xl font-bold text-center ">Servicios</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi laborum dolore</p>
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        {services && services.map((service, index) => (
                            <CardServicio
                                key={index}
                                titulo={service.servicio}
                                descripcion={service.descripcionCorta}
                                img={service.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}



export default ServicesSection