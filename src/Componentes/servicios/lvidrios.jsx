// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const Lvidrios = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

            <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://eurosanic.com/wp-content/uploads/2022/01/portada-seccion-limpieza-de-cristales-vidrios-848x477x80xX.jpg"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
                <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Vidrios</h1>
                <p className="mb-8 leading-relaxed">
                Nuestro servicio de limpieza de vidrios es una solución especializada para mantener cristales y ventanas impecables, tanto en interiores como en exteriores. Contamos con un equipo de limpiadores altamente capacitados y equipados con herramientas y productos adecuados para garantizar un resultado brillante y sin rayas en todas las superficies de vidrio. Ya sea en residencias, oficinas, tiendas o edificios comerciales, nuestro servicio de limpieza de vidrios ofrece una mejora significativa en la apariencia y la transparencia de los espacios. <br />
                Características principales del servicio: <br />
                1. Limpieza de ventanas exteriores. <br />
                2. Limpieza de ventanas interiores. <br />
                3. Limpieza de mamparas y vidrios de ducha. <br />
                4. Eliminación de manchas y suciedad persistente. 
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

export default Lvidrios;