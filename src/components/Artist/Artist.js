import React from "react";
import ArtistTop from "./ArtistTop";
import ArtistFormateSection from "./ArtistFormateSection";
import ArtistMiddleSection from "./ArtistMiddleSection";
import ArtistNewProject from "./ArtistNewProject";
import ArtistCommunity from "./ArtistCommunity";
import ArtistBottomSection from "./ArtistBottomSection";
import HomePageTryItNowSection from "../HomeSection/HomePageTryItNowSection";
const Artist = () => {
	return (
		<>
			<ArtistTop />
			<ArtistFormateSection />
			<ArtistMiddleSection />
			<ArtistNewProject />
			<ArtistCommunity />
			<ArtistBottomSection />
			<HomePageTryItNowSection />
		</>
	);
};

export default Artist;
