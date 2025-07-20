import { Link, useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
import logo from "../assets/logo.png";
=======

>>>>>>> Stashed changes

const Navbar = () => {
    const navigate = useNavigate();
    return ( 
<<<<<<< Updated upstream
        <nav className="bg-stone-900 text-white "> 
            <div className=""> 
                <Link to="/" className=""> 
                <img src={logo} alt="Logo" className="" />
                </Link> 
                </div>   
=======
        <nav className="bg-stone-900 text-white p-2 "> 
            <div className="bg-black-900"> 
                <Link to="/" className=""> 
                    <img src="/Logo.svg" alt="Logo" style={{ width: "6rem", height: "auto"}}/>
                </Link>
            </div>   
>>>>>>> Stashed changes
        </nav>
    )
}
export default Navbar;