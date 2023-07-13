import { Link } from "react-router-dom";

const Navbar = () => {
	return ( 
		<div className="nav">
			<h1>Raul Sabino</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
			</div>
			<div className="button">
					<Link to="/">Github</Link>
				</div>
		</div>
	);
}
 
export default Navbar;