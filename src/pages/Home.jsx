import Navbar from "../components/Navbar";
import Welcome from "../components/Home_page/Welcome";

function Home() {
    return(
        <div className="-pt-1">
            <Navbar/>
            <Welcome/>
        </div>
    )
}

export default Home;