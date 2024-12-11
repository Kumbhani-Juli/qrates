import React from "react";
import ForFans from "./ForFans";
import HomePageForArtistsSection from "./HomePageForArtistsSection";
import HomePageArtistToolkitSection from "./HomePageArtistToolkitSection";
import HomePageTryItNowSection from "./HomePageTryItNowSection";
import HomePageBottomSection from "./HomePageBottomSection";
import HomePageTopSection from "./HomePageTopSection";

const Home = () => {
	return (
		<>
			<HomePageTopSection />
			<ForFans />
			<HomePageForArtistsSection />
			<HomePageArtistToolkitSection />
			<HomePageTryItNowSection />
			<HomePageBottomSection />
		</>
	);
};

export default Home;
