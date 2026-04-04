import { useNavigate } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;