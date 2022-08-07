import React from 'react';
import FormContact from '../FormContact';
import Image from 'next/image'



const ContactSection = () => {
    return (
        <section id="contact">
            <div className="flex items-center min-h-screen p-4 bg-gray-50">
                <div className="container grid grid-cols-1 mx-auto lg:grid-cols-2">
                    <div className="relative flex flex-col items-start justify-center lg:p-8">
                        <div className="absolute hidden -right-80 -bottom-40 lg:block">
                            <Image
                                className=""
                                src={"/static/img/contactenos.svg"}
                                alt="contactenos"
                                width={900}
                                height={800}
                            />
                        </div>
                        <div className="z-10">
                            <h2 className="text-lg font-bold text-blue-500 ">
                                Contacto
                            </h2>
                            <h3 className="text-6xl font-bold text-gray-600 ">
                                Puedes Contactarte Con Nosotros
                            </h3>
                            <p className="text-lg font-semibold text-gray-700 lg:w-1/2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus laoreet, enim ut
                                interdum imperdiet, dolor nisl commodo dui, eget
                                molestie augue nunc consectetur dolor.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex justify-end p-8 ">
                        <FormContact className="" />
                    </div>
                </div>
            </div>
        </section>
    ); s
}
export default ContactSection;