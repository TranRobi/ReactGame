import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div>
			<div className="p-4 bg-black text-white h-fit">
				<Link to="/" className="m-2 p-2 border-solid border-2 rounded nav">
					Home
				</Link>
				<Link
					to="/basket"
					className="m-2 p-2 border-solid border-2 rounded nav"
				>
					Basket
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
