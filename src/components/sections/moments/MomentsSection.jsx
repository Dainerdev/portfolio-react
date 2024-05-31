import React from 'react';
import "./MomentsSection.css";

export const MomentsSection = () => {
  return (
    <div>
        <section id="Momentos-Casuales" className="moments ">
        <div className="moment-container">
            <div className="row">
                <div className="title">
                    <h3>Momentos Casuales</h3>
                    <div className="line"></div>
                </div>
                <div className="carousel">
                    <div className="section1">
                        <div className="momment1">
                            <img src="/momments/xmas.jpg" alt="Árbol de Navidad"/>
                            <span className="img-span">Árbol de Navidad.</span>
                        </div>
                        <div className="momment2">
                            <img src="/momments/torre_reloj.jpg" alt="Torre del Reloj"/>
                            <span className="img-span">Torre del Reloj.</span>
                        </div>
                        <div className="momment3">
                            <img src="/momments/salida.jpg" alt="Salida"/>
                            <span className="img-span">Salida a Bocagrande.</span>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="momment4">
                            <img src="/momments/playa.jpg" alt="Día de Playa"/>
                            <span className="img-span">Día de Playa.</span>
                        </div>
                        <div className="momment5">
                            <img src="/momments/baby_shower.jpg" alt="Baby Shower"/>
                            <span className="img-span">Baby Shower.</span>
                        </div>
                        <div className="momment6">
                            <img src="/momments/dia_de_univ.jpg" alt="Día de Universidad"/>
                            <span className="img-span">Día de Universidad.</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
