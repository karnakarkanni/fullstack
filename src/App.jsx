
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './home/nav';
import Home from './home/home';
import Service from './home/event';
import About from './home/about';
import Footer from './home/footer';
import Indoor from './eventmana.jsx/indoor';
import Outdoor from './eventmana.jsx/outdoor';
import Registration from './login/Registration';
import Customer from './login/customer';
import Todo from './admin_access/todo';
import './App.css';
import Indoorsee from './eventmana.jsx/Seemore/indoorsee';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  

    
  

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path='/service' element={isLoggedIn ? <Service /> : <Navigate to="/login" />} />
          <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
          <Route path='/foot' element={isLoggedIn ? <Footer /> : <Navigate to="/login" />} />
          <Route path='/home/service' element={isLoggedIn ? <Indoor /> : <Navigate to="/login" />} />
          <Route path='/home/service1' element={isLoggedIn ? <Outdoor /> : <Navigate to="/login" />} />

          <Route path='/login' element={<Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/admin' element={isLoggedIn ? <Todo /> : <Navigate to="/login" />} />
          <Route path='/home/service/seemore'  element={<Indoorsee />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


