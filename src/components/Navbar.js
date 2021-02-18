import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbarMain">
            <ul className="navbarMainListBox">
                <Link to="/" className="navbarMainListBox-item">Home</Link>
                <Link to="/searchfilms" className="navbarMainListBox-item">Search films</Link>
                <li className="navbarMainListBox-item">About</li>
                <li className="navbarMainListBox-item">Submit a request</li>
            </ul>
        </div>
      );
}
 
export default Navbar;