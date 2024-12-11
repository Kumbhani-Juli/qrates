import React from "react";
import "../../assets/styles/artist/artisttop.css";
import artistimg1 from "../../assets/images/Artist//artisttop1.avif";
import artistimg2 from "../../assets/images/Artist/artisttop2.avif";
import artistimg3 from "../../assets/images/Artist/artisttopcircle.svg";
const ArtistTop = () => {
	return (
		<>
			<div className="Artist-top-container">
				<div className="artist-top-left-content">
					<div className="artist-top-button">
						<p>for artists</p>
					</div>
					<h1>Music in your hands. Without the barriers.</h1>
					<p>
						Full-service production, a global retail network, customer support -
						and you keep up to 85% of profits. ↓
					</p>
				</div>

				<img
					src={artistimg1}
					alt="artist-img"
					className="artist-top-section-img-1"
				/>
				<img
					src={artistimg2}
					alt="artist-img"
					className="artist-top-section-img-2"
				/>
				<img
					src={artistimg3}
					alt="artist-img"
					className="artist-top-section-img-3"
				/>
			</div>
		</>
	);
};

export default ArtistTop;
