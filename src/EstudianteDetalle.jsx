import React from 'react';
const estudiantes = [
    {
        "id": 1,
        "nombre": "Beatriz pinzon solano",
        "edad" : 26,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157310.png"
    },
    {
        "id": 2,
        "nombre": "Don Armando",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/157311.png"
    },
    {
        "id": 3,
        "nombre": "Marcela Valencia",
        "edad" : 32,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157313.png"
    },
    {
        "id": 4,
        "nombre": "Nicolás Mora",
        "edad" : 34,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/157315.png"
    },
    {
        "id": 5,
        "nombre": "Patricia Fernández (Peliteñida)",
        "edad" : 29,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/157312.png"
    },
    {
        "id": 6,
        "nombre": "Mario Calderón",
        "edad" : 33,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/175881.png"
    },
    {
        "id": 7,
        "nombre": "Inés Ramírez",
        "edad" : 62,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/182950.png"
    },
    {
        "id": 8,
        "nombre": "Hugo Lombardi",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/182945.png"
    },
    {
        "id": 9,
        "nombre": "Daniel Valencia",
        "edad" : 31,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/167143.png"
    },
    {
        "id": 10,
        "nombre": "Freddy Stewart Contreras",
        "edad" : 30,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/175883.png"
    },
    {
        "id": 11,
        "nombre": "Michel Doinel",
        "edad" : 33,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/202623.png"
    },
    {
        "id": 12,
        "nombre": "Aura María Fuentes",
        "edad" : 23,
        "genero": "F",
        "img": "https://www.personality-database.com/profile_images/164517.png"
    },
    {
        "id": 13,
        "nombre": "Saúl Gutiérrez",
        "edad" : 39,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/214519.png"
    },
    {
        "id": 16,
        "nombre": "Hermes Pinzón Galarza",
        "edad" : 51,
        "genero": "M",
        "img": "https://www.personality-database.com/profile_images/177627.png"
    }
]

const EstudianteDetalle=({match})=>{
    const estudiante = estudiantes.filter(c=>c.id===parseInt(match.params.id))[0];
    return(
        <>
        {
            estudiante ? (
                <div>
                <div class="card" >
                <div class="card-body ">
                <table className="table">
                    <tr>
                    <td class="w-50 h-25">
                        <p className="">Nombre: {estudiante.nombre}</p>
                        <p className="">Edad: {estudiante.edad}</p>
                        <p className="">Genero: {estudiante.genero}</p>
                    </td>
                    <td class="">
                                    <img class="w-50 h-25 rounded float-end" src={estudiante.img} />
            
                    </td>
                    
                    </tr>
                    </table>
                        {/* ternario para validadr un promp */}
                        {/*props.nombre ? props.nombre : "no hay nombre"*/}
                        </div>    
                </div>
                <br/>
                </div>        
            ):
            <h1>El id no esta registrado</h1>
        }
        <a href={`/estudiantes`}>Ver todos</a>
        </>
    );
    
    
}
export default EstudianteDetalle;