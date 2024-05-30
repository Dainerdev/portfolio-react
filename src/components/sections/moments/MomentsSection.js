import React from 'react';
import "./MomentsSection.css";

export const MomentsSection = () => {
  return (
    <div>
        <section id="Momentos-Casuales" class="moments ">
        <div class="moment-container">
            <div class="row">
                <div class="title">
                    <h3>Momentos Casuales.</h3>
                    <div class="line"></div>
                </div>
                <div class="carousel">
                    <div class="section1">
                        <div class="momment1">
                            <img src="/momments/xmas.jpg" alt="Árbol de Navidad"/>
                            <span>Árbol de Navidad.</span>
                        </div>
                        <div class="momment2">
                            <img src="/momments/torre_reloj.jpg" alt="Torre del Reloj"/>
                            <span>Torre del Reloj.</span>
                        </div>
                        <div class="momment3">
                            <img src="/momments/salida.jpg" alt="Salida"/>
                            <span>Salida a Bocagrande.</span>
                        </div>
                    </div>
                    <div class="section2">
                        <div class="momment4">
                            <img src="/momments/playa.jpg" alt="Día de Playa"/>
                            <span>Día de Playa.</span>
                        </div>
                        <div class="momment5">
                            <img src="/momments/baby_shower.jpg" alt="Baby Shower"/>
                            <span>Baby Shower.</span>
                        </div>
                        <div class="momment6">
                            <img src="/momments/dia_de_univ.jpg" alt="Día de Universidad"/>
                            <span>Día de Universidad.</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
