import Header from '../../Componentes/Header/Header';
import PiedePagina from '../../Componentes/PiedePagina/PiedePagina';
import "./inicio.css";

export default function inicio(){
    return(
        <div >
            <Header/>
            <h1>Cafary SRL</h1>
            <h2>Sobre nosotros</h2>
            <p id="texto1">Empresa oficial de distribucion de productos "Havanna" desde 1970.
                Ofrecemos servicio de logistica y distribucion tanto en locales directos como franquicias.
            </p>
            <p id="texto2">Conoce los "Productos".</p>
            <img id="productosVarios" src={require("./media/6.jpg")}/>
            <p id="texto3">Contactanos si sos un nuevo integrante de esta familia.</p>
            <PiedePagina/>
        </div>
    )
}