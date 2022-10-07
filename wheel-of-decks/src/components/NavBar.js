import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar sticky" >
        <h1>jawdaHome</h1>
        <div className="links">
            {/* the link tag allows react to stop the request and handle it instead of the server */}
          <Link to="/">Home</Link>
          <Link to="/wheel" >
            Deck Selector
        </Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;