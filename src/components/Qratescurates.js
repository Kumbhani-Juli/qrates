import React from "react";
import QratescurateTopsection from "./qratescuratessection/QratescurateTopsection";
import QratesLatestStories from "./qratescuratessection/QratesLatestStories";
import QratesCuratedReleasOfTheWeek from "./qratescuratessection/QratesCuratedReleasOfTheWeek";
import QratesCuratedArtistToolkit from "./qratescuratessection/QratesCuratedArtistToolkit";
import QratesCuratedLatestArticles from "./qratescuratessection/QratesCuratedLatestArticles";

const Qratescurates = () => {
	return (
		<div>
			<div style={{ backgroundColor: "#e4e5de" }}>
				<QratescurateTopsection />
				<QratesLatestStories />
				<QratesCuratedReleasOfTheWeek />
				<QratesCuratedArtistToolkit />
				<QratesCuratedLatestArticles />
			</div>
		</div>
	);
};

export default Qratescurates;
