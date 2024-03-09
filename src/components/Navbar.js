import { Link } from "react-scroll";

function Navbar() {
  


  return (
    // <nav className="navbar">
    <nav className="navbar navopened" style={{ backgroundColor: '#010606', color: '#fafafa', position: 'fixed', top: 0, width: '100%', padding: '0.5rem', zIndex: 2, backdropFilter: 'blur(2px)' }}>

      <div className="container">
        <div className="row justify-content-center">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              SEAGULL TECHNOLOGY
            </Link>
          </h1>
        
        </div>
      </div>
    </nav>

  );
}
export default Navbar;
