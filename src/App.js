
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </>
  );
}

export default App;
