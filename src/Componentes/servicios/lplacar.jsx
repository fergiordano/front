/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Lplacar = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

            <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
                    <img
                        src="https://optimainmobiliaria.com/wp-content/uploads/2023/03/Tips-para-una-limpieza-efectiva-de-muebles-de-Melamina-Aprende-como-hacerlo-correctamente-1080x675.jpg"
                        alt="Imagen Redonda"
                        className="w-100 h-100 object-cover rounded-full"
                    />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">

                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Placar</h1>
                    <p className="mb-8 leading-relaxed">
                    Nuestro servicio de limpieza de placares (armarios o clósets) ofrece una solución especializada para mantener estos espacios de almacenamiento limpios, organizados y libres de polvo y desorden. Entendemos la importancia de mantener los armarios limpios y en buen estado, ya que son fundamentales para mantener tu ropa y objetos personales en condiciones óptimas. Nuestro equipo de limpieza se encargará de limpiar a fondo el interior de los placares, incluyendo estantes, cajones y barras, para que puedas tener un ambiente limpio y ordenado para tu ropa y pertenencias. <br />
                    Características principales del servicio: <br />
                    1. Limpieza profunda de estantes y superficies. <br />
                    2. Limpieza de cajones. <br />
                    3. Eliminación de desorden. <br />
                    4. Limpieza de barras y perchas.
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

export default Lplacar;