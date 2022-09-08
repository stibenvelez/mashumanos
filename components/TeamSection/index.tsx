import Image from "next/image";
import React from "react";
import PsyCard from "./PsyCard";

const PSYCHOLOGISTS = [
    {
        id: 1,
        firstName: "Sara",
        lastName: "Munera",
        role: "Psicologa",
        state: "active",
        corriente: "Humanista",
        img: "sara.jpg",
        className: "object-cover object-top",
    },
    {
        id: 2,
        firstName: "Carolina",
        lastName: "Henao",
        role: "Psicologa",
        state: "active",
        corriente: "Humanista",
        img: "carolina3.jpg",
        className: "object-cover object-top_4rem",
    },
    {
        id: 3,
        firstName: "Camila",
        lastName: "Giraldo",
        role: "Psicologa",
        state: "active",
        corriente: "Humanista",
        img: "camila.jpg",
        className: "object-cover object-top",
    },
];

const TeamSection = () => {
    return (
        <section id="team" className="overflow-hidden bg-blue-50">
            <div className="container flex flex-col items-center justify-center min-h-screen p-2 mx-auto ">
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-blue-500 lg:text-left">
                        Psicologas
                    </h2>
                    <h3 className="mb-4 text-6xl font-bold  text-gray-600 lg:text-left">
                        Nuestro Equipo
                    </h3>
                    <p className="text-center text-gray-500 lg:text-left">
                        Nuestro equipo lo componen 3 comprometidas psicólogas
                    </p>
                    <div className="flex gap-16 justify-center py-8">
                        {PSYCHOLOGISTS.map((psy) => (
                            <PsyCard key={psy.id} psy={psy} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
