import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import back from "../assets/back.png";

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
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            backgroundColor: "rgba(119, 98, 109, 0.8)",
            pointerEvents: "auto",
            borderRadius: "4px",
            padding: "1rem",
          }}
        >
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Тут буде типу наш текст 
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
