import React, { useEffect } from "react";

function Shopping({ data, adatName }) {
	useEffect(() => {}, adatName);
	return (
		<div className="border-solid border-2 border-black w-4/5 m-4 flex flex-col justify-center align-middle p-3">
			<h1 className="font-bold font-sans text-2xl">Bevásárló lista: </h1>
			<div className="p-2">
				{data.map((item, index) => {
					return (
						<p
							key={index}
							className={
								adatName[index].name === item.name
									? "w-fit text-green-600"
									: "w-fit text-red-600"
							}
						>
							{item.name}
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default Shopping;
