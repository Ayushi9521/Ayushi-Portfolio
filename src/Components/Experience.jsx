import React from "react";

const Experience = () => {
    // Sample data for work experience
    const experienceData = [
      {
        id: 1,
        role: "UI/UX Developer",
        company: "Mittrac Pvt Ltd",
        duration: "May 2022 – July 2024",
        description: "Led UI/UX team, developed efficient components using React, and created responsive layouts.",
      },
      {
        id: 2,
        role: "Web Developer Intern",
        company: "Failure to Success",
        duration: "Jun 2021 – July 2021",
        description: "Built responsive interfaces with HTML, CSS, and JavaScript, and improved accessibility.",
      },
      {
        id: 3,
        role: "PHP Developer Intern",
        company: "EAT English",
        duration: "Oct 2021 – Nov 2021",
        description: "Learned PHP fundamentals, built pages with forms, and handled basic database essentials.",
      },
    ];
  
    return (
      <section id="experience">
        <h2 style={{textAlign: "center" , paddingBottom: "5rem"}}>Experience</h2>
        <div className="experience-list">
          {experienceData.map((item) => (
            <div key={item.id} className="experience-card">
              <h3>{item.role}</h3>
              <p><strong>{item.company}</strong></p>
              <p>{item.duration}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;