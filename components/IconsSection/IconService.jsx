import React from "react";

const IconService = ({ name, icon }) => {
    return (
        <div
            className="bg-gray-50  rounded-lg m-2 sghadow-sm"
            style={{ maxWidth: "250px" }}
        >
            <div className="py-2 px-4">
                <div className="flex items-center justify-center">
                    <i className={`${icon} text-lg text-indigo-400`}></i>
                    <span className="mx-1 font-bold text-indigo-400">
                        {name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default IconService;
