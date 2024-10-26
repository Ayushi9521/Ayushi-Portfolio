import React from "react";

const Education = () => {
    const educationData = [
        { id: 1, degree: "B.E. in Computer Science", institution: "Deogiri Institute", year: "2016-2020", percentage:"70%" },
        { id: 2, degree: "Post Graduate Diploma in IT Management", institution: "SCDL Pune", year: "2020-2021", percentage:"65.67%" },
        { id: 3, degree: "HSC", institution: "DRJC Deulgaonraja", year: "2011-2012", percentage:" 61.50%" },
        { id: 4, degree: "Post Graduate Diploma in IT Management", institution: "SCDL Pune", year: "2020-2021", percentage:"82.36%" },
      ];
    return(
        <section className="padding" id="education">
            <h2 style={{textAlign:"center"}}>Education</h2>
            <div className="education-grid">
                {educationData.map((item) => (
                    <div key={item.id} className="education-cell">
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                    <p>{item.percentage}</p>
                    <span>{item.year}</span>
            </div>
                ))}
    </div>
        </section>

    )
};

export default Education;
