import Header from "./components/Header";
import React from "react";
import "./App.css";
import Home from "./components/HomeSection/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "./components/Artist/Artist";
function App() {
	return (
		<>
			{" "}
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />{" "}
					<Route path="/for-artists" element={<Artist />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
