import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <nav className="bg-stone-900 text-white "> 
            <div className=""> 
                <Link to="/" className=""> 
                <img src={logo} alt="Logo" className="" />
                </Link> 
                </div>   
        </nav>
    )
}
export default Navbar;