import Data from "../../data.json";

function Home() {
	console.log(Data);
	return (
		<>
			<h1 className="font-serif text-center text-xl">Termékek</h1>
			<div className="flex flex-wrap p-5 m-5 justify-center align-middle">
				{Data.map((data) => {
					return (
						<div
							key={data.id}
							className="border-solid border-2 border-black w-fit p-4 m-5"
						>
							<img src={data.img} className="kepek" />
							<h3>{data.name}</h3>
							<h3>{data.price}</h3>
						</div>
					);
				})}
			</div>
		</>
	);
}
export default Home;
