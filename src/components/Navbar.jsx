function Navbar() {
  return (
    <nav className="navbar">
      <h2>Vijay Anjar Pratama</h2>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a> {/* ✅ TAMBAH */}
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;