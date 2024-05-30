import React from 'react';
import "./AcademySection.css";

export const AcademySection = () => {
  return (
    <div>
        <section id="Formacion-Academica" class="format ">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h3>Formación Académica.</h3>
                    <div class="line"></div>
                </div>
                <div class="stage">
                    <div class="escuela">
                        <h3>Escuela:</h3>
                        <p>Estudié en el <label>Colegio Militar Almirante Colón</label>, las áreas de estudio
                            en las que más destaqué fueron matemáticas, disfrutando cada desafío 
                            que se presentaba en esta disciplina. Informática, comprendiendo lo esencial
                            de Excel y aprendiendo a desarrollar páginas web. Inglés, aprovechando
                            al máximo los conocimientos brindados por el maestro, entre otras.
                        </p>
                    </div>
                    <div class="univ">
                        <h3>Universitaria:</h3>
                        <p>Actualmente, me encuentro estudiando la carrera 
                            <label>Ingenieria de Software</label> en la 
                            <a href="https://www.unicartagena.edu.co/" target="_blank"  rel="noreferrer noopener">Universidad de Cartagena</a>, 
                            cursando quinto semestre. Esta etapa académica ha sido desafiante pero 
                            gratificante, ya que me ha permitido explorar en profundidad diversos 
                            aspectos del desarrollo de software. He trabajado en lenguajes de programación
                            como Java, Phyton y PHP, también, he manejado motores de Bases de Datos
                            como lo son MySQL, Postgre y Oracle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
