import React from 'react';
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <div>
        <section id="Acerca-de-mi" class="about ">
            <div class="about-container">
                <div class="row">
                    <div class="sect-title">
                        <h3>Acerca de mí.</h3>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="about-text">                
                    <div class="details">
                        <p>Mi nombre es Dainer Samuel Florian Arroyo y estudio <label>Ingeniería de Software</label>.
                            Tengo 18 años, nací el 05 de Junio del 2005 en Cartagena de Indias. Me
                            entusiasma el desarrollo de software. Desde joven, he demostrado gran
                            interés por la informática y la programación, por lo que decidí
                            emprender mi formación dentro de una carrera de este impresionante campo.
                        </p>
                    </div>
                    <div class="contact-info">
                        <ul>
                            <h3>Más información:</h3>
                            <li>
                                <label class="info">Nacionalidad: </label>Colombiano.
                            </li>
                            <li>
                                <label class="info">Dirección: </label>Urb. Los Cerezos.                        
                            </li>
                            <li>
                                <label class="info">Teléfono: </label>+57 311 714 1048
                            </li>
                            <li>
                                <label class="info">Estado: </label>En busca de Empleo.
                            </li>
                            <li>
                                <label class="info">E-mail: </label><a href="mailto:florianarroyo15@gmail.com">florianarroyo15@gmail.com</a>
                            </li>
                        </ul>
                    </div>               
                </div>            
            </div>
        </section>
    </div>
  )
}
