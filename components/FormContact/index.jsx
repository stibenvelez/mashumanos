import React, { useState } from 'react';


const FormContact = () => {

    const [mensajeContacto, guardarmensajeContacto] = useState({
        nombre: 'prueba',
        email: '',
        mensaje: '',
        empresa: 'Mas Humanos'
    })

    const [error, guardarError] = useState(false)


    const actualizarStateMensaje = e => {
        guardarmensajeContacto({

            ...mensajeContacto,
            [e.target.name]: e.target.value
        })
    }
    const { nombre, email, mensaje } = mensajeContacto

    const EnviarMensaje = e => {
        e.preventDefault();

        //validar
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            guardarError(true)
            return null
        }

        guardarError(false)

    }


    return (
        <div className="p-4 lg:p-8 shadow-sm bg-slate-700 rounded-xl w-full lg:w-3/4 max-w-xl mx-auto">
            <form
                onSubmit={EnviarMensaje}
            >
                <div className='space-y-4'>
                    <h4 className="text-center text-white text-2xl">Enviar un email</h4>
                    <div >
                        <div class="mb-6">
                            <label for="email" class=" block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                            <input
                                name="email"
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="email"
                                onChange={actualizarStateMensaje}
                                placeholder="Tu email"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="floatingNombre">Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="floatingNombre"
                            onChange={actualizarStateMensaje}
                            placeholder="Tu nombre"
                        />

                    </div>

                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="email">Email</label>
                        <input
                            onChange={actualizarStateMensaje}
                            name="email"
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="email"
                            placeholder="Tu correo"
                        />

                    </div>

                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="message">Mensaje</label>
                        <textarea
                            name="message"
                            onChange={actualizarStateMensaje}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="message"
                            rows="5"></textarea>
                    </div>

                    <button type="submit" className="py-1 px-2 rounded bg-purple-700 w-full text-white">Enviar</button>
                </div>
            </form>

            {error && <div className="w-100 p-1 text-center">
                Todos los campos son oblitorios
            </div>}
        </div>
    );
}

export default FormContact;