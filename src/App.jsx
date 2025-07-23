import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Cursor />
    </>
  );
}

export default App;
