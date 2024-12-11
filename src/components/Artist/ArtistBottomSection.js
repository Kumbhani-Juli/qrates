import React, { useState } from "react";
import "../../assets/styles/artist/artistbottomsection.css";
import artistBottomImg from "../../assets/images/Artist/artistcolum1.avif";
import artistBottomImg2 from "../../assets/images/Artist/artistcolum2.avif";
const ArtistBottomSection = () => {
	const artistData1 = {
		text: "The response was overwhelming. It made me wonder why I hadn't	pressed any records on vinyl before now. It felt like something that		people had been waiting for for a long time. —SOL",
		bgImg: artistBottomImg,
		bgColor: " #fff804",
	};
	const artistData2 = {
		text: "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
		bgImg: artistBottomImg2,
		bgColor: "rgb(255,103,17)",
	};
	const [artistData, setArtistData] = useState(artistData1);
	const [activebutton, setActiveButton] = useState(1);
	return (
		<>
			<div
				className="artist-bottom-container"
				style={{ backgroundColor: artistData?.bgColor }}
			>
				<div className="artist-bottom-content">
					<button>ARTISTS ON QRATES</button>
					<h3>{artistData?.text}</h3>
					<div className="artist-bottom-tab-button">
						<button
							onClick={() => {
								setArtistData(artistData1);
								setActiveButton(1);
							}}
							style={{
								backgroundColor: activebutton === 1 ? "black" : "transparent",
								color: activebutton === 1 ? "white" : "black",
							}}
						>
							1
						</button>
						<button
							onClick={() => {
								setArtistData(artistData2);
								setActiveButton(2);
							}}
							style={{
								backgroundColor: activebutton === 2 ? "black" : "transparent",
								color: activebutton === 2 ? "white" : "black",
							}}
						>
							2
						</button>
					</div>
				</div>
				<div className="artist-bottom-img">
					<img src={artistData?.bgImg} />
				</div>
			</div>
		</>
	);
};

export default ArtistBottomSection;
