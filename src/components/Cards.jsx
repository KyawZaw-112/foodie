import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ meal }) => {
	return (
		<div className="snap-mandatory snap-x flex flex-col border-2 w-60 rounded-xl px-2 py-2 gap-3 shadow-lg hover:scale-110 hover:translate-x-3 hover:-translate-y-5 transition duration-200">
			<div>
				<img
					src={meal.strMealThumb}
					alt="meal-image"
					className=" rounded-md snap-center backdrop-blur"
				/>
			</div>
			<p className="text-sm truncate tracking-tighter font-semibold text-indigo-400 text-center">
				{meal.strMeal}
			</p>
			<Link
				to={`/detail/${meal.idMeal}`}
				className=" mx-auto w-full flex justify-center"
			>
				<button className=" px-3 py-2 w-1/2 bg-sky-400 text-white rounded-md text-sm font-medium capitalize hover:ring-1 hover:ring-sky-400 hover:text-sky-400 hover:bg-white transition duration-200">
					detail
				</button>
			</Link>
		</div>
	);
};

export default Cards;
