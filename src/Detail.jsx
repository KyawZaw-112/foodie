import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Loading from "./components/Loading";
import { IoMdArrowRoundBack } from "react-icons/io";

const Detail = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [mealDetails, setMealDetails] = useState({});
	const fetchDetailMeal = async () => {
		const { data } = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		setMealDetails(data?.meals[0]);
		setTimeout(() => setIsLoading(false), 2000);
	};

	useEffect(() => {
		fetchDetailMeal();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="flex lg:justify-center lg:flex-row flex-col">
					<div>
						<img
							src={mealDetails.strMealThumb}
							className="h-[80vh] w-full"
							alt=""
						/>
					</div>
					{/* instructions */}
					<div className="bg-sky-400 text-white lg:w-1/2 lg:rounded-tr-xl w-full lg:rounded-br-xl  px-6 py-2 flex flex-col">
						<div className="flex items-center align-middle justify-between">
							<p className="text-xl font-bold">
								{mealDetails.strMeal}
							</p>
							<p className=" bg-rose-400 p-2 text-sm font-bold rounded-full px-3">
								{mealDetails.strCategory}
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-xl font-bold">Instruction</p>
							<p className=" text-sm font-semibold">
								{mealDetails.strInstructions}
							</p>
						</div>
						<div className="my-4">
							<h1 className="text-md font-bold">Ingredients</h1>
							<div className="flex items-start gap-9">
								<ul className="text-sm">
									<li>{mealDetails.strIngredient1}</li>
									<li>{mealDetails.strIngredient2}</li>
									<li>{mealDetails.strIngredient3}</li>
									<li>{mealDetails.strIngredient4}</li>
									<li>{mealDetails.strIngredient5}</li>
									<li>{mealDetails.strIngredient6}</li>
									<li>{mealDetails.strIngredient7}</li>
									<li>{mealDetails.strIngredient8}</li>
									<li>{mealDetails.strIngredient9}</li>
								</ul>
								<ul className="text-sm">
									<li>{mealDetails.strIngredient10}</li>
									<li>{mealDetails.strIngredient11}</li>
									<li>{mealDetails.strIngredient12}</li>
									<li>{mealDetails.strIngredient13}</li>
									<li>{mealDetails.strIngredient14}</li>
									<li>{mealDetails.strIngredient15}</li>
									<li>{mealDetails.strIngredient16}</li>
									<li>{mealDetails.strIngredient17}</li>
									<li>{mealDetails.strIngredient18}</li>
									<li>{mealDetails.strIngredient19}</li>
									<li>{mealDetails.strIngredient20}</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-row justify-between">
							<div className="flex items-center gap-4">
								<Link to={mealDetails.strYoutube}>
									<FaYoutube className="text-red-500 text-4xl" />
								</Link>
								<p className="text-sm font-bold">
									Watch on Youtube
								</p>
							</div>
							<Link to={`/`}>
								<button className="bg-cyan-300 px-5 rounded-xl ">
									<IoMdArrowRoundBack className="text-3xl" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
