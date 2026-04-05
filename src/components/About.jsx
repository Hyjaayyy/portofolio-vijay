import profile from "../assets/profile.png";

// ICON
import { FaUniversity, FaGamepad } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { SiReact } from "react-icons/si";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">
      <h2>About Me</h2>

      <img src={profile} alt="profile" className="about-img" />

      <p className="about-desc">
        Halo, saya <strong>Vijay Anjar Pratama</strong>, mahasiswa Sistem Informasi 
        yang berfokus pada pengembangan <span>Frontend</span> dan <span>UI/UX</span>. 
        Saya tertarik membangun tampilan web yang modern, responsif, dan nyaman digunakan.

        <br /><br />

        Sebagai mahasiswa Sistem Informasi, saya menyadari bahwa sebuah sistem 
        sangat mempengaruhi cara orang bekerja, berpikir, dan menjalani aktivitas sehari-hari.
      </p>

      <div className="about-info">
        <div className="info-item">
          <small>Education</small>
          <FaUniversity />
          <p>UAD</p>
        </div>

        <div className="info-item">
          <small>Focus</small>
          <SiReact />
          <p>Frontend & UI/UX</p>
        </div>

        <div className="info-item">
          <small>Hobby</small>
          <FaGamepad />
          <p>Competitive Gaming</p>
        </div>

        <div className="info-item">
          <small>Language</small>
          <MdLanguage />
          <p>ID & EN</p>
        </div>
      </div>
    </section>
  );
}

export default About;