import Image from "next/image";
import React, { FC } from "react";
import { Psychologists } from "../../models";

interface PsyCard {
    psy: Psychologists;
}

const PsyCard = ({ psy }) => {
    const { img, firstName, className, lastName, corriente } = psy;
    return (
        <div className="flex overflow-hidden flex-col items-center bg-white shadow-sm rounded-xl hover:shadow-md cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
            <Image
                src={`/static/img/${img}`}
                height={400}
                width={250}
                alt="psicologa Sara"
                className={`${className}`}
            />
            <div className="py-4">
                <p className="text-gray-700 text-center text-xl">
                    {firstName} {lastName}
                </p>
                <p className="text-gray-400 text-center">{corriente}</p>
            </div>

        </div>
    );
};

export default PsyCard;
