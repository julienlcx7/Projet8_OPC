import './App.scss';
import Navbar from './Components/Navbar/Navbar.js';
import Card from './Components/Card/Card.js';
import Footer from './Components/Footer/Footer.js';
import Main from './pages/main.js';
import About from './pages/About.js';
import Error from './_utils/Error.js';
import { Logement } from './pages/Logement.js';
import { BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='logement/:id_url' element={<Logement/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
   </BrowserRouter>
    </div>
    
  );

}

export default App;

