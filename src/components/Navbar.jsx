import { Link, useNavigate } from "react-router-dom";
import add_character from "../assets/add_character.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-stone-900 text-white p-2 w-full fixed top-0 left-0 z-50 border-b border-stone-500">
      <nav className="flex items-center justify-between flex-wrap w-full">

        <div>
          <Link to="/">
            <img src="/Logo.svg" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <ul className="flex flex-1 justify-center items-center space-x-4 md:space-x-10 lg:space-x-40 2xl:space-x-60 text-xl">
          <li><Link to="/listings" className="underline texthover">Listings</Link></li>
          <li><Link to="/campaigns" className="underline texthover">Campaigns</Link></li>
          <li><Link to="/my-characters" className="underline texthover">My Characters</Link></li>
        </ul>

        <div className="flex items-center space-x-2">
          <Link to="/add-character">
            <img src={add_character} alt="add_character" className="mt-1 h-10 w-auto" />
          </Link>
          <Link to="/login" className="text-xl mr-10 ml-10 underline1 texthover">Log In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;