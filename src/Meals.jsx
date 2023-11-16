import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Loading from "./components/Loading";

const Meals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchMeals = async () => {
		const { data } = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
		);
		setMeals(data.meals);
		setTimeout(()=>{
			setIsLoading(false);
		},2000)
	};

	useEffect(() => {
		fetchMeals();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="flex flex-wrap gap-5 justify-center items-center py-4">
					{meals?.map((meal) => (
						<Cards key={meal.idMeal} meal={meal} />
					))}
				</div>
			)}
		</>
	);
};

export default Meals;
