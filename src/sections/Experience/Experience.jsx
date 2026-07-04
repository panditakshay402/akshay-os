import "./Experience.css";

const experiences = [
  {
    company: "IBM India Pvt. Ltd.",
    role: "Application Developer",
    duration: "May 2026 - Present (Full-time)",
    description:
      "Working on enterprise applications, automation, full-stack development and modern web technologies."
  },

  {
    company: "Equitec",
    role: "Software Developer",
    duration: "Sept 2024 (Full-time)",
    description:
      "Worked on JavaScript, React-Native, Bootstrap, .Net and SQL Server based web applications."
  },

  {
    company: "Google",
    role: "GDSC Lead",
    duration: "2023 - 2024 (Part-time)",
    description:
      "Led a team of developers in organizing events, workshops, and hackathons to promote web and mobile development."
  },
  {
    company: "The Linux Foundation",
    role: "LFX Mentee",
    duration: "2022 - 2024 (Part-time)", 
    description:
      "Contributed to open-source projects, collaborated with developers worldwide, and gained experience in software development and project management."  

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