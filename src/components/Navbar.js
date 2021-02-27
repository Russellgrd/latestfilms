import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbarMain">
            <ul className="navbarMainListBox">
                <Link to="/" className="navbarMainListBox-item">Home</Link>
                <Link to="/searchfilms" className="navbarMainListBox-item">Search films</Link>
                <Link to="/publiccomments" className="navbarMainListBox-item">Public comments</Link>
                <Link to="/about" className="navbarMainListBox-item">About</Link>
            </ul>
        </div>
      );
}
 
export default Navbar;