import { Link, useNavigate } from "react-router-dom";
import add_character from "../assets/add_character.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-stone-900 text-white p-2 w-full fixed top-0 left-0 z-50 border-b border-stone-500">
      <nav className="flex items-center"> 
        <div> 
          <Link to="/"> 
            <img src="/Logo.svg" alt="Logo" style={{ width: "auto", height: "4rem"}}/>
          </Link>
        </div> 
        <ul className="flex space-x-60 text-2xl ml-90">
          <li><Link to="/listings" className="underline">Listings</Link></li>
          <li><Link to="/campaigns" className="underline1">Campaigns</Link></li>
          <li><Link to="/my-characters" className="underline2">My Characters</Link></li>
        </ul>
        <div>
        <Link to="/add-character">
        <img src={add_character} alt="add_character" className="w-75 h-auto scale-75 ml-45 mt-2"/>
        </Link>
        </div>
        <div className="text-2xl ml-15">
          <Link to="/login" className="underline">Log In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
