import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Rutas/App';
import reportWebVitals from './reportWebVitals';
import Estudiante from './Components/Moleculas/Contenedor';
import NavBar from './Components/Organismos/NavBar';
import Footer from './Components/Organismos/Footer';
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
*//*

ReactDOM.render(
  <React.StrictMode>
    <Estudiante/>
  </React.StrictMode>,
  document.getElementById('root')
  
);
*/
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
  </React.StrictMode>,
  document.getElementById('NavBar')
);
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
  
);
ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('Footer')
  
);

reportWebVitals();
