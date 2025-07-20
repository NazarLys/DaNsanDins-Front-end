import { Routes, Route, Navigate } from 'react-router-dom';
import Main from "./pages/Main";
<<<<<<< Updated upstream

function App() {
  return (
   <Routes>
    <Route path="/" element={<Main />} />
   </Routes>
=======
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Main />} />
   </Routes>
    <Cursor/>
   </>
>>>>>>> Stashed changes
  );
}

export default App;
