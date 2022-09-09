import { ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowSmLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
    const cardRef = useRef(null);
   const isInView = useInView(cardRef);
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div
                ref={cardRef}
                className="flex flex-col  max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 "
            >
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

                        <div
                            className={`${
                                open ? "min-h-min" : "h-10"
                            }  overflow-y-auto transition-all duration-200 ease-in-out`}
                        >
                            <p
                                className={`${
                                    open ? "" : "truncate"
                                } mb-3 font-normal text-gray-700 dark:text-gray-400   overflow-hidden`}
                            >
                                {longDescription}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <button
                        onClick={handleOpen}
                        className={`${
                            open
                                ? "dark:text-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:bg-gray-600 bg-gray-400 focus:ring-gray-300 "
                                : "dark:text-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-blue-800 bg-blue-600 focus:ring-blue-300 "
                        } inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none `}
                    >
                        {open ? "Ocultar" : "Ver más"}
                        <ChevronRightIcon
                            className={`${
                                open && "rotate-90"
                            } w-4 h-4 ml-2 -mr-1 transition-all duration-300 ease-in-out`}
                        />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CardServicio;
