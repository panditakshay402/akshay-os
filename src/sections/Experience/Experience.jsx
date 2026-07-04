import "./Experience.css";

const experiences = [
  {
    company: "IBM",
    role: "Application Developer",
    duration: "May 2026 - Present",
    description:
      "Working on enterprise applications, automation, frontend development and modern web technologies."
  },
  {
    company: "Edugenius Software LLP",
    role: "Robotics & Programming Trainer",
    duration: "Apr 2026 - Jul 2026",
    description:
      "Taught Robotics, Programming, Arduino and STEM concepts to school students."
  },
  {
    company: "Equitec Pvt Ltd",
    role: "Software Developer Intern",
    duration: "2024",
    description:
      "Worked on .NET, JavaScript, Bootstrap and SQL Server based web applications."
  }
];

function Experience() {

    return (

        <section
            className="experience"
            id="experience"
        >

            <p className="section-tag">
                EXPERIENCE
            </p>

            <h2 className="section-title">
                My Professional Journey
            </h2>

            <div className="timeline">

                {
                    experiences.map((item,index)=>(

                        <div
                            className="timeline-item"
                            key={index}
                        >

                            <div className="timeline-dot"></div>

                            <div className="timeline-content">

                                <span className="duration">
                                    {item.duration}
                                </span>

                                <h3>
                                    {item.role}
                                </h3>

                                <h4>
                                    {item.company}
                                </h4>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default Experience;