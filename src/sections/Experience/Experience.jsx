import "./Experience.css";

const experiences = [
  {
    company: "IBM",
    role: "Application Developer",
    duration: "May 2026 - Present",
    description:
      "Working on enterprise applications, automation, full-stack development and modern web technologies."
  },

  {
    company: "Equitec",
    role: "Software Developer",
    duration: "Sep 2024",
    description:
      "Worked on JavaScript, React-Native, Bootstrap, .Net and SQL Server based web applications."
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