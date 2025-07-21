import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return ( 
        <nav className="bg-stone-900 text-white p-2"> 
            <div className="flex items-center">
                <Link to="/"> 
                    <img src={logo} alt="Logo" style={{ width: "6rem", height: "auto" }} />
                </Link>
            </div>   
        </nav>
    );
}

export default Navbar;
