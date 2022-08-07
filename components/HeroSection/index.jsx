import React from 'react';
import styles from "./HeroSection.module.css";


const HeroSection = () => {
    return (
        <section className={`${styles.heroContent} bg-gray-50`}>
            <div className="flex flex-col items-center justify-start w-full h-screen space-y-4 overflow-hidden pt-52">
                <div className="flex flex-col justify-start gap-4">
                    <h1 className="font-bold text-center text-blue-500 text-8xl">
                        <span className="font-bold text-yellow-500">
                            Consulta{" "}
                        </span>
                        Psicológica
                    </h1>
                    <p className="w-full text-2xl font-bold text-center text-blue-700">
                        ... Perderse puede suceder, incluso, cuando sabes dónde
                        estás
                    </p>
                </div>
                <div className="">
                    <button
                        type="button"
                        className="px-6 py-4 font-bold text-white bg-blue-500 rounded-full"
                    >
                        Más información
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;