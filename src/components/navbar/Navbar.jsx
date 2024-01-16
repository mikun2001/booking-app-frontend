import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}>
					<span className="logo" onClick={() => navigate("/")}>
						abhibooking
					</span>
				</Link>
				<div className="navItems">
					<button className="navButton">Register</button>
					<button className="navButton">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
