import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Basket from "../src/components/Basket/Basket";

function App() {
	return (
		<>
			<Navbar />
			<div className="mt-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/basket" element={<Basket />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
