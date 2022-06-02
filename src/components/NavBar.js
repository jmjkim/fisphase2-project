import { Link } from "react-router-dom";
import StockManagerSelector from "./sub_component/StockManagerSelector";

const NavBar = () => {
    return (
        <div>
            <nav>
                <h2>Inventory Manager</h2>

                <Link to="/" style={{ 'fontWeight': 'bold', 'textDecoration': 'none' }}>Dashboard</Link>
                <Link to="contact" style={{ 'fontWeight': 'bold', 'textDecoration': 'none' }}>Contact</Link>
                
                <StockManagerSelector />
            </nav>
        </div>
    );
}

export default NavBar;