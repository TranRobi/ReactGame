import React, { useState } from "react";
import Shopping from "../Shopping/Shopping";

function Basket({ data, adatName, adat, setAdat, setAdatName }) {
	let [price, setPrice] = useState();
	const randomObject = (data) => {
		let rand = Math.floor(Math.random() * 9 + 0);
		let item = data[rand];
		return item;
	};

	const handleClick = () => {
		for (let index = 0; index < 3; index++) {
			adat.push(randomObject(data));
			setAdat([...adat]);
		}
	};
	const handleDelete = () => {
		adat = [];
		setAdat(adat);
	};
	const handeDeleteItem = (index) => {
		adatName.splice(index, 1);
		setAdatName([...adatName]);
	};
	const calcultePrice = () => {
		let sum = 0;
		for (let index = 0; index < adatName.length; index++) {
			sum += adatName[index].price;
		}
		setPrice(sum);
	};
	return (
		<div className="h-lvh">
			<div className="border-solid border-2 border-black w-4/5 m-4 flex flex-col justify-center align-middle p-3">
				<h1 className="font-bold font-sans text-2xl">Kosár tartalma: </h1>
				<div className="p-2">
					{adatName.map((item, index) => {
						return (
							<div className="flex flex-row" key={index}>
								<p className="font-bold mr-4">{item.name}</p>
								<button
									className="text-red-700"
									onClick={() => handeDeleteItem(index)}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<div className="m-4 flex flex-row">
				<button
					className="border-solid border-2 border-green-600 bg-green-600 text-black w-fit p-2"
					onClick={calcultePrice}
				>
					Összeg kiszámolása
				</button>
				<p className="p-2">Végösszeg: {price}</p>
			</div>

			<Shopping data={adat} adatName={adatName} />
			<div className="m-4">
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
	);
}

export default Basket;
