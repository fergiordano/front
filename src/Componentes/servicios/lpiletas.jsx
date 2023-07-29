// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const Lpiletas = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

            <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://phbolivia.com/wp-content/uploads/2019/08/limpiadora-giratoria.jpg"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
                <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Piletas</h1>
                <p className="mb-8 leading-relaxed">
                Nuestro servicio de limpieza de piletas ofrece una solución completa y especializada para mantener tu piscina en condiciones óptimas y listas para su uso. Contamos con un equipo de profesionales capacitados y con experiencia en el mantenimiento y limpieza de piscinas de todo tipo, ya sean piscinas residenciales, de hoteles, clubes o cualquier otro entorno. Nos aseguramos de que el agua de tu piscina esté limpia, segura y libre de impurezas para que puedas disfrutar de un ambiente refrescante y saludable. <br />
                Características principales del servicio: <br />
                1. Limpieza del agua. <br />
                2. Limpieza de superficies. <br />
                3. Limpieza de filtros. <br />
                4. Servicio de invierno. 

                </p>
                <Link to="/Formulario">
                <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                    Solicitar Servicio
                </button>
                </Link>
                </div>
            </div>
        </section>
    );
};

export default Lpiletas;