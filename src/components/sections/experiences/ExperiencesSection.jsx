import "./ExperiencesSection.css";
import React, { useEffect, useState } from "react";
import { allExperiences } from "../../../services/api";

const ExperiencesSection = () => {

    const [experiences, setExperiences] = useState(null)

    useEffect(() => {
        allExperiences(setExperiences);
    }, []);


    return (
        <div>
            <section id="Experiencia-Laboral"  className="labor ">
                <div className="exp-container">
                    <div className="row">
                        <div className="title">
                            <h3>Experiencia Laboral.</h3>
                            <div className="line"></div>
                        </div>
                        <div className="info-container">                            
                            <center>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>EMPRESA</th>
                                            <th>PUESTO</th>
                                            <th>RESPONSABILIDADES</th>
                                            <th>FECHA INICIO</th>
                                            <th>FECHA FIN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {experiences != null ? (
                                            experiences.map(experiences => (                                
                                                <tr>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.id}</a>
                                                    </td>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.empresa}</a>
                                                    </td>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.puesto}</a>
                                                    </td>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.responsabilidades}</a>
                                                    </td>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.fecha_inicio}</a>
                                                    </td>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.fecha_fin}</a>
                                                    </td>
                                                </tr>
                                            ))
                                        ): ('Experiences not found')}    
                                    </tbody>
                                </table> <br />
                                <span className="span">
                                    Estos son <strong>únicamente ejemplos</strong> para el desarrollo de la actividad. <br />
                                </span>
                            </center> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ExperiencesSection;