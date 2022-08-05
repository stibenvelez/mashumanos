import React from 'react';
import FormContact from '../FormContact';
import Image from 'next/image'



const ContactSection = () => {
    return (
        <section >
            <div className='min-h-screen bg-indigo-100 p-4 items-center flex'>
                <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>

                    <div className="flex flex-col items-start justify-center lg:p-8 relative">
                        <div className='-right-96 -bottom-40 absolute hidden lg:block'>
                            <Image className="" src={'/static/img/contactenos.svg'} alt="contactenos" width={900} height={800} />
                        </div>
                        <div className='z-10'>
                            <h2 className="text-indigo-900 text-6xl font-bold ">Contáctenos</h2>
                            <p className='text-gray-700 text-lg font-semibold lg:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet, enim ut interdum imperdiet, dolor nisl commodo dui, eget molestie augue nunc consectetur dolor.</p>
                        </div>
      
                    </div>

                    <div className="relative flex justify-end p-8 ">
                        <FormContact
                            className=""
                        />

                    </div>
                </div>
            </div>
        </section>

    ); s
}
export default ContactSection;