import { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import img1 from "../assets/coding1.jpg";
import img2 from "../assets/coding2.jpg";
import img3 from "../assets/coding3.jpg";

// ICON
import { FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";

function Hero() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (index + 1) % images.length;

  // SCROLL KE CONTACT
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // SCROLL KE ABOUT
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-container">

        {/* TEXT */}
        <div className="hero-text">
          <p className="intro">Hello, I'm</p>
          <h1 className="name">Vijay Anjar Pratama</h1>
          <p className="subtitle">Mahasiswa Sistem Informasi - Universitas Ahmad Dahlan</p>

          {/* ✅ BUTTON UPGRADE */}
          <div className="hero-buttons">
            <button className="btn" onClick={scrollToContact}>
              Contact Me
            </button>

            <a href="/cv.pdf" download className="btn-cv">
              Download CV
           </a>
         </div>

          {/* SOCIAL */}
          <div className="hero-social">

            <div className="social-item">
              <a href="mailto:2300016163@webmail.uad.ac.id">
                <FaEnvelope />
              </a>
              <p>2300016163@webmail.uad.ac.id</p>
            </div>

            <div className="social-item">
              <a
                href="https://instagram.com/vijaypakev"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <p>@vijaypakev</p>
            </div>

            <div className="social-item">
              <a
                href="https://github.com/Hyjaayyy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <p>@Hyjaayyy</p>
            </div>

          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-slider-pro">
          <img
            key={index}
            src={images[index]}
            className="main-img"
            alt="main"
          />

          <img
            src={images[nextIndex]}
            className="side-img"
            alt="next"
          />
        </div>

      </div>

      {/* SCROLL DOWN */}
      <div className="scroll-down" onClick={scrollToAbout}>
        <span>Load More</span>
        ↓
      </div>

    </section>
  );
}

export default Hero;