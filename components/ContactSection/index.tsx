import FormContact from '../FormContact';
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="flex items-center min-h-screen p-4 overflow-hidden bg-gray-50">
                <div className="container grid grid-cols-1 mx-auto space-y-4 lg:grid-cols-2">
                    <div className="relative flex flex-col items-start justify-start lg:p-8 ">
                        <div className="absolute hidden -right-52 -bottom-48 lg:block ">
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
                                Acerquémonos un poco más
                            </h3>
                            <p className="text-lg font-semibold text-gray-700 ">
                                Déjanos tus dudas, inquietudes o sugerencias,
                                prometemos responderte lo antes posible. Si
                                deseas programar una asesoría psicológica puedes
                                ingresar por la opción de WhatsApp y te daremos
                                la información correspondiente ò envíanos tus
                                datos para contactarte.
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