import React from "react";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="flex h-[80vh] justify-center items-center">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
