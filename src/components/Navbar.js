import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return ( 
        <nav style={{ backgroundColor: '#2C2C2C', height: '75px' }} className="text-white p-2">
            <div className="flex items-center">
                <Link to="/"> 
                    <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
                </Link>
            </div>   
        </nav>
    );
}

export default Navbar;
