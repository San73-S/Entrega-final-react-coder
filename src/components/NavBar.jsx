import { Link } from "react-router-dom";
import breakingStore from '../assets/images/Breaking-store-2.png';

function NavBar(){

    return(
        <header className="navbar">
            <nav>
                <Link to={"/"}><img src={breakingStore} alt="Breaking Store Logo"/></Link>        
                <ul>
                    <li><Link to={"/category/breaking bad"}>Breaking Bad</Link></li>
                    <li><Link to={"/category/better call saul"}>Better Call Saul</Link></li>
                    <li><Link to={"/category/el camino"}>El Camino</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar