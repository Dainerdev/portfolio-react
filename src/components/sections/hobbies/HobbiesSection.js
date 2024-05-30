import React from 'react';
import "./HobbiesSection.css";

export const HobbiesSection = () => {
  return (
    <div>
        <section id="Hobbies" class="hobbies ">
            <div class="hobb-container">
                <div class="row">
                    <div class="title">
                        <h3>Hobbies.</h3>
                        <div class="line"></div>
                    </div>
                    <div class="list">
                        <div class="sect1">
                            <div class="hobb1">
                                <i class='bx bx-game' ></i>
                                <span>VideoJuegos.</span>
                            </div>
                            <div class="hobb2">
                                <i class='bx bxl-deezer' ></i>
                                <span>Música.</span>
                            </div>
                            <div class="hobb3">
                                <i class='bx bx-code-alt' ></i>
                                <span>Programar.</span>
                            </div>
                        </div>
                        <div class="sect2">
                            <div class="hobb1">
                                <i class='bx bx-palette' ></i>
                                <span>Dibujar.</span>
                            </div>
                            <div class="hobb2">
                                <i class='bx bx-camera' ></i>
                                <span>Fotografías.</span>
                            </div>
                            <div class="hobb3">
                                <i class='bx bx-cookie' ></i>
                                <span>Cocinar.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen"></div>
            </div>
        </section>
    </div>
  )
}
