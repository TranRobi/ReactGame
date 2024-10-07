function Home({ data, setBasket, basket, setAdatName, adatName }) {
	const handleClick = (e) => {
		basket.push(e);
		setBasket([...basket]);

		adatName.push(e.name);
		setAdatName([...adatName]);
	};
	return (
		<>
			<h1 className="font-serif text-center text-7xl">Termékek</h1>
			<div className="flex flex-wrap p-5 m-5 justify-center align-middle">
				{data.map((e) => {
					return (
						<div
							key={e.id}
							className="border-solid border-2 border-black w-fit p-4 m-5 text-center shadow-2xl rounded-r-lg"
						>
							<img
								src={e.img}
								className="kepek border-solid border-black border-2"
							/>
							<h3>Név: {e.name}</h3>
							<h3>Ára: {e.price}</h3>
							<button
								className="border-solid border-2 border-green-600 p-4 bg-green-600 rounded"
								onClick={() => handleClick(e)}
							>
								Kosárhoz adás
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}
export default Home;
