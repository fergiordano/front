// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const Lexterior = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center"> 

                <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://us.123rf.com/450wm/bubutu/bubutu2012/bubutu201200012/161027602-lavado-a-presi%C3%B3n-hombre-limpiando-la-terraza-con-una-lavadora-a-presi%C3%B3n-limpiador-de-alta.jpg?ver=6"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
                <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Exterior</h1>
                <p className="mb-8 leading-relaxed">
                Nuestro servicio de limpieza de exterior ofrece una solución especializada para mantener las áreas exteriores de tu hogar, edificio o empresa en óptimas condiciones, mejorando tanto la estética como la funcionalidad de estos espacios. Nuestro equipo de profesionales experimentados y equipados con las herramientas adecuadas se encargará de eliminar la suciedad, los residuos y cualquier otro elemento que pueda afectar la apariencia y seguridad de las áreas exteriores. <br />
                Características principales del servicio: <br />
                1. Limpieza de fachadas. <br />
                2. Limpieza de patios y terrazas. <br />
                3. Limpieza de áreas ajardinadas. <br />
                4. Limpieza de mobiliario exterior. <br />
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

export default Lexterior;