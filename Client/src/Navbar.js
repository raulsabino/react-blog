import { Link } from "react-router-dom";

const Navbar = () => {
	return ( 
		<div className="nav">
			<h1 className="logo" >Raul Sabino</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
			</div>
			<div className="button">
					<Link to="/NewBlog">New Blog</Link>
				</div>
		</div>
	);
}
 
export default Navbar;