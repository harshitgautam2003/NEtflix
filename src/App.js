import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider >
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} /> 
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
