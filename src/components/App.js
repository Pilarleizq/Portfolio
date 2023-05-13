/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';

// - Imágenes
import logo from '../images/pleizq.png'
// import foto from '../images/foto.jpeg';
// import footer from '../images/stay-at-home.png'

//React
// import { useEffect, useState } from 'react';

//Míos 


/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */

  return ( 
  <>
<header classNameName="page__header">
        <img className="page__logo" src={logo} alt="logo"/>

        <ul className="header__nav">
          <li className="header__li">Sobre mí</li>
          <li className="header__li">Proyectos</li>
          <li className="header__li">Cursos</li>
          <li className="header__li">Otros</li>
          <li className="header__li">Contacto</li>
        </ul>
      </header>

    <main className="page__main">
      <h1 className="page__main__name">Pilar Leiva Izquierdo</h1>
       <img className="page__main__photo" src="../src/images/foto.jpeg" alt="foto personal"/>
      <section className="section_1">
          <article className="section__projects">Proyectos</article>
            <div className="projects_div">
              <p>Desarrolalobas</p>
              <p>Adivina el número</p>
              <p>PowerpuffLopers</p>
              <p>Friends</p>
              <p>Harry Potter</p>
              <p>Full Of Proyects (FOP)</p>
            </div>

      </section>
      <section className="section_2">
          <article className="section__rrss">Redes Sociales</article>
          <div className="rrss_div">
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>

          <article className="section__contact">Contacto</article>
          <div className="contact_div">
            <p>Email</p>
            <p>Teléfono</p>
          </div>
      </section>
      </main>
        
    <footer className="page__footer">
      <small className="page__footer__small">
        &copy; 2023
      </small>
      <img className="page__footer__img" src="../src/images/stay-at-home.png" alt="icono casa"/>
    </footer>
</>
);
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
