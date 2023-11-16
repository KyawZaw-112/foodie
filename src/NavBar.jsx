import React from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Link to={'/'}>
			<div className="flex items-center gap-2 my-8 cursor-pointer sticky">
				<RiRestaurant2Fill className="text-3xl text-sky-500" />
				<p className="text-2xl font-semibold text-slate-500">Foodie</p>
			</div>
		</Link>
	);
};

export default NavBar;
