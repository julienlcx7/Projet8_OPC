import './Error.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
function Error() {
    return(
        <div className="error">
            <Navbar/>
            <div className='txt_error'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </div>
            <Footer/>
        </div>
    );
}
export default Error;