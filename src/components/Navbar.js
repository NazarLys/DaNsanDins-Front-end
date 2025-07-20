import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <nav className="bg-stone-900 text-white p-2 "> 
            <div className="bg-black-900"> 
                <Link to="/" className=""> 
                    <img src="/Logo.svg" alt="Logo" style={{ width: "6rem", height: "auto"}}/>
                </Link>
            </div>   
        </nav>
    )
}
export default Navbar;