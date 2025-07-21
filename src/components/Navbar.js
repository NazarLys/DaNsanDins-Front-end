import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import back from "../assets/back.png";  // Імпорт зображення

const Navbar = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: '#2C2C2C', height: '75px' }}
        className="text-white p-2"
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
          </Link>
        </div>
      </nav>

      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",               
          backgroundPosition: "center",          
        }}
      >
        {}
      </div>
    </>
  );
};

export default Navbar;

