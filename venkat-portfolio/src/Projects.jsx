function Projects() {
  const projects = [
    {
      title: 'CareerConnect',
      description: 'Job portal using Angular, Node.js, and MySQL integrated with USAJOBS API.',
      url: 'https://github.com/master-projects-theses/2025-spring-VenkatSai.Vainala'
    },
    {
      title: 'CricGenie',
      description: 'Live cricket app with Django and RapidAPI for real-time stats.',
      url: 'https://github.com/SailaxmiKameta/CricGenie'
    },
    {
      title: 'Fresh Harvest',
      description: 'Farm-to-consumer produce delivery system built on MySQL.',
      url: '#'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;