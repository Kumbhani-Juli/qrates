import React from "react";
import sectionImg1 from "../../assets/images/Artist/artistpromiseleft.avif";
import sectionImg2 from "../../assets/images/Artist/artistpromiseright.avif";
import "../../assets/styles/artist/artistformatesection.css";
const ArtistFormateSection = () => {
	return (
		<>
			<div className="for-artists-page-format-section-container">
				<div className="for-artists-page-format-section-title">
					<h4>Choose from two formats with promised quality</h4>
				</div>
				<div className="row mx-0 for-artists-page-format-section-content">
					<div className="col-md-6 for-artists-page-format-section-left-content">
						<div className="for-artists-page-format-section-left-content-title">
							<h3>Vinyl</h3>
							<p>
								We know how special pressed records are to you. Our products are
								built for fans, by fans. We make it easy for artists to press
								vinyl, so the music you love can keep reaching ears in the most
								beautiful way.
							</p>
						</div>
						<div className="for-artists-page-format-section-left-content-img">
							<img
								src={sectionImg1}
								className="img-fluid"
								alt="section-left-img"
							/>
						</div>
					</div>
					<div className="col-md-6 for-artists-page-format-section-right-content">
						<div className="for-artists-page-format-section-right-content-title">
							<h3>Cassette</h3>
							<p>
								Cassettes have always been special to music fans and artists.
								Whether you are saving a recording of a great concert, or
								preserving an early demo, there’s no better way to keep that
								music close than on cassette tapes.
							</p>
						</div>
						<div className="for-artists-page-format-section-right-content-img">
							<img
								src={sectionImg2}
								className="img-fluid"
								alt="section-right-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArtistFormateSection;
