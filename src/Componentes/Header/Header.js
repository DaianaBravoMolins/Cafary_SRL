
import "./Header.css"; 

import {Link} from 'react-router-dom';

export default function Header({hoja}){
    return(
        <nav>
            <Link to="/" id="home">Home</Link>
            <Link to="/Productos" id="productos">Productos</Link>  
            <Link to="/Contacto" id="contacto">Contacto</Link>
        </nav> 
        )
} 