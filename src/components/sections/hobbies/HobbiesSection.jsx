import React from 'react';
import "./HobbiesSection.css";

export const HobbiesSection = () => {
  return (
    <div>
        <section id="Hobbies" className="hobbies ">
            <div className="hobb-container">
                <div className="row">
                    <div className="title">
                        <h3>Hobbies.</h3>
                        <div className="line"></div>
                    </div>
                    <div className="list">
                        <div className="sect1">
                            <div className="hobb1">
                                <i className='bx bx-game' ></i>
                                <span>VideoJuegos.</span>
                            </div>
                            <div className="hobb2">
                                <i className='bx bxl-deezer' ></i>
                                <span>Música.</span>
                            </div>
                            <div className="hobb3">
                                <i className='bx bx-code-alt' ></i>
                                <span>Programar.</span>
                            </div>
                        </div>
                        <div className="sect2">
                            <div className="hobb1">
                                <i className='bx bx-palette' ></i>
                                <span>Dibujar.</span>
                            </div>
                            <div className="hobb2">
                                <i className='bx bx-camera' ></i>
                                <span>Fotografías.</span>
                            </div>
                            <div className="hobb3">
                                <i className='bx bx-cookie' ></i>
                                <span>Cocinar.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen"></div>
            </div>
        </section>
    </div>
  )
}
