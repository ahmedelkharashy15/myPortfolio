import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import './fonts/NovaSquare-Regular.ttf'
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main-app'>
      <BrowserRouter>
          <Header />
          <Home />
          <Projects />
          <Routes>
              <Route index element={<Sec1 />} />
              <Route path='/sec1' element={<Sec1 />} />
              <Route path='/sec2' element={<Sec2 />} />
              <Route path='/sec3' element={<Sec3 />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
