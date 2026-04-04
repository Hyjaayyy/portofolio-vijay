import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    show && (
      <div className="back-to-top" onClick={scrollToHero}>
        <span>Back to Top</span>
        <FaChevronUp />
      </div>
    )
  );
}

export default BackToTop;