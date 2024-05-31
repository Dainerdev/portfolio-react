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
                            <h3>Experiencia Laboral</h3>
                            <div className="line"></div>
                        </div>
                        <div className="info-container">                            
                            <center>
                                <table className="table">
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
                                                <tr key={experiences.id}>
                                                    <td>
                                                        <a href={`/#Experiencia-Laboral/experience/${experiences.id}`}>{experiences.id}</a>
                                                    </td>
                                                    <td>
                                                        {experiences.empresa}
                                                    </td>
                                                    <td>
                                                        {experiences.puesto}
                                                    </td>
                                                    <td>
                                                        {experiences.responsabilidades}
                                                    </td>
                                                    <td>
                                                        {experiences.fecha_inicio}
                                                    </td>
                                                    <td>
                                                        {experiences.fecha_fin}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={5}>Experiences not found</td>
                                            </tr>                                            
                                        )}    
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