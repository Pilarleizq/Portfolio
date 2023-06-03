/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';

// - Imágenes
import logo from '../images/pleizq.png'
import photo from '../images/foto.jpeg'
import house from '../images/casa.png'
import desarrollalobas from '../images/desarrollalobas.png'
import numbergame from '../images/numbergame.png'
import cards from '../images/cards.png'
import aikido from '../images/aikido.png'
import harrypotter from '../images/harrypotter.png'
import fop from '../images/fop.png'
import cocktails from '../images/cocktails.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import email from '../images/gmail.png'
import phone from '../images/llamada-telefonica.png'

//React
// import { useEffect, useState } from 'react';

function App() {

  return ( 
  <>
<header className="page__header">
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
       <img className="page__main__photo" src={photo} alt="foto personal"/>
      <section className="section_1">
          <article className="section__projects">Proyectos</article>
            <div className="projects_div">
              <article>
              <img className="projects_div_each" src={desarrollalobas} alt="proyecto"></img>
              </article>
              <article>
              <img className="projects_div_each" src={numbergame} alt="proyecto"/>
              </article>
              <article>
              <img className="projects_div_each" src={cards} alt="proyecto"/>
              </article>
              <article>
              <img className="projects_div_each" src={aikido} alt="proyecto"/>
              </article>
              <article>
              <img className="projects_div_each" src={harrypotter} alt="proyecto"/>
              </article>
              <article>
              <img className="projects_div_each" src={fop} alt="proyecto"/>
              </article>
              <article>
              <img className="projects_div_each" src={cocktails} alt="proyecto"/>
              </article>
            </div>

      </section>
      <section className="section_2">
          <article className="section__rrss">Redes Sociales</article>
          <div className="rrss_div">
            <img className="rrss_div_each" src={instagram} alt="logo-instagram"/>
            <img className="rrss_div_each" src={linkedin} alt="logo-linkedin"></img>
            <img className="rrss_div_each" src={github} alt="logo-github"></img>
          </div>

          <article className="section__contact">Contacto</article>
          <div className="contact_div">
            <article className="contact_div_article">
            <img className="contact_icon" src={email} alt="icono-email"/>
            <p> pleivaizq@gmail.com</p>
            </article>
            <article className="contact_div_article">
            <img className="contact_icon" src={phone} alt="icono-telefono"/> 
            <p>608361103</p>
            </article>
          </div>
      </section>
      </main>
        
    <footer className="page__footer">
      <small className="page__footer__small">
      Pilar Leiva Izquierdo | Web developer
        &copy; 2023
      </small>
      <img className="page__footer__img" src={house} alt="icono casa"/>
    </footer>
</>
);
}

export default App;
