import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    return (
        <nav>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === '/About' ? 'active' : ''}>
                    <Link to="/About">Profile</Link>
                </li>
                <li className={location.pathname === '/Contact' ? 'active' : ''}>
                    <Link to="/">another thing</Link>
                </li>
            </ul>
        </nav>
    )
}