import Image from 'next/image';
import React, { FC } from 'react'
import { Psychologists } from '../../models';

interface PsyCard {
    psy: Psychologists;
}

const PsyCard = ({ psy }) => {
    const { img, firstName, className, lastName } = psy;
    return (
        <div className="flex overflow-hidden flex-col items-center bg-white shadow-sm rounded-xl hover:shadow-md cursor-pointer">
            <Image
                src={`/static/img/${img}`}
                height={400}
                width={250}
                alt="psicologa Sara"
                className={`${className}`}
            />
            <div className='py-4'>
                <p className="text-red-400 text-center font-semibold  text-2xl">{firstName}</p>
                <p className="text-gray-500 text-center">{lastName}</p>
                <span></span>
            </div>
        </div>
    );
};

export default PsyCard