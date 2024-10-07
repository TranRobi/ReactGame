import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Basket from "../src/components/Basket/Basket";
import Data from "./data.json";
import { useState } from "react";

function App() {
	let [basket, setBasket] = useState([]);
	let [adatName, setAdatName] = useState([]);
	return (
		<>
			<Navbar />
			<div className="mt-5">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								data={Data}
								setBasket={setBasket}
								basket={basket}
								adatName={adatName}
								setAdatName={setAdatName}
							/>
						}
					/>
					<Route
						path="/basket"
						element={<Basket data={Data} adatName={adatName} />}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
