import React from "react";
import FansTop from "./FansTop";
import FansCommunityConnections from "./FansCommunityConnections";
import Artist from "../Artist/Artist";
import ArtistCommunity from "../Artist/ArtistCommunity";
import ArtistBottomSection from "../Artist/ArtistBottomSection";
import HomePageBottomSection from "../HomeSection/HomePageBottomSection";

const Fans = () => {
	return (
		<div>
			<FansTop />
			<FansCommunityConnections />
			<ArtistCommunity />
			<ArtistBottomSection />
			<HomePageBottomSection />
		</div>
	);
};

export default Fans;
