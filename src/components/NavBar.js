import { Link } from "react-router-dom";
import StockManagerSelector from "./sub_component/StockManagerSelector";

export default function NavBar() {
    return (
        <div>
            <h1 className='app-title'>Inventory Manager</h1>

            <nav>
                <Link to="/" style={{ 'textDecoration': 'none' }}>Dashboard</Link>
                <Link to="contact" style={{ 'textDecoration': 'none' }}>Contact</Link>
                <StockManagerSelector />
            </nav>
        </div>
    );
}