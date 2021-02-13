import { Link } from "react-router-dom"

export default (props) => {
    return (
        <div className="contentHeader">
            <Link to="/projects" className="linkNoneDecoration" ><h5>Hola Juan</h5></Link>
            <Link to="/" >Cerrar sesión</Link>
        </div>
    );
}