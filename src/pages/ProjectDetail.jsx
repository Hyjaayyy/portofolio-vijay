import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <h1 style={{ color: "white" }}>Project tidak ditemukan</h1>;
  }

  return (
    <div style={{ padding: "60px 40px", color: "white" }}>

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#00ffff",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ← Kembali
      </button>

      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px 0",
          borderRadius: "10px"
        }}
      />

      <p>{project.description}</p>

      <h3>Tech Stack:</h3>
      <ul>
        {project.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      {/* 🔥 BUTTONS */}
      <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 20px",
              border: "1px solid #888",
              borderRadius: "8px",
              textDecoration: "none",
              color: "white"
            }}
          >
            Github
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 20px",
              background: "#00ffff",
              color: "black",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            🚀 Live Demo
          </a>
        )}

      </div>

    </div>
  );
}

export default ProjectDetail;