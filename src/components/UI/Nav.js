import {Link} from "react-router-dom";
import "./Nav.css";


const Nav = () => {
    return (<div className="Navbar">
        <div className="title"> LICORERA CM
        </div>
        <div className="Pages">
            <div className="page">
                <Link to={`/`}>LICORERA CM</Link>
            </div>
            <div className="page">
                <Link to={`/category/ron`}>Ron</Link>
            </div>
            <div className="page">
                <Link to={`/category/whisky`}>Whisky</Link>
            </div>
            <div className="page">
                <Link to={`/category/tequila`}>Tequila</Link>
            </div>
            <div className="page">
                <Link to={`/category/aguardiente`}>Aguardiente</Link>
            </div>
            <div className="page">
                <Link to={`/category/crema`}>Crema</Link>
            </div>
            <div className="page">
                <Link to={`/category/vino`}>Vino</Link>
            </div>
            <div className="page">
                <Link to={`/category/cerveza`}>Cerveza</Link>
            </div>
        </div>
            
    </div>)
}

export default Nav;

