import React from 'react';
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <div>
        <section id="Acerca-de-mi" className="about ">
            <div className="about-container">
                <div className="row">
                    <div className="sect-title">
                        <h3>Acerca de mí.</h3>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="about-text">                
                    <div className="details">
                        <p>Mi nombre es Dainer Samuel Florian Arroyo y estudio <label>Ingeniería de Software</label>.
                            Tengo 18 años, nací el 05 de Junio del 2005 en Cartagena de Indias. Me
                            entusiasma el desarrollo de software. Desde joven, he demostrado gran
                            interés por la informática y la programación, por lo que decidí
                            emprender mi formación dentro de una carrera de este impresionante campo.
                        </p>
                    </div>
                    <div className="contact-info">
                        <ul>
                            <h3>Más información:</h3>
                            <li>
                                <label className="info">Nacionalidad: </label>Colombiano.
                            </li>
                            <li>
                                <label className="info">Dirección: </label>Urb. Los Cerezos.                        
                            </li>
                            <li>
                                <label className="info">Teléfono: </label>+57 311 714 1048
                            </li>
                            <li>
                                <label className="info">Estado: </label>En busca de Empleo.
                            </li>
                            <li>
                                <label className="info">E-mail: </label><a href="mailto:florianarroyo15@gmail.com">florianarroyo15@gmail.com</a>
                            </li>
                        </ul>
                    </div>               
                </div>            
            </div>
        </section>
    </div>
  )
}
