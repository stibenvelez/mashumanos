import Image from "next/image";
import { FC, useState } from "react";

interface Service {
    id: number;
    service: string;
    image: string;
    shortDescription: string;
    longDescription: string;
}

interface CardServicioProps {
    service: Service;
}

const CardServicio: FC<CardServicioProps> = ({ service }) => {
    console.log(service);
    const {
        service: title,
        image,
        shortDescription,
        longDescription,
        id,
    } = service;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div className="">
                <div className="w-full ">
                    <a href="#">
                        <Image
                            className="object-cover object-center rounded-t-lg"
                            layout="responsive"
                            width={500}
                            height={300}
                            src={`/static/img/${image}`}
                            alt={`imagen de servicio ${title}`}
                            priority
                        />
                    </a>
                </div>
                <div className="px-5 pt-5 ">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white">
                            {title}
                        </h5>
                    </a>

                    <p
                        className={` mb-3 font-normal text-gray-700 dark:text-gray-400`}
                    >
                        {open ? longDescription : longDescription.slice(0, 50)}
                    </p>
                </div>
            </div>
            <div className="p-5">
                <button
                    onClick={handleOpen}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Ver
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CardServicio;
