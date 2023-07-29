// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Lbasica = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://www.diariodesevilla.es/2022/04/17/tecnologia/Limpieza-hogar_1675342904_156408240_667x375.jpg"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Basica</h1>
                    <p className="mb-8 leading-relaxed">
                    Nuestro servicio de limpieza básica es una solución eficiente y confiable para mantener tu hogar o lugar de trabajo limpio y ordenado. Nuestro equipo de profesionales altamente capacitados y amables se encargará de realizar una limpieza exhaustiva de tus espacios, brindándote la tranquilidad de tener un ambiente higiénico y acogedor. <br />
                        Características principales del servicio: <br />
                        1. Limpieza de superficies. <br />
                        2. Limpieza de suelos. <br />
                        3. Limpieza de áreas comunes. <br />
                        4. Productos y equipos de calidad. <br />
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

export default Lbasica;