import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Cursor from "./components/Cursor";
import Listings from "./pages/Listings";
import My_Characters from "./pages/My_Characters";
import Campaigns from "./pages/Campaigns";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listings" element={<Listings/>} />
        <Route path="/my-characters" element={<My_Characters/>} />
        <Route path="/campaigns" element={<Campaigns/>} />
      </Routes>
      <Cursor />
    </>
  );
}

export default App;