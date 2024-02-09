import './App.scss';
import Navbar from './Components/Navbar/Navbar.js';
import Card from './Components/Card/Card.js';
import Footer from './Components/Footer/Footer.js';
import About from './About.js';
import Error from './Error.js';
import { Logement } from './Logement.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<div className="App">
              <Navbar/>
              <Card/>
              <Footer/>
            </div>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: 'logement/:id_url',
    element: <Logement/>
  },
  {
    path:'*',
    element: <Error/>
  }

])

function App() {
  return (
    <RouterProvider router={router}/>
  );

}

export default App;
