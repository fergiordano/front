// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Ltotal = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://netservicebarcelona.com/wp-content/uploads/2019/04/limpieza-de-oficina.jpg"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Total</h1>
                    <p className="mb-8 leading-relaxed">
                        Nuestro servicio de limpieza total es una solución integral y de alta calidad que transformará por completo tu hogar o lugar de trabajo. Diseñado para aquellos que buscan una limpieza profunda y exhaustiva, nuestro equipo altamente capacitado y especializado se asegurará de dejar cada rincón reluciente y libre de cualquier suciedad, polvo o desorden, este servicio incluye una limpieza integral dependiendo a las necesidades del cliente. <br />
                        Características destacadas del servicio: <br />
                        1. Limpieza profunda de todas las áreas. <br />
                        2. Limpieza de electrodomésticos. <br />
                        3. Desinfección de superficies. <br />
                        4. Servicios personalizados. <br />
                        
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

export default Ltotal;