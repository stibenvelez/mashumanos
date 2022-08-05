import React from "react";
import IconService from "./IconService";

const IconsSection = () => {
    return (
        <div className="min-h-[500px] bg-indigo-100 w-full p-4">
            <div className="container mx-auto">
                <div className="container">
                    <h2 className="text-indigo-900 text-6xl font-bold text-center ">
                        Pensamos en ti
                    </h2>
                    <p className="text-center">
                        Contamos con servicios que te brindaran mayor comodidad
                    </p>

                    <div className="flex justify-center py-8">
                        <IconService name={"Wi-Fi"} icon={"fas fa-wifi"} />
                        <IconService name={"Cafetin"} icon={`fas fa-mug-hot`} />
                        <IconService
                            name={"Amplios horarios"}
                            icon={`far fa-calendar-alt`}
                        />
                        <IconService
                            name={"Fácil llegar"}
                            icon={`fas fa-map-marked-alt`}
                        />
                        <IconService
                            name={"Espacios de trabajo"}
                            icon={`fas fa-users-cog`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconsSection;
