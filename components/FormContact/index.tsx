import React, { useState } from "react";

const FormContact = () => {
    const [mensajeContacto, guardarmensajeContacto] = useState({
        nombre: "prueba",
        email: "",
        mensaje: "",
        empresa: "Mas Humanos",
    });

    const [error, guardarError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        guardarmensajeContacto({
            ...mensajeContacto,
            [e.target.name]: e.target.value,
        });
    };
    const { nombre, email, mensaje } = mensajeContacto;

    const EnviarMensaje = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        //validar
        if (
            nombre.trim() === "" ||
            email.trim() === "" ||
            mensaje.trim() === ""
        ) {
            guardarError(true);
            return null;
        }

        guardarError(false);
    };

    return (
        <div className="w-full max-w-xl p-4 shadow-sm lg:p-8 bg-slate-700 rounded-xl lg:w-3/4">
            <form onSubmit={EnviarMensaje}>
                <div className="space-y-4">
                    <h4 className="text-2xl text-center text-white">
                        Enviar un email
                    </h4>
                    <div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="email"
                                onChange={handleChange}
                                placeholder="Tu email"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label
                            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                            htmlFor="floatingNombre"
                        >
                            Nombre
                        </label>
                        <input
                            name="nombre"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="floatingNombre"
                            onChange={handleChange}
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="">
                        <label
                            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="email"
                            placeholder="Tu correo"
                        />
                    </div>

                    <div className="">
                        <label
                            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                            htmlFor="message"
                        >
                            Mensaje
                        </label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="message"
                            rows={5}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-2 py-1 text-white bg-purple-700 rounded"
                    >
                        Enviar
                    </button>
                </div>
            </form>

            {error && (
                <div className="p-1 text-center w-100">
                    Todos los campos son oblitorios
                </div>
            )}
        </div>
    );
};

export default FormContact;
