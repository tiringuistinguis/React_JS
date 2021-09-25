import React from 'react';



const NavBar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
        <a class="navbar-brand" href="#"> React</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/estudiantes">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/contacto">Contactos</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/DatosApi">Datos api</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
)



export default NavBar;
