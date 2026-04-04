import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaBrain
} from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
  SiFigma
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills & Expertise</h2>

      <div className="skill-group">
        <h4>Frontend</h4>
        <div className="skill-list">
          <div className="skill-item"><FaReact /><p>React</p></div>
          <div className="skill-item"><FaJs /><p>JavaScript</p></div>
          <div className="skill-item"><FaHtml5 /><p>HTML</p></div>
          <div className="skill-item"><FaCss3Alt /><p>CSS</p></div>
        </div>
      </div>

      <div className="skill-group">
        <h4>Frameworks</h4>
        <div className="skill-list">
          <div className="skill-item"><SiVite /><p>Vite</p></div>
          <div className="skill-item"><SiTailwindcss /><p>Tailwind</p></div>
        </div>
      </div>

      <div className="skill-group">
        <h4>Tools</h4>
        <div className="skill-list">
          <div className="skill-item"><FaGitAlt /><p>Git</p></div>
          <div className="skill-item"><SiFigma /><p>Figma</p></div>
        </div>
      </div>

      <div className="skill-group">
        <h4>Soft Skills</h4>
        <div className="skill-list">
          <div className="skill-item"><FaUsers /><p>Teamwork</p></div>
          <div className="skill-item"><FaComments /><p>Communication</p></div>
          <div className="skill-item"><FaLightbulb /><p>Problem Solving</p></div>
          <div className="skill-item"><FaClock /><p>Time Management</p></div>
          <div className="skill-item"><FaBrain /><p>Critical Thinking</p></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;