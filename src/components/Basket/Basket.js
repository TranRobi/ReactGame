import React, { useState } from "react";

function Basket({ data, adatName }) {
	let [adat, setAdat] = useState([]);
	const randomObject = (data) => {
		let rand = Math.floor(Math.random() * 9 + 0);
		let item = data[rand];
		return item;
	};

	const handleClick = () => {
		adat = [];
		for (let index = 0; index < 3; index++) {
			adat.push(randomObject(data));
			setAdat([...adat]);
		}
	};
	const handleDelete = () => {
		adat = [];
		setAdat([...adat]);
	};
	return (
		<div className="h-lvh">
			<div className="border-solid border-2 border-black w-4/5 m-4 flex flex-col justify-center align-middle p-3">
				<h1 className="font-bold font-sans text-2xl">Kosár tartalma: </h1>
				<div className="p-2">
					{adatName.map((item) => {
						return <p>{item}</p>;
					})}
				</div>
			</div>
			<div className="border-solid border-2 border-black w-4/5 m-4 flex flex-col justify-center align-middle p-3">
				<h1 className="font-bold font-sans text-2xl">Bevásárló lista: </h1>
				<div className="p-2">
					{adat.map((item) => {
						return (
							<p
								className={
									adatName.includes(item.name)
										? "w-fit text-red-600"
										: "w-fit text-green-600"
								}
							>
								{item.name}
							</p>
						);
					})}
				</div>
				<div>
					<button
						onClick={handleClick}
						className="border-solid border-2 border-green-600 bg-green-600 text-black w-fit p-2  mr-4"
					>
						Hozd létre
					</button>
					<button
						onClick={handleDelete}
						className="border-solid border-2 border-red-600 bg-red-600 text-black w-fit p-2 "
					>
						Új bevásárló lista
					</button>
				</div>
			</div>
		</div>
	);
}

export default Basket;
