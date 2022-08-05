import React from 'react';
import styles from "./HeroSection.module.css";


const HeroSection = () => {
    return (
        <section className={`${styles.heroContent}`}>
            <div className="flex flex-col items-center pt-52 justify-start   h-screen w-full   overflow-hidden space-y-4">

                <div className='flex flex-col justify-start  gap-4'>
                    <h1 className="text-center text-8xl font-bold text-blue-500">
                        <span className='font-bold text-yellow-500'>Consulta </span>Psicológica
                    </h1>
                    <p className="text-center w-full font-bold text-blue-700 text-2xl">
                        "... Perderse puede suceder, incluso, cuando sabes dónde estás."
                    </p>
                </div>
                <div className=''>
                    <button type="button" className="rounded-full py-4 px-6 text-white bg-blue-500 font-bold">Más información</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;