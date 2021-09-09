import React  from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "nombre": "Beatriz pinzon solano",
        "edad" : 26,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157310.png"
    },
    {
        "nombre": "Don Armando",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/157311.png"
    },
    {
        "nombre": "Marcela Valencia",
        "edad" : 32,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157313.png"
    },
    {
        "nombre": "Nicolás Mora",
        "edad" : 34,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/157315.png"
    },
    {
        "nombre": "Patricia Fernández (Peliteñida)",
        "edad" : 29,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157312.png"
    },
    {
        "nombre": "Mario Calderón",
        "edad" : 33,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/175881.png"
    },
    {
        "nombre": "Inés Ramírez",
        "edad" : 62,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/182950.png"
    },
    {
        "nombre": "Hugo Lombardi",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/182945.png"
    },
    {
        "nombre": "Daniel Valencia",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/167143.png"
    },
    {
        "nombre": "Freddy Stewart Contreras",
        "edad" : 30,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/175883.png"
    },
    {
        "nombre": "Michel Doinel",
        "edad" : 33,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/202623.png"
    },
    {
        "nombre": "Aura María Fuentes",
        "edad" : 23,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/164517.png"
    },
    {
        "nombre": "Saúl Gutiérrez",
        "edad" : 39,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/214519.png"
    },
    {
        "nombre": "Hermes Pinzón Galarza",
        "edad" : 51,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/177627.png"
    }
]

const Contenedor = () => (
    <>
         {
             estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero } img = {c.img}/>)
         }
    </>
);

export default Contenedor;