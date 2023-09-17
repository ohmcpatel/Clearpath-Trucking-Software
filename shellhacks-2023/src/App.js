import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavigationPage from './components/NavigationPage';
import ConfirmationPage from './components/ConfirmationPage';
import View from './components/View';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/navigation" element={<NavigationPage/>}/>
        <Route path="/confirmation" element={<ConfirmationPage/>}/>
        <Route path="/view/:pointA/:pointB" element={<View/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
