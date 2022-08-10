import FormContact from '../FormContact';
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="flex items-center min-h-screen p-4 overflow-hidden bg-gray-50">
                <div className="container grid grid-cols-1 mx-auto space-y-4 lg:grid-cols-2">
                    <div className="relative flex flex-col items-start justify-start lg:p-8 ">
                        <div className="absolute hidden -right-52 -bottom-40 lg:block ">
                            <Image
                                className=""
                                src={"/static/img/contactenos.svg"}
                                alt="contactenos"
                                width={900}
                                height={800}
                            />
                        </div>
                        <div className="lg:absolute">
                            <h2 className="font-bold text-center text-blue-500 lg:text-left ">
                                Contacto
                            </h2>
                            <h3 className="text-4xl font-bold text-center text-gray-600 lg:text-6xl">
                                Puedes Contactarte Con Nosotros
                            </h3>
                            <p className="text-lg font-semibold text-gray-700 ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus laoreet, enim ut
                                interdum imperdiet, dolor nisl commodo dui, eget
                                molestie augue nunc consectetur dolor.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end lg:p-8">
                        <FormContact />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactSection;