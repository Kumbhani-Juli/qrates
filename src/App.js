import Header from "./components/Header";
import React from "react";
import "./App.css";
import Home from "./components/HomeSection/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "./components/Artist/Artist";
import Fans from "./components/Fans/Fans";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Record from "./components/Record";
import Cassette from "./components/Cassettes";
import Strories from "./components/Stories";
function App() {
	return (
		<>
			{" "}
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />{" "}
					<Route path="/for-artists" element={<Artist />} />
					<Route path="/for-fans" element={<Fans />} />{" "}
					<Route path="/sign-in" element={<SignIn />} />{" "}
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/records" element={<Record />} />{" "}
					<Route path="/cassettes" element={<Cassette />} />
					<Route path="/stories" element={<Strories />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
