import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            {/* the link tag allows react to stop the request and handle it instead of the server */}
          <Link to="/">Home</Link>
          <Link to="/create" >
            New Blog
        </Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;