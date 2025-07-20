import { Routes, Route, Navigate } from 'react-router-dom';
import Main from "./pages/Main";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Main />} />
   </Routes>
    <Cursor/>
   </>
  );
}

export default App;
